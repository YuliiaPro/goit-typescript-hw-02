import { BsSearch } from "react-icons/bs";
import { Field, Form, Formik } from "formik";

import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
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

// const handleSubmit = (values, actions) => {
//   onSubmit({
//     topic: values.topic,
//   })

//   if (form.elements.topic.value.trim() === "") {
//     alert("Please enter search term!");
//     return;
//   }
//   actions.resetForm();
// };

//export default function SearchBar({ onSubmit }) {
// const handleSubmit = (evt) => {
//   evt.preventDefault();
//   const form = evt.target;
//   const topic = form.elements.topic.value;

//   if (form.elements.topic.value.trim() === "") {
//     alert("Please enter search term!");
//     return;
//   }
//   onSubmit(topic);
//   form.reset();
// };

//   return (
//     <Formik
//       initialValues={{ topic: "" }}
//       onSubmit={(values, actions) => {
//         onSubmit(values.topic);
//         actions.resetForms();
//       }}
//     >
//       <Form>
//         <Field
//           type="text"
//           name="topic"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//         <button type="submit">Search</button>
//       </Form>
//     </Formik>
//   );
// }
