import './style.scss';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';


const Home = () => {



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
      <Link to="/checkout">
                <Button type="button">
                    Checkout
                </Button>
            </Link>

       
      </div>
    </div>
  );
};

export default Home;
