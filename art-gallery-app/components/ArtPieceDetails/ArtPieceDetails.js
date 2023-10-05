import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { uid } from "uid";
import Colors from "../Colors/colors";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const BackLink = styled(Link)`
  font-size: 16px;
  margin-bottom: 20px;
  text-decoration: none;
  color: var(--color-dark-blue);

  &:hover {
    text-decoration: underline;
  }
`;

const ArtInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  & > h1 {
    font-size: 28px;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  & > p {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

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
  const [comments, setComments] = useImmerLocalStorageState("comment", {
    defaultValue: [],
  });

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

  return (
    <Wrapper>
      <BackLink href={`/art-pieces`}>⬅ Back</BackLink>
      <ArtInfoSection>
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
          isFavorite={
            artPiecesInfo.find((artPiece) => artPiece.slug === slug)?.isFavorite
          }
        />
      </ArtInfoSection>
      <Colors colors={colors} />
      <CommentForm onAddComment={handleAddComment} />
      <Comments comments={comments} />
    </Wrapper>
  );
}
