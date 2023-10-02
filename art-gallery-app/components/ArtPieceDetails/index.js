import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
}) {
  return (
    <>
      <Link href={`/art-pieces`}>⬅ Back</Link>
      <div>
        <Image
          src={imageSource}
          alt={`image of ${name}`}
          width={243}
          height={192}
        />
        <h1>{name}</h1>
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </div>
    </>
  );
}
