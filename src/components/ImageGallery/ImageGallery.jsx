import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, isOpen }) {
  return (
    <ul className={css.container}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard image={item} isOpen={isOpen} />
        </li>
      ))}
    </ul>
  );
}
