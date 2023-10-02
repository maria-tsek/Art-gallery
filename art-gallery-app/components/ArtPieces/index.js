import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview";

const ArtPiecesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
`;

export default function ArtPieces({ pieces }) {
  return (
    <ArtPiecesWrapper>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          imageSource={piece.imageSource}
          name={piece.name}
          artist={piece.artist}
          slug={piece.slug}
          imageDimensions={piece.dimensions}
        />
      ))}
    </ArtPiecesWrapper>
  );
}
