export interface Image {
  alt_description: string,
    urls: { small: string, full:string }  
}

export interface ModalData {
  full: string;
  alt_description: string;
}

export type ModalOpener = (data: ModalData) => void;

export interface ImageCardProps {
    image: Image;
    openModal: ModalOpener;
}

export interface ImageGalleryProps {
    items: Image[];
    openModal: ModalOpener;
}


export interface ImagesApiResponse<T> {
   results: T[];
  totalPage: number; 
}

export interface ImageModalProps {
    image: ModalData | null;
    modalIsOpen: boolean;
    closeModal: () => void;
}

export interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

export interface SearchBarProps {
    onSubmit: (query: string) => void;
}
