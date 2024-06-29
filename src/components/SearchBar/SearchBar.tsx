import React from "react";
import { BsSearch } from "react-icons/bs";
import { Field, Form, Formik } from "formik";

import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { SearchBarProps } from "../../types";


const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const notify = () => {
    toast.error("Please enter a search query!");
  };

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (values.query.trim() === "") {
          notify();
        } else {
          onSubmit(values.query);
          actions.resetForm();
        }
      }}
    >
      <Form className={css.container}>
        <button type="submit" className={css.btn}>
          <BsSearch />
        </button>
        <Field
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <Toaster />
      </Form>
    </Formik>
  );
}

export default SearchBar;
