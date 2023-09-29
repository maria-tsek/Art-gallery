import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import { useRouter } from "next/router";
const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const router = useRouter();
  const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log("pieces: ", pieces);

  const randomIndex = Math.floor(Math.random() * pieces.length);
  const randomPieceName = pieces[randomIndex].name;
  const randomPieceArtist = pieces[randomIndex].artist;
  const randomPieceImage = pieces[randomIndex].imageSource;
  // router.push(`/${randomPieceSlug}`);
  // console.log("randomPieceSlug", randomPieceSlug);

  return (
    <>
      <h1>Gallery</h1>
      <div>
        <ArtPieces pieces={pieces} />
      </div>

      <Spotlight
        randomPieceName={randomPieceName}
        randomPieceArtist={randomPieceArtist}
        randomPieceImage={randomPieceImage}
      />
    </>
  );
}
