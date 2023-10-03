import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { useState } from "react";
import { uid } from "uid";

export default function ArtPieceDetailsPage({
  imageSource,
  name,
  artist,
  year,
  genre,
  artPiecesInfo,
  onToggleFavorite,
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
        />
      </div>
      <CommentForm onAddComment={handleAddComment} />
      <Comments comments={comments} />
    </>
  );
}
