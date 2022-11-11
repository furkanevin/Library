import BookDetails from '../components/BookDetails';
import Header from '../components/Header';
import ListBooks from './../components/ListBooks';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <h1>Home Page</h1>
      <ListBooks />
    </div>
  );
};
export default Home;
