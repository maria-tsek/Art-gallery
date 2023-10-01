import styled from "styled-components";
import Navigation from "./Navigation";

const LayoutWrapper = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: grey;
  color: white;
  padding: 25px;
  text-align: center;
  font-size: 2rem;
`;

const Main = styled.main`
  padding: 20px;
`;

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header>Gallery</Header>
      <Main>{children}</Main>
      <Navigation />
    </LayoutWrapper>
  );
}