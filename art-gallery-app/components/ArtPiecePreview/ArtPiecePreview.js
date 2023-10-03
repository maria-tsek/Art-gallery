import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const ArtPieceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  padding: 20px;
  text-align: center;
  width: 350px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ArtImage = styled(Image)`
  position: relative;
  border: 2mm ridge #f2cd5c;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 12px;
`;

const Artist = styled.p`
  color: black;
  margin-top: 8px;
`;

export default function ArtPiecePreview({
  imageSource,
  name,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
  imageDimensions,
}) {
  return (
    <ArtPieceWrapper>
      <Link href={`/art-pieces/${slug}`}>
        <ArtImage
          style={{ width: "80%", height: "auto" }}
          // width={imageDimensions.width}
          // height={imageDimensions.height}
          width={240}
          height={240}
          src={imageSource}
          alt={`image of ${name}`}
        />
        <Title>{name}</Title>
        <Artist>{artist}</Artist>
      </Link>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </ArtPieceWrapper>
  );
}
