import React from 'react';
import "./Home.css";
import Product from "./Product";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="home img" className="home__image"/>
                <div className="home__row">
                    <Product
                        id={1}
                        title="Demon slayer mugen train"
                        price={69}
                        image="http://prodimage.images-bn.com/pimages/9781974704422_p0_v2_s1200x630.jpg"
                        rating={5}
                    />
                    <Product 
                        id={2}
                        title="Rising of the shield hero"
                        price={69}
                        image="https://images-na.ssl-images-amazon.com/images/I/81lAIPP2XkL.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id={3}
                            title="Erased"
                            price={69}
                            image="https://images-na.ssl-images-amazon.com/images/I/81i4f5iPHiL.jpg"
                            rating={5}
                    />
                    <Product
                        id={4} 
                            title="Hunter x Hunter"
                            price={69}
                            image="https://images-na.ssl-images-amazon.com/images/I/51K4waiYZeL._SX331_BO1,204,203,200_.jpg"
                            rating={5}
                    />
                    <Product 
                        id={5}
                            title="Black Clover"
                            price={69}
                            image="https://i.pinimg.com/736x/a1/71/a1/a171a18bd951d02462eec6c2ea359aec.jpg"
                            rating={5}
                    />
                </div>
                <div className="home__row">
                    
                    
                </div>
            </div>
            
        </div>
    )
}

export default Home
