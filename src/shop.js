import './css/shop.css'
import img1 from './images/cabbage.png'
import img2 from './images/carrat.png'
import img3 from './images/p3.jpg'
import img4 from './images/p4.png'
import img5 from './images/p5.png'
import img6 from './images/p6.png'
import img7 from './images/p7.png'
import img8 from './images/p8.png'
import img9 from './images/p9.jpg'
import img10 from './images/p10.jpg'
import img11 from './images/p11.jpg'
import img12 from './images/p12.jpg'
import logo from './images/logo.png'




function Shop() {
    return (
        <>
         <p className='veg'>VEGETABLES</p>
            <div class="flip">
                <div class="front">
                    <img src={img1} alt='image' />
                    <p class="text-shadow">CABBAGE</p>
                </div>
                <div class="back">
                    <h2>CABBAGE</h2>
                    <p>Cabbage <br />
                        ₹ 25/ Kg<br />
                        Sold By - Vegetable Corner, Surat, Gujarat</p>
                </div>
            </div>
            <div class="flip">
                <div class="front">
                    <img src={img2} alt='image' />
                    <p class="text-shadow">CARROT</p>
                </div>
                <div class="back">
                    <h2>CARROT</h2>
                    <p>Carrot<br />
                        ₹ 60/ Kg<br />
                        Sold By - Vegetable Corner, Surat, Gujarat</p>
                </div>
            </div>
            <div class="flip">
                <div class="front">
                    <img src={img3} alt='image' />
                    <p class="text-shadow">BRINJAL</p>
                </div>
                <div class="back">
                    <h2>BRINJAL</h2>
                    <p>Brinjal<br />
                        ₹ 45/ Kg<br />
                        Sold By - Vegetable Corner, Surat, Gujarat</p>
                </div>
            </div>
            <div class="flip">
                <div class="front">
                    <img src={img4} alt='image' />
                    <p class="text-shadow">CAULIFLOWER</p>
                </div>
                <div class="back">
                    <h2>Cauliflower</h2>
                    <p>Cauliflower<br />
                        ₹ 45/ Kg<br />
                        Sold By - Raj Traders, Navsari, Gujarat</p>
                </div>
            </div>

            <div className='fruits'>
            <p className='veg'>FRUITS</p>
                <div class="flip">
                    <div class="front">
                        <img src={img5} alt='image' />
                        <p class="text-shadow">STRAWBERRY</p>
                    </div>
                    <div class="back">
                        <h2>STRAWBERRY</h2>
                        <p>Fresh Strawberry <br />Packaging Type: punnet <br /> Packaging Size: 500 gm <br />
                            ₹ 100/ Kg<br />
                            Color: red</p>
                    </div>
                </div>
                <div class="flip">
                    <div class="front">
                        <img src={img6} alt='image' />
                        <p class="text-shadow">MANGO</p>
                    </div>
                    <div class="back">
                        <h2>MANGO</h2>
                        <p>Yellow Alphonso Mangoes<br />
                            ₹ 100/ Kg <br /> Color: Yellow <br /> Quality Available: A Grade</p>
                    </div>
                </div>
                <div class="flip">
                    <div class="front">
                        <img src={img7} alt='image' />
                        <p class="text-shadow">WATERMELON</p>
                    </div>
                    <div class="back">
                        <h2>WATERMELON</h2>
                        <p>A Grade Fresh Watermelon <br /> ₹ 10/ Kg <br /> Storage: Cool And Dry Place
                        </p>
                    </div>
                </div>
                <div class="flip">
                    <div class="front">
                        <img src={img8} alt='image' />
                        <p class="text-shadow">KIWI</p>
                    </div>
                    <div class="back">
                        <h2>KIWI</h2>
                        <p>Kiwi <br />
                            ₹ 340/ Kg <br />
                            Packaging Size: 5 Kg
                        </p>
                    </div>
                </div>
            </div>

            <div className='fruits'>
            <p className='veg'>GRAIN</p>
                <div class="flip">
                    <div class="front">
                        <img src={img9} alt='image' />
                        <p class="text-shadow">WHEAT</p>
                    </div>
                    <div class="back">
                        <h2>WHEAT</h2>
                        <p>Golden 25 Kg Wheat, Gluten Free<br />
                            ₹ 23/ Kg <br /> Packaging Size 25 Kg</p>
                    </div>
                </div>
                <div class="flip">
                    <div class="front">
                        <img src={img10} alt='image' />
                        <p class="text-shadow">SORGHUM</p>
                    </div>
                    <div class="back">
                        <h2>SORGHUM</h2>
                        <p>Organic Jowar Seed<br />
                            ₹ 34/ Kg<br />
                            Moisture: 12%<br />
                            Form: Seed</p>
                    </div>
                </div>
                <div class="flip">
                    <div class="front">
                        <img src={img11} alt='image' />
                        <p class="text-shadow">MILLET</p>
                    </div>
                    <div class="back">
                        <h2>MILLET</h2>
                        <p>Foxtail Millet<br />
                            ₹ 100Kg <br /> Packaging Type 30kg</p>
                    </div>
                </div>
                <div class="flip">
                    <div class="front">
                        <img src={img12} alt='image' />
                        <p class="text-shadow">RICE</p>
                    </div>
                    <div class="back">
                        <h2>RICE</h2>
                        <p>Indian Basmati Rice <br /> ₹ 95/ Kg  Type: Pusa Basmati <br /> Variety: Long-Grain Rice <br />  Color: Golden</p>
                    </div>
                </div>
            </div>

            <div class="pg-footer">
                <footer class="footer">
                    <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                    </svg>
                    <div class="footer-content">
                        <div class="footer-content-column">
                            <div class="footer-logo">
                                <img src={logo} className="logo" alt='img' />
                            </div>
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Get Started</h2>
                                <ul id="menu-get-started" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a href="#">Start</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a href="#">Documentation</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a href="#">Installation</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-content-column">
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Company</h2>
                                <ul id="menu-company" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Contact</a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                                        <a href="#">News</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Careers</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Legal</h2>
                                <ul id="menu-legal" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                                        <a href="#">Privacy Notice</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-content-column">
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Quick Links</h2>
                                <ul id="menu-quick-links" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-custom menu-item-object-custom">
                                        <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                                    </li>
                                    <li class="menu-item menu-item-type-custom menu-item-object-custom">
                                        <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Security</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Blog</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                                        <a href="#">Customers</a></li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Reviews</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-content-column">
                            <div class="footer-call-to-action">
                                <h2 class="footer-call-to-action-title"> Let's Chat</h2>
                                <p class="footer-call-to-action-description"> Have a support question?</p>
                                <a class="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
                            </div>
                            <div class="footer-call-to-action">
                                <h2 class="footer-call-to-action-title"> You Call Us</h2>
                                <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> +91 XXXXX XXXXX </a></p>
                            </div>
                        </div>
                        <div class="footer-social-links"> <svg class="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                            <path class="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
                        </svg>

                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="footer-copyright-wrapper">
                            <p class="footer-copyright-text">
                                <a class="footer-copyright-link" href="#" target="_self"> ©2024.| Designed by: Neharika Sabhaya, Shruti Gajera, Butani Ami | All rights reserved. </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )

}
export default Shop