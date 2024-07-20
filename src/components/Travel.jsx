import { useState } from 'react'
import '../App.css'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

function Travel({isOpen, setIsOpen}) {
 
  return (
    <>
        <Helmet>
                <title>Travel & Stay</title>
        </Helmet>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <main style={{ display: isOpen ? 'none' : 'block' }}>
            <div className="img-container">
                <img src="assets/travel-cover.jpg" alt=""/>
            </div>
            
            <div className="cover">
                <div className="titles">
                    <h1>TRAVEL & STAY</h1>
                    <h4>Villa Giona</h4> 
                </div>
            </div>
        <section className="travel-section travel-section1">
            <img src="assets/travel1.jpg" alt=""/>
            <div>
                <div>
                    <h2>Getting 
                        <strong>Here</strong>
                    </h2>
                </div>
                <ul>
                    <li>
                        <h3>By Car</h3>
                        <p>The journey to our celebration is as picturesque as the destination itself. Navigate the scenic roads of Tuscany, surrounded by rolling hills and vineyards. </p>
                    </li>
                    <li>
                        <h3>By Train</h3>
                        <p>For those seeking a leisurely journey, arrive by train to the nearby station, and soak in the beauty of the Italian countryside as you make your way to the celebration. The train station is conveniently located just a short distance from the villa. </p>
                    </li>
                </ul>
            </div>
        </section>

        <section className="travel-section1">
            
                <div>
                    <div>
                        <h2>Where to 
                            <strong>Stay</strong>
                        </h2>
                    </div>
                    <ul>
                        <li>
                            <h3>Villa Serenity Hotel</h3>
                            <p>Immerse yourself in the tranquility of this charming hotel, a mere stone's throw away from our villa. Experience modern amenities within a setting that reflects the beauty of Tuscany.</p>
                        </li>
                        <li>
                            <h3>Hillside Haven Resort </h3>
                            <p>Perched on the Tuscan hills, this resort offers breathtaking views and a serene escape. A short drive will bring you to the heart of our celebration, allowing you to enjoy both the scenic journey and the festivities.</p>
                        </li>
                    </ul>
                </div>

                <img src="assets/travel2.jpg" alt=""/>
            </section>
        </main>
        <Footer isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Travel
