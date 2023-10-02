import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavoritePage({ pieces, onToggleFavorite }) {
  const favoritePieces = pieces.filter((piece) => piece.isFavorite);
  return (
    <>
      <h1>Favorite Art Pieces</h1>
      <ArtPieces pieces={favoritePieces} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
