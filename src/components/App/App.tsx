import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);
        const { results, totalPage } = await getImages(searchQuery, page);
        setShowBtn(totalPage !== page);
        setImages((prevState) => [...prevState, ...results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = async (topic) => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ImageModal
        modalIsOpen={modalIsOpen}
        image={selectedImage}
        closeModal={closeModal}
      />
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} isOpen={openModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && showBtn && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
}
