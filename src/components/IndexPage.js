"use strict";
import React from 'react';
import { Link } from 'react-router';
import Clipboard from 'clipboard';
import { ToastContainer, toast } from 'react-toastify';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    new Clipboard('.email-copy')
  }
  popToast(){
    toast("Email Copied to Clipboard", {
              className: 'dark-toast',
              closeButton: false
          });
  }
  render() {
    return (
      <div className="home">
        <h2 className='title-text'>hello</h2>
        {"Welcome to my site! Please take a look around. If you want to contact me, click the links below. If you're curious about how I made the site, check out "}
        <a href="https://github.com/breyerjs/jacksonbreyer" className="normal-link">this github repo.</a>
        <br />
        <div className="contact-items">
          <div className="contact-items-inner">
            <a href="https://www.github.com/breyerjs" target="_blank">
                <img className="contact-image" src="/img/GitHub.png"/>
            </a>
            <Link to="" className="email-copy" onClick={this.popToast} data-clipboard-text="breyer.js@gmail.com">
                <img className="contact-image" src="/img/email_img.png"/>
            </Link>
            <a href="https://www.linkedin.com/in/breyerjs/" target="_blank">
                <img className="contact-image" src="/img/linkedin.png"/>
            </a>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          type="default"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </div>
    );
  }
}
