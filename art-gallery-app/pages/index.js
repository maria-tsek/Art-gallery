import ArtPieces from "../components/ArtPieces/ArtPieces";
import Spotlight from "../components/Spotlight/Spotlight";
// import { useRouter } from "next/router";

export default function SpotlightPage({ pieces }) {
  // const router = useRouter();

  const randomIndex = Math.floor(Math.random() * pieces.length);
  const randomPiece = pieces[randomIndex];

  return (
    <>
      <Spotlight pieces={pieces} randomPiece={randomPiece} />
    </>
  );
}
