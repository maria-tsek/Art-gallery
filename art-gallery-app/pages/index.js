import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";
// import { useRouter } from "next/router";

export default function SpotlightPage({pieces}) {
  // const router = useRouter();

  const randomIndex = Math.floor(Math.random() * pieces.length);
  const randomPiece = pieces[randomIndex];
  console.log("pieces: ", pieces);
  console.log("randomIndex", randomIndex);

  // router.push(`/${randomPieceSlug}`);
  console.log("randomPiece", randomPiece);

  return (
    <>
      <h1>Gallery</h1>
      <Spotlight pieces={pieces} randomPiece={randomPiece} />
    </>
  );
}
