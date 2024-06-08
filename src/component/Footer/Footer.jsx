import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import fa from '../../assets/icon/f.png'
import ins from '../../assets/icon/i.png'
import tw from '../../assets/icon/t.png'


const Footer = () => {
    return (
        <div className="bg-[#155f5f]">
            <footer className="footer page-footer p-10 hidden sm:grid">
                <nav>
                    <h4 className="footer-title">Company Info</h4>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Carrier</a>
                    <a className="link link-hover">We are hiring</a>
                    <a className="link link-hover">Blog</a>
                </nav>
                <nav className="">
                    <h4 className="footer-title">Legal</h4>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Carrier</a>
                    <a className="link link-hover">We are hiring</a>
                    <a className="link link-hover">Blog</a>
                </nav>
                <nav className="">
                    <h4 className="footer-title">Features</h4>
                    <a className="link link-hover">Business Marketing</a>
                    <a className="link link-hover">User Analytic</a>
                    <a className="link link-hover">Live Chat</a>
                    <a className="link link-hover">Unlimited Support</a>
                </nav>
                <nav>
                    <h4 className="footer-title">Resources</h4>
                    <a className="link link-hover">Business Marketing</a>
                    <a className="link link-hover">IOS & Android</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">API</a>
                </nav>
                <nav>
                    <h4 className="footer-title">Get In Touch</h4>
                    <a className="footer-icon"><FaPhone className="text-[#08d76c] text-lg" /><span>+01234567</span></a>
                    <a className="footer-icon"><IoLocationSharp className="text-[#08d76c] text-2xl" /><span>4517 Washington Ave. <br /> Manchester,
                        Kentucky 39495</span></a>
                    <a className="footer-icon"><MdEmail className="text-[#08d76c] text-xl" /><span>debra.holt@example.com</span></a>

                </nav>

            </footer>



            <div className="bg-[#fff] text-[#155f5f]">
                <div className="flex justify-between items-center  py-3 page-footer">
                    <p className="text-xs">Made With Love By Bristi All Right Reserved  </p>

                    <div className="flex items-center gap-3">
                        <img src={fa} alt="" />
                        <img src={ins} alt="" />
                        <img src={tw} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;