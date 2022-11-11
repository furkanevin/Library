import Header from '../components/Header';
import ListBooks from './../components/ListBooks';
import { useParams, Link } from 'react-router-dom';

const Home = () => {
  const bookId = useParams();
  return (
    <div className="home">
      <Header />
      <ListBooks />
    </div>
  );
};
export default Home;
