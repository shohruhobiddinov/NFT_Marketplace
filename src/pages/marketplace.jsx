import React, {useState} from 'react';
import {Input} from "antd";
import {IoSearchOutline} from "react-icons/io5";
import Nfts from "./marketplacePagePages/nfts";
import Collections from "./marketplacePagePages/collections";
import Footer from "../components/homeComponents/footer"; // Import the custom CSS

function Marketplace(props) {

    const [nft, setNft] = useState(true);
    const [collections, setCollections] = useState(false);

    const nftTrue = () => {
        setNft(true)
        setCollections(false)
    };
    const collectionsTrue = () => {
        setNft(false)
        setCollections(true)
    };

    return (
        <div>
            <div className={"p-[10%]"}>
                <h1 className={"font-bold sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px]"}>
                    Browse Marketplace
                </h1>
                <p className={"text-[20px] my-5"}>
                    Browse through more than 50k NFTs on the NFT Marketplace.
                </p>
                <Input
                    placeholder={"Search your favourite NFTs"}
                    suffix={<IoSearchOutline className={"text-[#808080] w-[20px] h-[20px] "}/>}
                    className={"w-full bg-transparent border-2 border-[#3B3B3B] py-3 px-7 text-white custom-placeholder text-[18px] rounded-2xl"}
                />
            </div>

            <div className={"w-full h-[2px] bg-[#3B3B3B]"}></div>

            <div className={"flex justify-center gap-[10%] mt-3"}>
                <h1 onClick={nftTrue}
                    className={`w-[30%] text-center cursor-pointer transition-all text-[20px] py-4 hover:border-b-2 
                    ${nft ? "border-b-2" : "text-gray-500"}`}>
                    NFTs
                </h1>
                <h1 onClick={collectionsTrue}
                    className={`w-[30%] text-center cursor-pointer transition-all text-[20px] py-4 hover:border-b-2
                     ${collections ? "border-b-2" : "text-gray-500"}`}>
                    Collections
                </h1>
            </div>
            {
                nft ? <Nfts/> : <Collections/>
            }
            <div className={"w-full h-[2px] bg-[#2B2B2B]"}></div>
            <Footer/>
        </div>
    );
}

export default Marketplace;
