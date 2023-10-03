import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({ pieces, onToggleFavorite }) {
  // console.log("pieces", pieces);

  const randomIndex = Math.floor(Math.random() * pieces.length);
  const randomPiece = pieces[randomIndex];

  return (
    <>
      <Spotlight
        randomPiece={randomPiece}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
