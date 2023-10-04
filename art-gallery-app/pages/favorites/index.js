import ArtPieces from "@/components/ArtPieces/ArtPieces";

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

  console.log("filterFavorite", filteredFavorite);

  return (
    <>
      <h1>Favorite Art Pieces</h1>
      <ArtPieces
        pieces={filteredFavorite}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
