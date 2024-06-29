import React from "react";
import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../../types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <button className={css.button} onClick={handleLoadMore}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
