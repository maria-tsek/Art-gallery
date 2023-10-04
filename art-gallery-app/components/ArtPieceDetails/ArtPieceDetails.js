import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { useState } from "react";
import { uid } from "uid";
import Colors from "../Colors/colors";

export default function ArtPieceDetails({
  slug,
  imageSource,
  name,
  artist,
  year,
  genre,
  artPiecesInfo,
  onToggleFavorite,
  colors,
  
}) {
  const [comments, setComments] = useState([]);

  function handleAddComment(newComment) {
    const date = new Date().toLocaleDateString("en-gb", {
      dateStyle: "medium",
    });
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setComments([...comments, { id: uid(), time, date, ...newComment }]);
  }

  console.log("comments", comments);
  console.log("colors", colors);

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
        <FavoriteButton
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
          isFavorite={artPiecesInfo.find((artPiece) => artPiece.slug === slug)?.isFavorite}
        />
      </div>
      <Colors colors={colors}/>
      <CommentForm onAddComment={handleAddComment} />
      <Comments comments={comments} />
    </>
  );
}
