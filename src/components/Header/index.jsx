import styled from "styled-components";

import NavLink from "./NavLink";

function Header() {
  return (
    <S.Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Home1" path="/home1" includes />
        <NavLink title="Home2" path="/home2" includes />
        {/* <NavLink title="Projetos" path="/projetos" includes /> */}
      </ul>
    </S.Container>
  );
}

const S = {
  Container: styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

    ul {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
  `,
};

export default Header;
