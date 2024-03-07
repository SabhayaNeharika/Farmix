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
                <h2>our services</h2>
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
            <br /><br /><br />
            <div className="explor">
                <h2>Recently Completed</h2>
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
            <h2>Our Testimonials</h2>
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
                                <button className="btn">Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog">
                <h2>From the Blog</h2>
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


        </>
    )
}
export default Home