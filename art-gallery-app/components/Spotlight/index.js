import React from "react";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ArtPiecePreview from "../ArtPiecePreview";

const SpotlightWrapper = styled.div`
  background-color: white;
  padding: 20px;
  text-align: center;
`;

const SpotlightHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

// import ArtPieces from "../ArtPieces";

export default function Spotlight({
  randomPiece,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <SpotlightWrapper>
      <SpotlightHeading>Spotlight Page</SpotlightHeading>
      <ArtPiecePreview
        imageSource={randomPiece.imageSource}
        name={randomPiece.name}
        artist={randomPiece.artist}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={randomPiece.slug}
      />
    </SpotlightWrapper>
  );
}
