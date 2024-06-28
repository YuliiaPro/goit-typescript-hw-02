import css from "./ImageCard.module.css";

export default function ImageCard({
  image: {
    alt_description,
    urls: { small, full },
  },
  isOpen,
}) {
  const handleClick = () => {
    isOpen({ full, alt_description });
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
