##Create the ArtPieceDetails component:

## components/ArtPieceDetails.js

<!-- import { useRouter } from "next/router";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/art-pieces"); // Navigate back to the art pieces list page
  };

  return (
    <div>
      <img src={image} alt={`image of ${title}`} />
      <h1>{title}</h1>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
} -->

## the page ::

<!-- import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArtPieceDetails from "../../../components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces }) {
  const [selectedArtPiece, setSelectedArtPiece] = useState(null);
  const router = useRouter(); GET ACCES TO THE ROUTER OBJECT
  const { slug } = router.query;

  useEffect(() => {
    setSelectedArtPiece(pieces.find((piece) => piece.slug === slug));
  }, [setSelectedArtPiece, pieces, slug]);

  if (!selectedArtPiece) {
    return null;
  }

  return (
    <ArtPieceDetails
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.name}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
      onBack={() => router.back()}
    />
  );
} -->
