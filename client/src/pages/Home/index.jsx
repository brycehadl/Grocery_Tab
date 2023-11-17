import './style.scss';
import { Button } from 'react-bootstrap';

const Home = () => {

  const handleButton = async () => {}

  return (
    <div id="home-page">
      <div>
        <h1>Grocery Tab</h1>
      </div>
      <div>
        <Button type="button" onClick={handleButton}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Home;
