import ArtPiecePreview from "../ArtPieceRreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => {
          return (
            <li key={piece.slug}>
              <ArtPiecePreview
                imageSource={piece.imageSource}
                name={piece.name}
                artist={piece.artist}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
