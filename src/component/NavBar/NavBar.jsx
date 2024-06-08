import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const navList = <>
        < li ><a href="#hero">Home</a></li>
        <li><a href="#activity">Activity</a></li>
        <li><a href="#department">Service</a></li>
        <li><a href="#specialize">Specialize </a></li>
        <li><a href="#expert">Experts</a></li>
    </>



    return (
        <div className="bg-[#0b948c] fixed top-0 w-full px-2 md:px-5 xl:px-20 z-50">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul onClick={() => setOpen(false)} tabIndex={0} className="menu menu-sm bg-[#0b948c] dropdown-content mt-2 z-[1] p-2 py-6 shadow rounded-box w-60">
                            { open &&
                                navList
                            }
                        </ul>
                    </div>
                    <a href="#hero" className="btn btn-ghost text-xl">Medical Loyal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navList
                        }
                    </ul>
                </div>

                <div className="navbar-end hidden sm:flex">
                    <button className="btn-arrow"><span>join us</span> <IoIosArrowForward className="mt-1" /></button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;