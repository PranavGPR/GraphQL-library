import { useState } from "react";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";

import { getAuthorsQuery, addBookMutation } from "../queries/queries";

function AddBook(props) {
  const [book, setBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const handleChange = (e) => {
    setBook((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(book);
    props.addBookMutation();
  };

  const displayAuthors = () => {
    let data = props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>Loading authors...</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };
  return (
    <form id='add-book' onSubmit={submitForm}>
      <div className='field'>
        <label>Book name:</label>
        <input
          type='text'
          name='name'
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input
          type='text'
          name='genre'
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select
          name='authorId'
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
