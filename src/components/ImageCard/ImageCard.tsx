import React from "react";
import { ImageCardProps } from "../../types";
import css from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardProps> = ({
  image: {
    alt_description,
    urls: { small, full },
  },
  openModal,
}) => {
  const handleClick = () => {
    openModal({ full, alt_description });
  };

  return (
    <div>
      <img
        onClick={handleClick}
        src={small}
        alt={alt_description}
        className={css.croppedImage}
      />
    </div>
  );
}

export default ImageCard;