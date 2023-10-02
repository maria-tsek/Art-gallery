import Link from "next/link";
import styled from "styled-components";

const NavigationWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: grey;
  color: white;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    li {
      margin: 1px;
      a {
        text-decoration: none;
        font-size: 20px;
        color: white;
        padding: 10px;
        border: 2px solid white;
        border-radius: 20px;
        display: inline-block;
        transition: all 0.3s;
        margin-right: 80px;
        margin-left: 80px;
        &:hover {
          background-color: white;
          color: grey;
        }
      }
    }
  }
`;
export default function Navigation() {
  return (
    <NavigationWrapper>
      <ul>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">Art pieces</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </ul>
    </NavigationWrapper>
  );
}
