import React from 'react'
import "./Home.css";
import Product from './product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />
                <div className="home_row">
                    <Product 
                             id="12321341"
                             title="New Apple iPhone 12 Pro Max (512GB) - Graphite"
                             price={2060.66}
                             image="https://m.media-amazon.com/images/I/71XXJC7V8tL._AC_UY218_.jpg"
                             rating={4}
                    />
                    <Product id="49538094"
                             title="Canon EOS 80D 24.2MP Digital SLR Camera (Black) + EF-S 18-135mm f/3.5-5.6 Image Stabilization USM Lens Kit"
                             price={1214.78}
                             rating={4}
                             image="https://m.media-amazon.com/images/I/61VFkA-rceL._AC_UY218_.jpg"
          />  
                </div>
                <div className="home_row">
                <Product id="4903850"
                         title="SONY Wireless Noise Canceling Stereo Headphone WH-CH700N-HM (Gray)"
                         price={268.49}
                         rating={3}
                         image="https://m.media-amazon.com/images/I/818CX11OWYL._AC_UY218_.jpg"
                   />
                <Product 
                         id="23445930"
                         title="WireScorts Bot Robot Toy"
                         price={0.33}
                         rating={5}
                         image="https://m.media-amazon.com/images/I/7139FuqxgjL._AC_UL320_.jpg"
                       />
                <Product 
                         id="3254354345"
                         title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                         price={598.99}
                         rating={4}
                         image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                       />
                </div>
                <div className="home_row">
                <Product
                         id="90829332"
                         title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                         price={1094.98}
                         rating={4}
                         image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        />
        
                </div>

            </div>
           
        </div>
    )
}

export default Home

