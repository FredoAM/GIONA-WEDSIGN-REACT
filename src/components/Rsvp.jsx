import { useState } from 'react'
import '../App.css'

import Header from './Header'


function Rsvp({isOpen, setIsOpen}) {
 
  return (
    <>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <main className="rsvp-container" style={{ display: isOpen ? 'none' : 'block' }}>
            
            <div className="rsvp-cover">
                <img src="/assets/rsvp-cover.jpg" alt=""/>
            </div>

            <div className="cover-data">
                <h1>KINDLY RSVP</h1>
                <p>We can't wait to celebrate our special day with you, and your presence means the world to us! Please let us know if you will be able to join in the joy and festivities by <strong>January 1st, 2024</strong>.</p>
            </div>
            
            <form action="">
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
            
        </main>
    </>
  )
}

export default Rsvp
