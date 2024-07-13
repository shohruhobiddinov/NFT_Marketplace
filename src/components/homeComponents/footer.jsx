import React, {useState} from 'react';
import logo from "../../assets/logo.svg";
import {IoGameControllerOutline} from "react-icons/io5";
import {LuTwitter, LuYoutube} from "react-icons/lu";
import {FaInstagram} from "react-icons/fa";
import {Button, Input, notification, Space} from "antd";
import {MdMailOutline} from "react-icons/md";
import {Link} from "react-router-dom";

function Footer(props) {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (!email) {
            notification.error({
                message: 'Error',
                description: 'Please enter your email address.',
                duration: 2,
            });
            return;
        }

        setEmail('');
        notification.success({
            message: 'You are registered!',
            description: 'Thank you for joining our weekly digest.',
            duration: 2,
        });
    };
    return (
        <div>
            {/* Footer */}
            <div className={"px-[10%] py-10 bg-[#3b3b3b] flex flex-wrap justify-between gap-3"}>
                <div className={"mt-5 sm:w-full md:w-[48%] lg:w-[31%] xl:w-[31%]"}>
                    <Link to={'/'} >
                        <img src={logo} alt="logo" className={"sm:w-[90%]"}/>
                    </Link>
                    <p className={"text-[#ccc] my-4 cursor-pointer transition-all hover:text-gray-400"}>NFT marketplace
                        UI created with Anima for Figma.</p>
                    <p className={"text-[#ccc] my-4 cursor-pointer transition-all hover:text-gray-400"}>Join our
                        community</p>
                    <span className={"text-[#ccc] flex w-full gap-5"}>
                        <a href="https://www.nft.com/" target={"_blank"}>
                            <IoGameControllerOutline className={"w-[22px] h-[22px] cursor-pointer transition-all hover:scale-105"}/>
                        </a>
                        <a href="https://www.youtube.com/" target={"_blank"}>
                            <LuYoutube className={"w-[22px] h-[22px] cursor-pointer transition-all hover:scale-105"}/>
                        </a>
                        <a href="https://www.instagram.com/" target={"_blank"}>
                            <LuTwitter className={"w-[22px] h-[22px] cursor-pointer transition-all hover:scale-105"}/>
                        </a>
                        <a href="https://www.x.com/" target={"_blank"}>
                            <FaInstagram className={"w-[22px] h-[22px] cursor-pointer transition-all hover:scale-105"}/>
                        </a>
                    </span>
                </div>

                <div className={"mt-5 sm:w-full sm:pl-0 md:pl-16 md:w-[48%] lg:w-[31%] xl:w-[31%]"}>
                    <h3 className={"font-bold text-[25px]"}>Explore</h3>
                    <p className={"text-[#ccc] my-4 cursor-pointer transition-all hover:text-gray-400"}>
                        <Link to={"/marketplace"}>Marketplace</Link>
                    </p>
                    <p className={"text-[#ccc] my-4 cursor-pointer transition-all hover:text-gray-400"}>
                        <Link to={"/rankings"}>Rankings</Link>
                    </p>
                    <p className={"text-[#ccc] my-4 cursor-pointer transition-all hover:text-gray-400"}>
                        <Link to={"/connectWallet"}>Connect a wallet</Link>
                    </p>
                </div>

                <div className={"mt-5 sm:w-full md:w-[48%] lg:w-[31%] xl:w-[31%]"}>
                    <h3 className={"font-bold text-[25px]"}>Join our weekly digest</h3>
                    <p className={"text-[#ccc] my-4 cursor-pointer transition-all hover:text-gray-400"}>
                        Get exclusive promotions & updates straight to your inbox.
                    </p>
                    <Space.Compact className={"w-full "}>
                        <Input
                            className={"px-5 py-3 w-[60%] rounded-2xl"}
                            type="email"
                            placeholder={"Enter your email here"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                            className={"h-full py-3 w-[40%] rounded-2xl bg-[#A259FF] flex items-center justify-center gap-2 text-white"}
                            onClick={handleSubmit}
                        >
                            <MdMailOutline className={"w-[20px] h-[20px]"} /> Submit
                        </Button>
                    </Space.Compact>
                </div>

                <div className={"w-full h-[2px] bg-[#858584] my-5"}></div>
                <p className={"text-[#CCCCCC] text-[15px] cursor-pointer"}>Ⓒ NFT Market. Use this template freely.</p>
            </div>
        </div>
    );
}

export default Footer;
