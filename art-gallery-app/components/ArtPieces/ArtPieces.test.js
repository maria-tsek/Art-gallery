import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

const pieces = [
  {
    slug: "testPiece1",
    imageSource: "/testImage1.jpg",
    name: "testName1",
    artist: "testArtist1",
  },
  {
    slug: "testPiece2",
    imageSource: "/testImage2.jpg",
    name: "testName2",
    artist: "testArtist2",
  },
];

test("renders all art pieces as a list", () => {
  render(<ArtPieces pieces={pieces} />);

  const artPiecesList = screen.getByRole("list");
  expect(artPiecesList).toBeInTheDocument();
});

test("renders each art piece's image", () => {
  render(<ArtPieces pieces={pieces} />);

  const artPieceImages = screen.getAllByRole("img");
  expect(artPieceImages).toHaveLength(pieces.length);
});

test("renders each art piece's title", () => {
  render(<ArtPieces pieces={pieces} />);

  const artPieceTitles = screen.getAllByRole("heading");
  expect(artPieceTitles).toHaveLength(pieces.length);

  // Alternative:
  //   pieces.forEach((piece) => {
  //     expect(screen.getByText(piece.name)).toBeInTheDocument();
  //   });
});

test("renders each art piece's artist", () => {
  render(<ArtPieces pieces={pieces} />);

  pieces.forEach((piece) => {
    expect(screen.getByText(piece.artist)).toBeInTheDocument();
  });
});
