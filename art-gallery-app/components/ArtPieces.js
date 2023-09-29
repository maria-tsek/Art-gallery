
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (

    <>
      <ul>
        {pieces.map((piece) => {
          return (
            <li key={piece.slug}>
              <ArtPiecePreview
                piece={piece}
                // image={image}
                // title={title}
                // artist={artist}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

[ {}, {}, {}]