import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SuggestedRead = () => {
  const navigate = useNavigate();
  const booksState = useSelector((state) => state.booksState.books);
  const suggestedbyRead = booksState.filter((book) => book.isRead == false);

  return (
    <div className="suggesteds">
      <h5>You have'nt read them yet</h5>
      <div className="panel">
        {suggestedbyRead.map((suggested) => {
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

export default SuggestedRead;
