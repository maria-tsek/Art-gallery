import ArtPieces from "@/components/ArtPieces/ArtPieces";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

export default function FavoritePage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  let filteredFavorite = pieces.filter((piece) => {
    return artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    );
  });

  return (
    <PageWrapper>
      <Heading>Favorite Art Pieces</Heading>
      <ArtPieces
        pieces={filteredFavorite}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </PageWrapper>
  );
}
