import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageModalProps } from "../../types";


Modal.setAppElement("#modal");

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  modalIsOpen,
  closeModal,
}) => {

   if (!modalIsOpen || !image) {
    return null; 
    
  }

 const { full = "", alt_description = "" } = image;

  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnEsc={true}
      onRequestClose={closeModal}
      className={css.modal}
      contentLabel={alt_description}
      overlayClassName={css.overlay}
    >
      <img src={full} alt={alt_description} className={css.image} />
    </Modal>
  );
}

export default ImageModal;