import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.svg";
import user from "../assets/User.svg";
import { MdOutlineCancel } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";

function Navbar(props) {
    const [mobileNav, setMobileNav] = useState(false);
    const toggleMobileNav = () => setMobileNav(!mobileNav);

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className={"relative"}>
            <div className="w-full flex items-center justify-between px-12 py-5 sm:px-5">
                <div className={"logo"}>
                    <Link to={'/'} >
                        <img src={logo} alt="logo" className={"sm:w-[90%]"} onClick={() => setMobileNav(false)}/>
                    </Link>
                </div>
                <div className={"menu flex items-center gap-12 sm:hidden md:hidden lg:flex"}>
                    <Link to="/marketplace" className={currentPath === "/marketplace" ? "text-purple-500" : ""}>Marketplace</Link>
                    <Link to="/rankings" className={currentPath === "/rankings" ? "text-purple-500" : ""}>Rankings</Link>
                    <Link to="/connectWallet" className={currentPath === "/connectWallet" ? "text-purple-500" : ""}>Connect a wallet</Link>
                    <Link to="/signup">
                        <button className={"flex items-center gap-3 bg-[#A259FF] py-4 px-5 rounded-[15px]"}>
                            <img src={user} alt="user"/>
                            Sign Up
                        </button>
                    </Link>
                </div>

                <div className="sm:flex md:flex lg:hidden">
                    {mobileNav ?
                        <MdOutlineCancel onClick={toggleMobileNav}/> :
                        <RiMenu2Line onClick={toggleMobileNav}/>}
                </div>
            </div>
            {mobileNav ?
                <div
                    className={"sm:flex md:flex lg:hidden p-8 flex flex-col gap-5 z-[2] absolute bg-[#2B2B2B] right-0 rounded-[20px] mobileNav border-amber-50"}>
                    <Link onClick={() => setMobileNav(false)} to="/marketplace" className={currentPath === "/marketplace" ? "text-purple-500" : ""}>Marketplace</Link>
                    <Link onClick={() => setMobileNav(false)} to="/rankings" className={currentPath === "/rankings" ? "text-purple-500" : ""}>Rankings</Link>
                    <Link onClick={() => setMobileNav(false)} to="/connectWallet" className={currentPath === "/connectWallet" ? "text-purple-500" : ""}>Connect a wallet</Link>
                    <Link onClick={() => setMobileNav(false)} to="/signup">
                        <button className={"flex items-center gap-3 bg-[#A259FF] py-4 px-5 rounded-[15px]"}>
                            <img src={user} alt="user"/>
                            Sign Up
                        </button>
                    </Link>
                </div> : ""}
        </div>
    );
}

export default Navbar;
