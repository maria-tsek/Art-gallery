import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then(res => res.json())

const URL = "https://example-apis.vercel.app/api/art";
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
export default function App({ Component, pageProps }) {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  useEffect(() => {
    if (pieces) setArtPiecesInfo(pieces);
  }, [pieces]);

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);

    if (artPiece) {
      const updatedArtPieces = artPiecesInfo.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite ?? false }
          : piece
      );
      setArtPiecesInfo(updatedArtPieces);
    }
  }
  if (!artPiecesInfo) return;
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
