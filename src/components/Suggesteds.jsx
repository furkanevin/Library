import { useSelector } from 'react-redux';

const Suggesteds = (props) => {
  const booksState = useSelector((state) => state.booksState.books);
  const { categoryId, thisCategory } = props;
  const suggestedCategory = booksState.filter(
    (book) => book.categoryId === categoryId
  );
  return (
    <div className="suggesteds">
      <h5>Anothers from {thisCategory}</h5>
      <div className="panel">
        {suggestedCategory.map((suggested) => {
          const { title, author } = suggested;
          return (
            <div>
              {title}
              <p>{author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Suggesteds;
