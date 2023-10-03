import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 20px 0;
`;

const ColorBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

export default function Colors({ colors }) {
  return (
    <>
      <h3>Color Palette:</h3>
      <Container>
        {colors.map((color, index) => (
          <ColorBox key={index} style={{ backgroundColor: color }} />
        ))}
      </Container>
    </>
  );
}
