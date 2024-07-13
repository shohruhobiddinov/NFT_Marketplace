import React from 'react';
import cosmos from "../assets/Image Placeholder (2).png"
import metamask from "../assets/Metamask.png";
import wallet from "../assets/WalletConnect.png";
import coinbase from "../assets/Coinbase (1).png";
import Footer from "../components/homeComponents/footer";


function ConnectWallet(props) {
    return (
        <div>
            <div className={"w-full flex items-center justify-between flex-wrap"}>
                <div className={"sm:w-full md:w-full lg:w-[40%] sm:mb-10 md:mb-10 lg:mb-0"}>
                    <img src={cosmos} alt="cosmos" className={"w-full"}/>
                </div>
                <div className={"sm:w-full md:w-full lg:w-[60%] px-[8%] "}>
                    <h1 className={"sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] font-[600]"}>Connect wallet</h1>
                    <p className={"text-[20px] my-10"}> Choose a wallet you want to connect. There are several wallet providers.</p>
                    <div className={"rounded-2xl bg-[#3B3B3B] px-5 py-3 my-5 sm:w-full md:w-full lg:w-[70%] flex items-center gap-5 cursor-pointer transition-all hover:scale-105"}>
                        <img src={metamask} alt="metamask"/>
                        <h3 className={"font-bold text-[20px]"}>Metamask</h3>
                    </div>
                    <div className={"rounded-2xl bg-[#3B3B3B] px-5 py-3 my-5 sm:w-full md:w-full lg:w-[70%] flex items-center gap-5 cursor-pointer transition-all hover:scale-105"}>
                        <img src={wallet} alt="metamask"/>
                        <h3 className={"font-bold text-[20px]"}>Wallet Connect</h3>
                    </div>
                    <div className={"rounded-2xl bg-[#3B3B3B] px-5 py-3 my-5 sm:w-full md:w-full lg:w-[70%] flex items-center gap-5 cursor-pointer transition-all hover:scale-105"}>
                        <img src={coinbase} alt="metamask"/>
                        <h3 className={"font-bold text-[20px]"}>Coinbase</h3>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ConnectWallet;