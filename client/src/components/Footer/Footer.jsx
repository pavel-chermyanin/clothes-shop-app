import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accesories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              temporibus dignissimos voluptatibus deleniti? Error porro minus
              iusto repellendus exercitationem. Rerum blanditiis inventore dicta
              nulla earum magnam tempore quo modi velit, consequuntur
              accusantium. Ipsa nesciunt itaque tempora, expedita qui dolorem
              iure!
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              temporibus dignissimos voluptatibus deleniti? Error porro minus
              iusto repellendus exercitationem. Rerum blanditiis inventore dicta
              nulla earum magnam tempore quo modi velit, consequuntur
              accusantium. Ipsa nesciunt itaque tempora, expedita qui dolorem
              iure!
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">Pavelstore</span>
            <span className="copyright">
              © Copyright 2022. All Rights Reserved
            </span>
          </div>
          <div className="right">
            <img src="/img/footer.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer