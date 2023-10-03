import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavoritePage({ pieces, onToggleFavorite }) {
  let filteredFavorite = pieces.filter((piece) => piece.isFavorite);

  console.log("filterFavorite", filteredFavorite);

  return (
    <>
      <h1>Favorite Art Pieces</h1>
      <ArtPieces
        pieces={filteredFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
