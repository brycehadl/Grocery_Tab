import './style.scss';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import Auth from '../../utils/auth';

const Home = () => {

  const handleButton = async () => {};

  useEffect(() => {
    if (!Auth.loggedIn) {
      redirect('/login');
    } 
  }, []);

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
