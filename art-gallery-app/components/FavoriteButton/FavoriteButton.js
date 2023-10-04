import { HeartIcon } from "@/assets/HeartIcon";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--color-cool-grey);
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <StyledButton onClick={() => onToggleFavorite(slug)}>
      <HeartIcon fill={isFavorite ? "red" : "black"} />
    </StyledButton>
  );
}
