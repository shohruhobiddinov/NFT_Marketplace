import React from 'react';
import {howItWorks} from "../../data/backend";

function HowItWorks(props) {
    return (
        <div>
            {/* How It Works */}
            <div className={"px-[10%] py-10"}>
                <div>
                    <h1 className={"font-bold sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px]"}>How It
                        Works</h1>
                    <p className={"text-[20px]"}>Find out how to get started</p>
                </div>
                <div className={"flex flex-wrap justify-between"}>
                    {
                        howItWorks.map((item, index) => (
                            <div key={index}
                                 className={"bg-[#3B3B3B] p-5 rounded-3xl text-center mt-10 sm:w-full md:w-[48%] lg:w-[31%] xl:w-[31%] transition-all hover:-translate-y-1.5"}>
                                <img src={item.image} alt={item.title} className={"mx-auto"}/>
                                <h3 className={"text-[25px] font-bold my-3"}>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
