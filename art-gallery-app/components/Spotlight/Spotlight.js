import React from "react";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

const SpotlightWrapper = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
  padding: 20px;
  text-align: center;
`;

const SpotlightHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

// import ArtPieces from "../ArtPieces";

export default function Spotlight({ randomPiece, onToggleFavorite }) {
  return (
    <SpotlightWrapper>
      <SpotlightHeading>Spotlight Page</SpotlightHeading>
      <ArtPiecePreview
        imageSource={randomPiece.imageSource}
        name={randomPiece.name}
        artist={randomPiece.artist}
        slug={randomPiece.slug}
        onToggleFavorite={onToggleFavorite}
        isFavorite={randomPiece.isFavorite}
      />
    </SpotlightWrapper>
  );
}
