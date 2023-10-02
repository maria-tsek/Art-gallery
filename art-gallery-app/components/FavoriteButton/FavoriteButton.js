import React from "react";
// import Image from "next/image";
import Heart from "../../assets/heart.svg"

export default function FavoriteButton({ artPiecesInfo, onToggleFavorite }) {
  return (
    <button artPiecesInfo={artPiecesInfo} onClick={onToggleFavorite}>
        <Heart/>
      {/* <Image src="../assets/heart.svg" alt="favorite button logo" width={24} height={24}/> */}
      
    </button>
  );
}
