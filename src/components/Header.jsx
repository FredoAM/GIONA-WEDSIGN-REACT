import { useState } from 'react'
import { Link } from 'react-router-dom';


function Header({isOpen, setIsOpen}) {

  return (
    <>
        <header className="header" style={{ display: isOpen ? 'none' : 'block' }}>
            <nav >
                <div className="menu">
                    <Link to="/" ><img src="/assets/logo.png" alt=""/></Link>
                    <i className="fa-solid fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
                    <ul className="menu-pages">
                        <li><Link to="/OurStory" >Our Story</Link></li>
                        <li><Link to="/Travel" >Travel & Stay</Link></li>
                        <li><Link to="/Registry" >Registry</Link></li>
                        <li><Link to="/Faqs" >FAQs</Link></li>
                    </ul>
                    <Link to="/Rsvp"><button>RSVP</button></Link>
                </div>
            </nav>
        </header>
        <header className="header-media" style={{ display: isOpen ? 'block' : 'none' }}>
            <nav >
                <div className="menu">
                    <Link to="/" onClick={() => setIsOpen(!isOpen)}><img src="/assets/logo.png" alt=""/></Link>
                    <i className="fa-solid fa-x" onClick={() => setIsOpen(!isOpen)}></i>

                    <ul className="menu-pages-media">
                        <li><Link to="/OurStory" onClick={() => setIsOpen(!isOpen)}>Our Story</Link></li>
                        <li><Link to="/Travel" onClick={() => setIsOpen(!isOpen)}>Travel & Stay</Link></li>
                        <li><Link to="/Registry" onClick={() => setIsOpen(!isOpen)}>Registry</Link></li>
                        <li><Link to="/Faqs" onClick={() => setIsOpen(!isOpen)}>FAQs</Link></li>
                    </ul>
                    <Link to="/Rsvp" onClick={() => setIsOpen(!isOpen)}><button>RSVP</button></Link>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header