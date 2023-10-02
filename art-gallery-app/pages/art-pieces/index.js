import ArtPieces from "@/components/ArtPieces/ArtPieces";

import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPiecesPage({ pieces, onToggleFavorite }) {
  const router = useRouter();

  return (
    <>
      <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
