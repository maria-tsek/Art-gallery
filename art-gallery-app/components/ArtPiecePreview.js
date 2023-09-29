import Image from "next/image";


export default function ArtPiecePreview({ imageSource, name, artist }) {
  return (
    <>
      <Image
        src={imageSource}
        alt={`image of ${name}`}
        width={486}
        height={384}
      />
      <h3>{name}</h3>
      <p>{artist}</p>
    </>
  );
}
