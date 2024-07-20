import { useState } from 'react'
import '../App.css'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

function OurStory({isOpen, setIsOpen}) {
 
  return (
    <>
        <Helmet>
            <title>Our Story</title>
        </Helmet>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <main style={{ display: isOpen ? 'none' : 'block' }}>
            <div className="img-container">
                <img src="/assets/our-story-cover.jpg" alt=""/>
            </div>
            <div className="cover">
                <div className="titles">
                    <h1>OUR STORY</h1>
                    <h4>A + G</h4> 
                </div>
            </div>
        

            <div className="our-story-container">
                <div className="our-story-page">
                    <h4>Once upon a time…</h4>
                    <div className="story-container">
                        <div>
                            <p>Amidst the charming streets of Florence, Italy, our story began. It was a serendipitous encounter that would set the stage for a lifetime of love and companionship.</p>
                            <p>In the heart of this enchanting city, where the air is filled with the melody of history and the aroma of freshly brewed espresso, we crossed paths. It was as if the universe conspired to bring two souls together at the perfect moment.</p>
                            <p>As we strolled along the Ponte Vecchio, the golden hues of the sunset mirrored the warmth that blossomed between us. Fate wove its magic, and in that moment, we felt a connection that transcended time and space.</p>
                        </div>
        
                        <div>
                            <p>Our journey started in Florence, a city known for its art, culture, and romance. The cobbled streets and Renaissance architecture witnessed the first chapters of our love story unfold. From quiet conversations in cozy cafes to exploring the renowned Uffizi Gallery hand in hand, every moment in Florence became a cherished page in our story.</p>
                            <p>Little did we know that the city of Florence would not only be the birthplace of the Renaissance but also the birthplace of our enduring love. As we look back on those early days in this magical city, we are filled with gratitude for the twist of fate that brought us together.</p>
                        </div>
                    </div>
                </div>
        
                <div className="our-story-image"> 
                    <div>
                        <img src="/assets/out-story-image.jpg" alt=""/>
        
                    </div>
                    <div className="our-story-titles">
                        <h2>
                            Join us to celebrate
                        </h2>
                        <h4>our love!</h4>
                    </div>
                    
                </div>
            </div>
        </main>
        <Footer isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default OurStory
