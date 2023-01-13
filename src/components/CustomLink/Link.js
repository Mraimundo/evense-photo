import Link from "next/link";
import { useRouter } from "next/router";
import { lighten } from "polished";
import styled from "styled-components";
import { device, screenSize } from "../../components/Grid/breakpoints";

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
    <S.NavLinkContainer>
      <Link legacyBehavior href={path}>
        <a id="link">{title}</a>
      </Link>
    </S.NavLinkContainer>
  );
}

const S = {
  NavLinkContainer: styled.div`
    a {
      text-transform: uppercase;
      font-size: 24px;
      color: red;
      &#link:hover {
        color: blueviolet;
      }
    }
  `,
};
