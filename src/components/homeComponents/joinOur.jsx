import React, { useState } from 'react';
import astronaut from "../../assets/Photo.png";
import { Button, Input, Space, notification } from "antd";
import { MdMailOutline } from "react-icons/md";

function JoinOur(props) {
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
            {/* Join our weekly digest */}
            <div className={"px-10% py-10"}>
                <div
                    className={"bg-[#3b3b3b] rounded-3xl sm:p-5 md:p-10 lg:p-10 xl:p-12 flex flex-wrap items-center justify-between gap-5 w-[80%] mx-auto"}>
                    <div className={"sm:w-full md:w-full lg:w-[47%] xl:w-[47%]"}>
                        <img src={astronaut} alt="astronaut" className={"w-full"} />
                    </div>
                    <div className={"sm:w-full md:w-full lg:w-[47%] xl:w-[47%]"}>
                        <h1 className={"font-bold sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[40px] capitalize"}>Join
                            our weekly digest</h1>
                        <p className={"capitalize my-5"}>Get exclusive promotions & updates straight to your inbox.</p>
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
                </div>
            </div>
        </div>
    );
}

export default JoinOur;
