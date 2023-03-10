import Link from "next/link";
import { useRouter } from "next/router";
import { lighten } from "polished";
import styled from "styled-components";

export default function NavLink({ title, path, includes = false }) {
  const router = useRouter();

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();
  return (
    <S.NavLinkContainer isActive={isActive}>
      <Link legacyBehavior href={path}>
        <a id="link">{title}</a>
      </Link>
    </S.NavLinkContainer>
  );
}

const S = {
  NavLinkContainer: styled.li`
    a {
      text-transform: uppercase;
      color: ${(props) =>
        props.isActive ? props.theme.primary : props.theme.textHighlight};
      transition: 0.5s;

      &:hover {
        color: ${(props) =>
          props.isActive
            ? lighten(0.2, props.theme.primary)
            : lighten(0.2, props.theme.textHighlight)};
      }
    }
  `,
};
