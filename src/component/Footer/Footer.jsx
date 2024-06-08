import { FaPhone } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#131c3a] ">
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
                    <a className="link link-hover flex items-center gap-2"><FaPhone /><span>+01234567</span></a>
                    <a className="link link-hover flex items-center gap-2"><FaPhone /><span>+01234567</span></a>
                    <a className="link link-hover flex items-center gap-2"><FaPhone /><span>+01234567</span></a>

                </nav>

            </footer>



            <div className="bg-white text-black">
                <div className="flex justify-between items-center  py-5 page-footer">
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing </p>

                    <div className="flex items-center gap-3">
                        <FaPhone />
                        <FaPhone />
                        <FaPhone />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;