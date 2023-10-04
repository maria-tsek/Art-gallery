import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

const ArtPiecesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 0 100px 0;
  background-color: #a8dadc;
  padding: 30px;
`;

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  // let favoriteSlugs = artPiecesInfo.map((piece) => piece.slug);

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
          onToggleFavorite={onToggleFavorite}
          isFavorite={
            artPiecesInfo.find((artPiece) => artPiece.slug === piece.slug)
              ?.isFavorite
          }
        />
      ))}
    </ArtPiecesWrapper>
  );
}
