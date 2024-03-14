import c1 from './images/c1.png'
import c2 from './images/c2.png'
import c3 from './images/c3.png'
import c4 from './images/c4.webp.png'
import c5 from './images/c5.webp.png'
import c6 from './images/c6.png'
import c7 from './images/c7.png'
import c8 from './images/c8.png'
import c9 from './images/c9.png'
import c10 from './images/c10.png'
import c11 from './images/c11.png'
import c12 from './images/c12.png'
import c13 from './images/c13.png'
import c14 from './images/c14.png'
import c15 from './images/c15.png'
import c16 from './images/c16.png'
import cart1 from './images/cart1.png'
import cart2 from './images/cart2.png'
import icon from './images/Icon.png'
import i1 from './images/tik1.png'
import i2 from './images/tik2.png'
import i3 from './images/tik3.png'
import vid from './images/video.mp4'
import f1 from './images/f1.png'
import f2 from './images/f2.png'
import f3 from './images/f3.png'
import logo from './images/logo.png'


function Home() {
    return (
        <>
            <div className="main-container">
                <h3>Welcome to agrios farming</h3>
                <h1> Agriculture & <br /> Eco Farming </h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br />
                    luctus nec ullamcorper mattis, pul
                    vinar dapibus leo.</h5>
            </div >

            <div className="row">
                <div className="col-md-3">
                    <div className="carddd">
                        <h2 className='fe'>Feature 01</h2> <br />
                        <h6 className='we'>We're using a <br /> new technology</h6><br />
                        <img src={c1} alt='img' />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="carddd">
                        <h2 className='fe'>Feature 02</h2><br />
                        <h6 className='we'>Good in smart <br /> organic services</h6><br />
                        <img src={c2} alt='img' />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="carddd">
                        <h2 className='fe'>Feature 03</h2><br />
                        <h6 className='we'>Reforming <br />in the systems</h6><br />
                        <img src={c3} alt='img' />
                    </div>
                </div>
            </div>

            <div className="cardd">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={c4} className="ttt" alt="images" />
                            <img src={c5} className="tt" alt="images" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className='ourr'>Our Introduction</h2>
                                <h5 className="card-title">Agriculture & Organic Product Farm</h5>
                                <p className="there">Agrios is the largest global organic farm.</p>
                                <p className="card-text"><small class="text-body-secondary"></small></p>  <br />
                                <p className="are">There are many variations of passages of lorem ipsum available but the
                                    majority have suffered alteration in some form by injected humor or
                                    random word which don’t look even.</p>
                                <img src={cart1} className='v1' style={{ marginLeft: 200 }} alt='img' />
                                <h4 id='grow'>Growing fruits <br /> vegetables</h4>
                                <img src={cart2} className='v2' style={{ marginLeft: 470 }} alt='img' />
                                <h4 id='grows'>Tips for ripening Your Fruits</h4>
                                <h4><img src={icon} style={{ marginRight: 20 }} alt='img' />Lorem Ipsum is not simply random text.</h4>
                                <h4><img src={icon} style={{ marginRight: 20 }} alt='img' />Making this the first true generator on the internet.</h4>
                                <button className="bttn">Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offer">
                <h2 className='se'>our services</h2>
                <p className="what">What We Offer </p> <br />
                <div className="row" id="row">
                    <div className="col-md-3">
                        <img src={c6} alt='img' />
                    </div>
                    <div className="col-md-3">
                        <img src={c7} alt='img' />
                    </div>
                    <div className="col-md-3">
                        <img src={c8} alt='img' />
                    </div>
                    <div className="col-md-3">
                        <img src={c9} alt='img' />
                    </div>
                </div>
            </div>

            <div>
                <video src={vid} className='video' autoPlay />
            </div>
            <div className="explor">
                <h2 className='se'>Recently Completed</h2>
                <p className="what">Explore Projects </p> <br />
                <div className="row" id="row">
                    <div className="col-md-4">
                        <img src={c10} alt='img' />
                    </div>
                    <div className="col-md-4">
                        <img src={c11} alt='img' />
                    </div>
                    <div className="col-md-4">
                        <img src={c12} alt='img' />
                    </div>

                </div>
            </div>

            <br /> <br />
            <h2 className='se'>Our Testimonials</h2>
            <p className="what"> What They're Talking About Agrios</p>
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={f1} alt='img' />
                        <div class="carousel-caption d-none d-md-block">
                            <p className="sname">Lisa M</p>
                            <p className="spar">There are many variations of passages of available but the <br />
                                majority have suffered alteration in some form by injected <br />
                                humor or random word which don't look even.</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={f2} alt='img' />
                        <div class="carousel-caption d-none d-md-block">
                            <p className="sname">james de franco</p>
                            <p className="spar">There are many variations of passages of available but the <br />
                                majority have suffered alteration in some form by injected <br />
                                humor or random word which don't look even.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={f3} alt='img' />
                        <div class="carousel-caption d-none d-md-block">
                            <p className="sname">Bonnie Tolbert</p>
                            <p className="spar">There are many variations of passages of available but the <br />
                                majority have suffered alteration in some form by injected <br />
                                humor or random word which don't look even.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="card-last">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col">
                            <img src={c13} alt="images" />
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h2>Our Farm Benefits</h2>
                                <p className="b2"> Why Choose Agrios Market</p>
                                <p>There are many variations of passages of available but the
                                    majortity have sufferred alteration in some form by injected
                                    humor or random word which don't look even.</p>
                                <p className="b1"><img src={i1} alt='img' /> Quality Organic Food </p>
                                <p className="b3">There are variation You need to be sure there is anything hidden in the middle of text.</p>
                                <p className="b1"><img src={i2} alt='img' /> Professional Farmers </p>
                                <p className="b3">There are variation You need to be sure there is anything hidden in the middle of text.</p>
                                <p className="b1"><img src={i3} alt='img' /> Quality Products </p>
                                <p className="b3">There are variation You need to be sure there is anything hidden in the middle of text.</p>
                                <button className="btnn">Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog">
                <h2 className='se'>From the Blog</h2>
                <p className="what">News & Articles</p>
                <div className="row" id="row">
                    <div className="col-md-4">
                        <img src={c14} alt='img' />
                    </div>
                    <div className="col-md-4">
                        <img src={c16} alt='img' />
                    </div>
                    <div className="col-md-4">
                        <img src={c15} alt='img' />
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
                            <img src={logo} className='agri' alt='image'/>
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
                                <h2 class="footer-call-to-action-title" style={{ color: 'black' }}> Let's Chat</h2>
                                <p class="footer-call-to-action-description"> Have a support question?</p>
                                <a class="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
                            </div>
                            <div class="footer-call-to-action">
                                <h2 class="footer-call-to-action-title" style={{ color: 'black' }}> You Call Us</h2>
                                <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:+91 XXXXX XXXXX" target="_self">+91 XXXXX XXXXX </a></p>
                            </div>
                        </div>
                        <div class="footer-social-links"> <svg class="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                            <path class="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
                        </svg>
                            <a class="footer-social-link linkedin" href="#" target="_blank">
                                <span class="hidden-link-text">Linkedin</span>
                            </a>
                            <a class="footer-social-link twitter" href="#" target="_blank">
                                <span class="hidden-link-text">Twitter</span>
                            </a>
                            <a class="footer-social-link youtube" href="#" target="_blank">
                                <span class="hidden-link-text">Youtube</span>

                            </a>
                            <a class="footer-social-link github" href="#" target="_blank">
                                <span class="hidden-link-text">Github</span>
                            </a>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="footer-copyright-wrapper">
                            <p class="footer-copyright-text">
                                <a class="footer-copyright-link" href="#" target="_self"> ©️2024. | Designed By: Neharika Sabhaya,Gajera Shruti,Butani Ami. | All rights reserved. </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>


        </>
    )
}
export default Home

