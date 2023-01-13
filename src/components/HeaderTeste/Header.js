import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

import { device } from "../Grid/breakpoints";
import { Container } from "../UIBase";
import LinkDuo from "../LinkDuo";
import ToolBar from "../../containers/ToolBar";
import Menu from "../Menu";

const Header = ({ provider, menu, hasToolbar, toolbar, home, logo, title }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    global.window.addEventListener("scroll", handleScroll, { passive: true });
    return () => global.window.removeEventListener("scroll", handleScroll);
  }, []);

  let currentScroll = 0;
  const minScroll = 85;
  const handleScroll = () => {
    setVisible(currentScroll < minScroll || currentScroll > window.pageYOffset);
    currentScroll = window.pageYOffset;
  };
  return (
    <S.Header className={visible ? "visible" : "hide"} provider={provider}>
      {hasToolbar && (
        <ToolBar
          provider={provider}
          toolbar={toolbar}
          home={home}
          logo={logo}
        />
      )}
      <Container constrains className="container">
        <S.Logo>
          <LinkDuo href="/">
            <h1>EVENSE LOGO</h1>
          </LinkDuo>
        </S.Logo>

        <Menu menu={menu} title={title} />
      </Container>
      <GlobalStyle provider={provider} />
    </S.Header>
  );
};

const GlobalStyle = createGlobalStyle`
  #root {
    padding-top: 85px;

    @media ${device.desktop} {
      padding-top: 105px;
    }
  }
`;

Header.propTypes = {
  provider: PropTypes.string,
  menu: PropTypes.array,
  toolbar: PropTypes.object,
  home: PropTypes.bool,
  hasToolbar: PropTypes.bool,
  logo: PropTypes.object,
};

Header.defaultProps = {
  provider: "",
  menu: [],
  logo: {
    url: undefined,
    alt: undefined,
  },
};

const S = {
  Header: styled.header`
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 75px;
    background: var(--be-bg-menu);
    border-bottom: 1px solid var(--be-border-primary);
    transition: transform 0.5s ease-out;

    &.hide {
      transform: translate3d(0, -105px, 0);
    }

    &.visible {
      transform: translate3d(0, 0, 0);
    }

    .container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
    }

    @media ${device.desktop} {
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
      }
    }
  `,
  Logo: styled.div`
    width: fit-content;

    @media ${device.desktop} {
      margin-top: 0;
    }
  `,
};

export default Header;
