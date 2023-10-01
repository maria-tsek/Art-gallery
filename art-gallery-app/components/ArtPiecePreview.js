import styled from "styled-components";
import Image from "next/image";

const ArtPieceWrapper = styled.div`
  border: 1px solid;
  padding: 16px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ArtImage = styled(Image)`
  position: relative;
  width: 243px;
  height: 192px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 12px;
`;

const Artist = styled.p`
  color: black;
  margin-top: 8px;
`;

export default function ArtPiecePreview({ imageSource, name, artist }) {
  return (
    <ArtPieceWrapper>
      <ArtImage
        src={imageSource}
        alt={`image of ${name}`}
        width={243}
        height={192}
      />
      <Title>{name}</Title>
      <Artist>{artist}</Artist>
    </ArtPieceWrapper>
  );
}
