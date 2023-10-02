import React from "react";
import styled from "styled-components";

const SpotlightWrapper = styled.div`
  background-color: white;
  padding: 20px;
  text-align: center;
`;

const SpotlightHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;
import ArtPiecePreview from "../ArtPieceRreview";
// import ArtPieces from "../ArtPieces";

export default function Spotlight({ randomPiece }) {
  return (
    <SpotlightWrapper>
      <SpotlightHeading>Spotlight Page</SpotlightHeading>
      <ArtPiecePreview
        imageSource={randomPiece.imageSource}
        name={randomPiece.name}
        artist={randomPiece.artist}
      />
    </SpotlightWrapper>
  );
}
