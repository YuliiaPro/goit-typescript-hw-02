import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import type {Image, ModalData} from "../../types"


const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ModalData | null>(null);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    
    async function fetchImages(): Promise<void> {
      try {
        setError(false);
        setLoading(true);
        const { results, totalPage } = await getImages<Image>(searchQuery, page);
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

  const handleSearch = async (topic:string) => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  const openModal = (image: ModalData) => {
      setSelectedImage(image);
    setIsOpen(true);   
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <ImageModal
        modalIsOpen={modalIsOpen}
        image={selectedImage} 
        closeModal={closeModal}
      />
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} openModal={openModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && showBtn && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
}


export default App;