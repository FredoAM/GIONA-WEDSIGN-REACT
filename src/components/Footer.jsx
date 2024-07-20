import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function Footer({isOpen, setIsOpen}) {

  return (
    <>
        <footer  style={{ display: isOpen ? 'none' : 'block' }}>
            Footer
        </footer>
    </>
  )
}

export default Footer