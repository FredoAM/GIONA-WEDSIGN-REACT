import { useState } from 'react'
import { Helmet } from 'react-helmet';
import Header from './Header'
import { Link } from 'react-router-dom';
import Footer from './Footer'

function HomePage({isOpen, setIsOpen}) {
 
  return (
    <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <main style={{ display: isOpen ? 'none' : 'block' }}>
            <div className="img-container">
                <img src="/assets/background-cover.jpg" alt=""/>
            </div>
            <div className="cover">
                <div className="titles">
                    <h3>14. 07. 2024</h3>
                    <h1>ALESSANDRO & GIULIA</h1>
                    <h4>Tuscany</h4> 
                </div>
            </div>
            <section className="our-story-section">
                <div className="our-story1">
                    <img  src="/assets/our-story-1.jpg" alt="" />
                </div>
                <div className="our-story-summary">
                    <h2>Join us as we embark on a journey of love, joy, and eternal happiness.</h2>
                    <p>From a chance meeting to a lifetime together, discover the chapters that brought us here. Our journey is a tapestry woven with laughter, tears, and countless moments that led us to this beautiful celebration of love.</p>
                    
                    <button><Link to="/OurStory">Read Our Story</Link></button>
                </div>
                {/* <!-- <div className="our-story2" >
                    <img src="/assets/our-story-2.jpg" alt="">
                </div> --> */}
            </section>

            <section className="confirm-section">
                <div>
                    <h2>In the Heart of</h2>
                    <h4>Tuscany</h4> 
                    <p>Step into the timeless beauty of Tuscany with our Giona wedding template. Set against the backdrop of rolling hills and lush vineyards, your celebration unfolds in the heart of a 17th-century villa, nestled amidst the enchanting landscape of Tuscany. </p>
                    <p>Surrounded by fragrant peach trees and bathed in the warm glow of the Italian sun, this picturesque setting exudes romance and charm at every turn. From intimate courtyard ceremonies to al fresco receptions under the stars, your love story comes to life in this idyllic Tuscan retreat. Let the rustic elegance and natural beauty of the villa set the stage for an unforgettable wedding day, where every moment is imbued with the magic of Italy.</p>
                    <button><Link to="/Rsvp">Confirm Your Presence</Link></button>
                </div>
                <img src="/assets/confirm-1.jpg" alt=""/>
            </section>

            <section className="schedule-section">
                <h2>Our Schedule</h2>
                <div className="schedule-activities">
                    <div>
                        <img src="assets/rings.png " alt=""/>
                        <h3>3:00 PM</h3>
                        <p>Exchange vows in the lush garden surrounded by the beauty of nature.</p>
                    </div>

                    <div>
                        <img src="assets/cups.png" alt=""/>
                        <h3>4:00 PM</h3>
                        <p>Sip and savor amidst laughter and joy as we celebrate the start of a new chapter.</p>
                    </div>

                    <div>
                        <img src="assets/dinner.png" alt=""/>
                        <h3>7:00 PM</h3>
                        <p>Revel in a sumptuous feast under the stars, followed by an evening of dancing and merriment.</p>
                    </div>
                </div>
                <button><Link to="/Rsvp">RSVP</Link></button>
            </section>


            <section className="info-section">
                <img src="assets/info.jpg" alt=""/>
            <div className="info-section-tips">
                    <h2>Useful
                        <strong>Info</strong>
                    </h2>
                    <div>
                        <h3>Registry</h3>
                        <p>Your presence is the greatest gift of all. However, for those who wish to honor us with a token of love, you can find our registry <Link to="/Registry">here</Link>.</p>
                    </div>

                    <div>
                        <h3>Travel & Stay</h3>
                        <p>Navigate the journey to Tuscany with ease. Find travel tips, accommodation suggestions, and local recommendations <Link to="/Travel">here</Link>.</p>
                    </div>

                    <div>
                        <h3>FAQs</h3>
                        <p>Got questions? We've got answers! Check out our frequently asked questions <Link to="/Faqs">here</Link>, or feel free to reach out to us directly.</p>
                    </div>
            </div>
            </section>

            <section className="countdown-section">
                <div className="countdown-section-title">
                    <h2>Let The Countdown Begin</h2>
                </div>
                <div>
                    <span>EXPIRED</span>
                </div>
                <img src="assets/countdown-image.png" alt=""/>
            </section>
        </main>
        <Footer isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default HomePage
