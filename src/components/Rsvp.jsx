import { useState } from 'react'
import '../App.css'
import { Helmet } from 'react-helmet'

import Header from './Header'
import Footer from './Footer'

function Rsvp({isOpen, setIsOpen}) {
 
  return (
    <>
        <Helmet>
            <title>RSVP</title>
        </Helmet>
        
        <main className="rsvp-container" >
                <Header isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className="rsvp-cover" style={{ display: isOpen ? 'none' : 'block' }}>
                    <img src="/assets/rsvp-cover.jpg" alt=""/>
                </div>

                <div className="cover-data" style={{ display: isOpen ? 'none' : 'flex' }}>
                    <h1>KINDLY RSVP</h1>
                    <p>We can't wait to celebrate our special day with you, and your presence means the world to us! Please let us know if you will be able to join in the joy and festivities by <strong>January 1st, 2024</strong>.</p>
                </div>
                
                <div className="form-cover" style={{ display: isOpen ? 'none' : 'block' }}>
                    <form action="" className='rsvp-form'>
                    <fieldset className="fieldset">
                        <legend>
                            <div>Name</div>
                            <span>(required)</span>
                        </legend>
                        <div className="field-inputs">
                            <div>
                                <label htmlFor="">First Name</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label htmlFor="">Last Name</label>
                                <input type="text"/>
                            </div>
                        </div>
                    </fieldset>
                    <div>
                        <legend>
                            <label htmlFor="">Email</label>
                            <span>(required)</span>
                        </legend>
                        <input type="text"/>
                    </div>

                    <fieldset>
                        <legend>
                            <div>Will you be attending?</div>
                            <span>(required)</span>
                        </legend>
                        <div className="field-attending">
                            <div >
                                <input type="radio"/>
                                <label htmlFor="">Yes</label>
                            </div>
                            <div >
                                <input type="radio"/>
                                <label htmlFor="">No</label>
                            </div>
                        </div>
                        
                    </fieldset>

                    <fieldset>
                        <legend>
                            <div>Will you be bringing a guest?</div>
                            <span>(required)</span>
                        </legend>
                        <div className="field-attending">
                            <div >
                                <input type="radio"/>
                                <label htmlFor="">Yes</label>
                            </div>
                            <div >
                                <input type="radio"/>
                                <label htmlFor="">No</label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>
                            <div>Guest Name</div>
                            <span>(required)</span>
                        </legend>
                        <div className="field-inputs">
                            <div >
                                <label htmlFor="">First Name</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label htmlFor="">Last Name</label>
                                <input type="text"/>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                            <div>Any food restrictions?</div>
                            <span>(required)</span>
                        </legend>
                        <div>
                            <input type="text"/>
                        </div>
                    </fieldset>
                    <div className="button-container">
                        <button>SEND</button>
                    </div>
                    </form>
                </div>
            
            
            
        </main>
        <Footer isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Rsvp
