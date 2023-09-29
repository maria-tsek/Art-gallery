import ArtPiecePreview from "./ArtPiecePreview";
import ArtPieces from "./ArtPieces";

export default function Spotlight({
  randomPieceName,
  randomPieceArtist,
  randomPieceImage,
}) {

  return (
    <>
      <ArtPiecePreview imageSource={randomPieceImage} name={randomPieceName} artist={randomPieceArtist}/>
    </>
  );
}
