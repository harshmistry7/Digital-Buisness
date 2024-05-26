import React from 'react'
import './Footer.css'
import Emailbox from '../Emailbox/Emailbox'

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="container">
            <div className="f-container">
                <span className='title'> Get Funded Today! </span>
                <Emailbox />

                <hr/>
                <div className="f-menu">
                    <span>Home</span>
                    <span>What we do </span>
                    <span>How it works</span>
                    <span>Who we invest in</span>
                    <span>testimonial </span>
                </div>
                
                <hr/>

                <span className='text'> Made by 👨‍💻 Harsh Mistry </span>
            </div>
        </div>
    </div>
  )
}

export default Footer
