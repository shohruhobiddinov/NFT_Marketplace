import React from 'react';
import {browseCategories} from "../../data/backend";

function BrowseCategories(props) {
    return (
        <div>
            {/* Browse Categories */}
            <div className="px-[10%] py-10">
                <h1 className={"sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] font-[600] w-full"}>Browse
                    Categories</h1>
                <div className={"flex flex-wrap justify-between my-5 "}>
                    {
                        browseCategories.map((item, index) => (
                            <div
                                className={"bg-[#3B3B3B] my-3 rounded-[20px] sm:rounded-[30px] transition-all hover:-translate-y-1.5 xl:w-[23%] lg:w-[31%] md:w-[48%] sm:w-full"}>
                                <img src={item.image} alt={item.category} className={"w-full"}/>
                                <div className={"px-4"}>
                                    <h3 className={"my-3 font-[600]"}>{item.category}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default BrowseCategories;