import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
const URL = "https://example-apis.vercel.app/api/art";
export default function HomePage() {
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

  return (
    <div>
      <ArtPieces pieces={pieces}/>
    </div>
  );
}
