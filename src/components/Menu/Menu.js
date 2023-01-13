import React, { useState, useEffect, memo } from "react";
import { useAmp } from "next/amp";
import styled, { createGlobalStyle } from "styled-components";
import CustomLink from "../CustomLink/Link";
import PropTypes from "prop-types";

import { device, screenSize } from "../../components/Grid/breakpoints";

const HamburgerMenu = ({ onClick, className, isAmp }) => (
  <S.HamburgerMenu onClick={onClick} className="hamburger_wrapper toggleMenu">
    <div
      id="hamburger"
      tabIndex="0"
      role="button"
      on={
        isAmp
          ? "tap:hamburger.toggleClass(class='close'),nav.toggleClass(class='open')"
          : undefined
      }
      className={className}
    >
      <span />
      <span />
      <span />
    </div>
  </S.HamburgerMenu>
);

const AmpMenu = memo(function AmpMenu() {
  return (
    <S.MenuItem className="menu-item">
      <S.MobileMenuWrapper isOpenMenu>
        <CustomLink title="Home" path="/" className="menu-link cs-menu" />
        <CustomLink title="Home1" path="/home1" className="menu-link cs-menu" />
        <CustomLink title="Home2" path="/home2" className="menu-link cs-menu" />
      </S.MobileMenuWrapper>
    </S.MenuItem>
  );
});

const Menu = ({ title }) => {
  const isAmp = useAmp();

  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <S.MenuWrapper data-component-name="menu">
      <HamburgerMenu
        onClick={toggleOpenMenu}
        className={openMenu ? "close" : ""}
        isAmp={isAmp}
      />
      <S.Nav isOpenMenu={openMenu} id={isAmp ? "nav" : ""}>
        {isAmp ? <AmpMenu title={title} /> : <MenuLinks title={title} />}
      </S.Nav>
      {openMenu && <GlobalStyle />}
    </S.MenuWrapper>
  );
};

const MenuLinks = () => {
  return (
    <S.Menu>
      <S.MenuItem className="menu-item">
        <>
          <CustomLink title="Home" path="/" className="menu-link" />
          <CustomLink title="Home1" path="/home1" className="menu-link" />
          <CustomLink title="Home2" path="/home2" className="menu-link" />
        </>
      </S.MenuItem>
    </S.Menu>
  );
};

const GlobalStyle = createGlobalStyle`
  #root {
    height: 100vh;
    overflow: hidden;
  }
`;

HamburgerMenu.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  isAmp: PropTypes.bool,
};

HamburgerMenu.defaultProps = {
  onClick: undefined,
  className: undefined,
  isAmp: false,
};

AmpMenu.propTypes = {
  menu: PropTypes.array,
};

AmpMenu.defaultProps = {
  menu: [],
};

Menu.propTypes = {
  menu: PropTypes.array,
  noBrand: PropTypes.bool,
};

Menu.defaultProps = {
  items: [],
  menu: [],
};

MenuLinks.propTypes = {
  menu: PropTypes.array,
  isOpenMenu: PropTypes.bool,
};

const S = {
  MenuWrapper: styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    .toggleMenu {
      position: absolute;
      top: 50%;
      right: 16px;
      font-size: 24px;
      color: var(--be-text-primary);
      transform: translate(-50%, -50%);
      @media ${device.desktop} {
        display: none;
      }
    }
  `,
  Nav: styled.nav`
    position: fixed;
    top: 51px;
    left: 0;
    width: 100%;
    height: calc(100vh - 51px);
    padding: 32px 32px 55px;
    margin: 0;
    overflow: hidden;
    background: var(--be-bg-secondary);
    transition: transform 0.3s 0.1s ease-in-out;
    transform: scaleY(${({ isOpenMenu }) => (isOpenMenu ? "1" : "0")});
    transform-origin: top;
    .menu-item {
      opacity: ${({ isOpenMenu }) => (isOpenMenu ? "1" : "0")};
      transition: ${({ isOpenMenu }) =>
          isOpenMenu ? "opacity .2s .3s" : "opacity .2s"},
        left 0.3s ease-in-out;
    }
    &.open {
      transform: scaleY(1);
      transform-origin: top;
    }
    &.open > .menu-item {
      opacity: 1;
      transition: "opacity .2s .3s" left 0.3s ease-in-out;
    }
    &#nav {
      .menu-link {
        display: flex;
        justify-content: space-between;
        flex-direction: column-reverse;
        width: 100%;
        margin-bottom: var(--be-spacing-layout-01);
      }
      @media ${device.desktop} {
        .menu-item {
          opacity: 0;
        }
      }
    }

    @media ${device.desktop} {
      position: static;
      width: auto;
      height: 100%;
      padding: 0;
      margin: 8px 0;
      overflow: visible;
      background: none;
      transition: unset;
      transform: scaleY(1);
      .menu-item {
        opacity: 1;
      }

      #link:hover {
        color: red;
      }
      .menu-item,
      .menu-item:hover {
        color: red;
      }
    }
  `,
  Menu: styled.ul`
    .menu-link {
      font-size: var(--be-font-size-body2);
      color: var(--be-text-primary);
      white-space: nowrap;
    }
    .menu-link:hover {
      color: var(--be-brand-primary);
    }

    @media ${device.desktop} {
      display: flex;
      gap: 2rem;
      align-items: center;
      height: 100%;
      margin-bottom: 0;
      .menu-link,
      .menu-link:hover {
        color: var(--be-brand-green-light);
      }
    }
  `,
  HamburgerMenu: styled.div`
    width: 18px;
    height: 12px;
    #hamburger {
      position: relative;
    }

    #hamburger span {
      left: 0;
      display: block;
      width: 100%;
      height: 2px;
      background: var(--be-base-secondary-dark);
      border-radius: 9px;
      opacity: 1;
      transition: 0.2s ease-in-out;
      transform: rotate(0deg);
    }
    #hamburger span:nth-child(1) {
      top: 0;
      transform-origin: left center;
    }
    #hamburger span:nth-child(2) {
      top: 21px;
      margin: 3px 0;
      transform-origin: left center;
    }
    #hamburger span:nth-child(3) {
      transform-origin: left center;
    }
    #hamburger.close span:nth-child(1) {
      position: absolute;
      top: -4px;
      transform: rotate(45deg);
    }
    #hamburger.close span:nth-child(2) {
      width: 0%;
      opacity: 0;
      transition: 0.1s;
    }
    #hamburger.close span:nth-child(3) {
      position: absolute;
      top: 8px;
      transform: rotate(-45deg);
    }
  `,
  MenuItem: styled.li`
    position: relative;
    left: ${({ isOpenSubMenu }) => (isOpenSubMenu ? "-100vw" : "0")};
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    margin-bottom: 12px;
    list-style: none;
    transition: opacity 0.2s, left 0.3s ease-in-out;
    div:first-child {
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      width: 100%;
    }
    @media ${device.desktop} {
      position: relative;
      flex-direction: row;
      align-items: center;
      gap: 2.5rem;
      width: auto;
      height: 100%;
      padding-left: 16px;
      margin-bottom: 0;

      &.menu-link,
      .menu-link:hover {
        color: var(--be-brand-green-light);
      }
    }
  `,
};

export default React.memo(Menu);
