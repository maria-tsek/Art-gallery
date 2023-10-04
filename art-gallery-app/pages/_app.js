import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";

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

  // Option 2: using only one state (pieces), and mutating it on handleToggleFavorite(button click)
  // In case with only one state, tried SWR localStorageProvider() hook, but didn't work!
  // const { data: pieces, error, isLoading } = useSWR(URL, fetcher), {
  //   onSuccess: (pieces) => {
  //     localStorageProvider().set("pieces", pieces);
  //   },
  // });

  // function localStorageProvider() {
  //   if (typeof window !== "undefined") {
  //     const map = new Map(JSON.parse(localStorage.getItem("pieces") || "[]"));

  //     window.addEventListener("beforeunload", () => {
  //       const appCache = JSON.stringify(Array.from(map.entries()));
  //       localStorage.setItem("pieces", appCache);
  //     });

  //     return map;
  //   }
  // }
  // localStorageProvider(pieces);

  // function handleToggleFavorite(slug) {
  //   mutate((pieces) => {
  //     const clickedPiece = pieces.find((piece) => piece.slug === slug);

  //     if (clickedPiece) {
  //       return pieces.map((piece) =>
  //         piece.slug === slug
  //           ? { ...piece, isFavorite: !piece.isFavorite }
  //           : piece
  //       );
  //     }
  //     return [...pieces, { slug, isFavorite: true }];
  //   }, false);
  //   localStorageProvider(pieces);
  // }

  // Option 1: Implementing 2 states:
  // DATA is all the pieces
  // A second state, an array, to hold only the slug from the piece you liked, and save it in the local storage
  // In the favorites page filter the DATA with the favorites array

  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  console.log("pieces", pieces);
  console.log("artPiecesInfo", artPiecesInfo);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={pieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
