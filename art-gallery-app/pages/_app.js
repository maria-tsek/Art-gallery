import Layout from "@/components/Layout";
import GlobalStyle from "../styles";

import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then(res => res.json())

const URL = "https://example-apis.vercel.app/api/art";
export default function App({ Component, pageProps }) {
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
  // console.log("pieces: ", pieces);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} pieces={pieces} />
      </Layout>
    </>
  );
}
