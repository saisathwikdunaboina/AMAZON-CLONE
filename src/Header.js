import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from './Firebase';

function  Header() {
    const [{ basket,user }, dispatch] = useStateValue();
    
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
           <Link to="/Home">
            <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </Link>
            <div className="header_search">
         <input className="header_searchInput" type="text" />
         
         <SearchIcon className="header_searchIcon"> </SearchIcon>
         

        </div>
        <div className="header_nav">
            <Link to={!user && '/Login'}>
            <div onClick={handleAuthentication} className="header_option">
                <span className='header_optionLineOne'>Hello {!user ? 'Guest': user.email}</span>
                <span className='header_optionLineTwo'>{user ? 'sign Out' : 'sign In'}</span>             
            </div>
            </Link>

            <Link to='/orders'>
            <div className="header_option">
            <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
                
            </div>
            </Link>

            <Link to='https://www.primevideo.com/'>
            <div className="header_option">
            <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>

                
            </div>
            </Link>
            <Link to="/Checkout">
            <div className="header_optionBasket"> <ShoppingBasketIcon></ShoppingBasketIcon>
                 
                 <span className='header_optionLineTwo header_BasketCount'>{basket?.length} </span>
            </div>
            </Link>
        </div>

        </div>


    )
}

export default  Header
