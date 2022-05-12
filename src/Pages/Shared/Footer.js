import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    const year =  new Date().getFullYear();
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
            className=" p-10  text-neutral-content" >
            <div className='footer text-[#3A4256] '>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/about' className="link link-hover ">Emergency Checkup</Link>
                    <Link to='/about' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/about' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/about' className="link link-hover">Deep Checkup </Link>
                </div>
                <div>
                    <span className="footer-title">ORAl</span>
                    <Link to='/about' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/about' className="link link-hover">Cavity Filling </Link>
                    <Link to='/about' className="link link-hover"> Teath Whitening</Link>
                    
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link to='/about' className="link link-hover">New York - 101010 Hudson</Link>
                    
                </div>
            </div>
            <div className='my-10 text-center text-black'>
                <p >Copyright © {year} - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer >
    );
};

export default Footer;