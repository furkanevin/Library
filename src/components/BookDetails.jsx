import React from 'react';
import { useParams } from 'react-router-dom';
import '.././style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
const BookDetails = () => {
  const bookId = useParams();
  console.log(bookId);

  return (
    <div className="blur">
      <div className="close"></div>
      <div className="Modal">
        <FontAwesomeIcon icon="faX" />
      </div>
    </div>
  );
};

export default BookDetails;
