import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();

  const { slug } = router.query;

  // show all the info of the painting "red orange and green"
  //   const pieceIndex = pieces.findIndex((piece) => piece.slug === slug);
  //   const piece = pieces[pieceIndex];

  const piece = pieces.find((piece) => piece.slug === slug);
  
  if (!piece) {
    return null;
  }

  return (
    <ArtPieceDetails
      imageSource={piece.imageSource}
      name={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
    />
  );
}
