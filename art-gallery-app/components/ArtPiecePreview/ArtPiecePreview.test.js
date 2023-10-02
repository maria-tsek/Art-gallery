import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

test("renders the art piece image", () => {
  render(<ArtPiecePreview imageSource="/testImage.jpg" name="testName" />);

  const artPieceImage = screen.getByRole("img");

  expect(artPieceImage).toBeInTheDocument();

  expect(artPieceImage).toHaveAttribute("alt", "image of testName");
  expect(artPieceImage).toHaveAttribute(
    "src",
    "/_next/image?url=%2FtestImage.jpg&w=1080&q=75"
  );
});

test("renders the art piece title", () => {
  render(<ArtPiecePreview imageSource="/image.jpg" name="testName" />);

  const artPieceTitle = screen.getByText("testName");
  expect(artPieceTitle).toBeInTheDocument();
});

test("renders the art piece artist", () => {
  render(<ArtPiecePreview imageSource="/testImage.jpg" artist="testArtist" />);

  const artPieceArtist = screen.getByText("testArtist");
  expect(artPieceArtist).toBeInTheDocument();
});
