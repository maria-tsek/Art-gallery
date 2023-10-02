import ArtPieces from "@/components/ArtPieces";

import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPiecesPage({ pieces }) {
  const router = useRouter();




  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}
