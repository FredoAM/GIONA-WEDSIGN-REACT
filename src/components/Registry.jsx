import { useState } from 'react'

import { Helmet } from 'react-helmet'
import HeaderRegistry from './Header-Registry.jsx'
import Footer from './Footer'
import '../Registry.css'
function Registry({isOpen, setIsOpen}) {
 
  return (
    <>
        <Helmet>
                <title>Registry</title>
        </Helmet>
        <HeaderRegistry isOpen={isOpen} setIsOpen={setIsOpen}/>
        <main style={{ display: isOpen ? 'none' : 'block' }}>
            <div className="cover-registry">
                    <h1>REGISTRY</h1>
                    <p>Your presence is the greatest gift, and your well-wishes mean the world to us. If you'd like to celebrate our new journey with a token of love, we've created three unique registry options to suit your preferences.</p>
            </div>

        <div className="registry-container">
                <div className="left">
                    <img src="assets/registry-1.jpg" alt=""/>
                    <div>
                        <h2>Gift Registry</h2>
                    <p>
                        Explore a curated list of items that will help us build our dream home.
                    </p>
                    </div>
                </div>

                <div className="center">
                    <img src="assets/registry-2.jpg" alt=""/>
                    <div>
                        <h2>Honeymoon Fund</h2>
                    <p>
                        Contribute to our experiences and adventures as a married couple.  
                    </p>
                    </div>
                </div>

                <div className="right">
                    <img src="assets/registry-3.jpg" alt=""/>
                    <div>
                        <h2>Photo Book</h2>
                    <p>
                        Help us capture and preserve our cherished wedding moments with a beautifully crafted photo book.
                    </p>
                    </div>
                </div>
        </div>
        </main>
        <Footer isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Registry
