import Image from "next/image";

export default function ArtPiecePreview({ piece}) {
  return (
    <>
      <Image
        src={piece.imageSource}
        alt={`image of ${piece.name}`}
        width={486}
        height={384}
      />
      <h1>{piece.name}</h1>
      <p>{piece.artist}</p>
    </>
  );
}
