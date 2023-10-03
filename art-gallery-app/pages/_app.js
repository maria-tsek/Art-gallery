import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
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
  const { data: pieces, error, isLoading, mutate } = useSWR(URL, fetcher);
  // const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  // function handleToggleFavorite(slug) {
  //   setArtPiecesInfo((artPiecesInfo) => {
  //     const info = artPiecesInfo.find((info) => info.slug === slug);

  //     if (info) {
  //       console.log("info", info);
  //       return artPiecesInfo.map((info) =>
  //         info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
  //       );
  //     }
  //     return [...artPiecesInfo, { slug, isFavorite: true }];
  //   });
  // }


  function handleToggleFavorite(slug) {
    mutate((pieces) => {
      const clickedPiece = pieces.find((piece) => piece.slug === slug);

      if (clickedPiece) {
        return pieces.map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        );
      }
      return [...pieces, { slug, isFavorite: true }];
    }, false);
  }


  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={pieces}
          onToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
