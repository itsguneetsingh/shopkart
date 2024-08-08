import React from 'react';
import './newsletter.css';

const Newsletter = () => {
  return (
    <>
        <div className='background'>
            <div id='newletter-heading'>
                <h1>Newsletter</h1>
                <h2>Get news about articles and updates in your inbox.</h2>
            </div>

            <form id='newsletter-form'>
                <input className='form' placeholder='NAME'/>
                <input className='form' placeholder='EMAIL'/>
                <input className='form' placeholder='MESSAGE'/>
                <button type='submit' id='send-button'>SEND</button>
            </form>
            <div id='heading'>
                <span className='heading-text'>GET<br/>IN TOUCH</span>
            </div>
        </div>
        <div id='copyright'>
            Copyright 2022 All Rights Reserved By SG
        </div>
    </>
  );
}

export default Newsletter;
