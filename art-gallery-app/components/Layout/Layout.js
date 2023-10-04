import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const LayoutWrapper = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  // background-color: grey;
  background-color: #0abab5;
  color: white;
  padding: 25px;
  text-align: center;
  font-size: 2rem;
`;

const Main = styled.main`
  padding: 20px;
  margin-bottom: 70px;
`;

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header>Art Gallery</Header>
      <Main>{children}</Main>
      <Navigation />
    </LayoutWrapper>
  );
}
