import React from "react";
import { useState, useContext } from "react";
import BooksContext from "../context/books";

import BookEdit from "./BookEdit";

function BookShow({ book}) {
  const [showEdit, setShowEdit] = useState(false);

  const {deleteBookById} = useContext(BooksContext)

  const handleDelete = () => {
    deleteBookById(book.id);
  };

  const handleSubmit = () => {
    setShowEdit(false);
   
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit {"content"}
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
