import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const Header = styled.header`
  background-color: var(--color-dark-blue);
  color: white;
  padding: 25px;
  text-align: center;
  font-size: 2rem;
`;

const Main = styled.main`
  padding-left: 20px;
  font-family: Arial, sans-serif;
  margin-bottom: 100px;
  background-color: var(--color-cool-grey);
`;

export default function Layout({ children }) {
  return (
    <>
      <Header>Art Gallery</Header>
      <Main>{children}</Main>
      <Navigation />
    </>
  );
}
