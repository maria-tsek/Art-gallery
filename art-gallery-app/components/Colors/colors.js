import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
`;

const ColorBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: ${(props) => props.color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Heading = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--color-blue);
`;

export default function Colors({ colors }) {
  return (
    <>
      <Heading>Color Palette:</Heading>
      <Container>
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </Container>
    </>
  );
}
