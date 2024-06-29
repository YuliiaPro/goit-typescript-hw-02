import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../../types";



const ImageGallery:React.FC<ImageGalleryProps> = ({ items, isOpen }) => {
  return (
    <ul className={css.container}>
      {items.map((item, index) => (
        <li key={index}>
          <ImageCard image={item} isOpen={isOpen} />
        </li>
      ))}
    </ul>
  );
}
  
  
export default ImageGallery;