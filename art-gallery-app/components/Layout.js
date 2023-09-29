import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <header>Gallery</header>
      <main>{children}</main>
      <Navigation />;
    </>
  );
}
