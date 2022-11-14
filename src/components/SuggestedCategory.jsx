import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SuggestedCategory = (props) => {
  const navigate = useNavigate();
  const booksState = useSelector((state) => state.booksState.books);
  const { categoryId, thisCategory } = props;
  const suggestedCategory = booksState.filter(
    (book) => book.categoryId === categoryId
  );
  const [shouldIFetch, setShouldIFetch] = useState(false);
  return (
    <div className="suggesteds">
      <h5>
        Anothers from <span>{thisCategory}</span>{' '}
      </h5>
      <div className="panel">
        {suggestedCategory.map((suggested) => {
          const { id, title, author } = suggested;
          return (
            <div
              onClick={() => {
                navigate(`/book-detail/${id}`);
              }}
            >
              {title}
              <p>{author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestedCategory;
