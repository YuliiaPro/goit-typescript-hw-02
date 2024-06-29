export interface Image {
  alt_description: string,
    urls: { small: string, full:string }  
}

export interface ImageCardProps {
    image: Image;
    isOpen: (data: { full: string, alt_description: string }) => void;
}

export interface ImageGalleryProps {
    items: Image[];
    isOpen: (data: { full: string, alt_description: string }) => void;
}


export interface ImagesApiResponse<T> {
   results: T[];
  totalPage: number; 
}

export interface ImageModalProps {
    image: { full: string, alt_description: string };
    isOpen: boolean;
    closeModal: () => void;
}

export interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

export interface SearchBarProps {
    onSubmit: (query: string) => void;
}