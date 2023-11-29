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
    <div id="home-page" className='home-page'>
      <div id='Header-Home'>
        <span id="title-home">Grocery Tab</span>
        <Link to="/checkout" id='checkout'>
                <Button type="button" class='btn btn-success'>
                    Checkout
                </Button>
            </Link>
      </div>
      <div>


       
      </div>
    </div>
  );
};

export default Home;
