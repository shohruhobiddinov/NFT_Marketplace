import React, { useState } from 'react';
import cosmos from "../assets/Image Placeholder (2).png";
import Footer from "../components/homeComponents/footer";
import { AiOutlineUser } from "react-icons/ai";
import { Button, Input, notification } from "antd";
import { IoMailOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

function Signup(props) {
    const initialFormState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [form, setForm] = useState(initialFormState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        const { username, email, password, confirmPassword } = form;

        if (!username || !email || !password || !confirmPassword) {
            notification.error({
                message: 'Error',
                description: 'Please fill all required fields!',
            });
            return;
        }

        if (password !== confirmPassword) {
            notification.error({
                message: 'Error',
                description: 'Passwords do not match!',
            });
            return;
        }

        // Show success notification if validation passes
        notification.success({
            message: 'Success',
            description: 'Account created successfully!',
        });

        // Clear the input fields
        setForm(initialFormState);
    };

    return (
        <div>
            <div className={"w-full flex items-center justify-between flex-wrap mb-10"}>
                <div className={"sm:w-full md:w-full lg:w-[40%] sm:mb-10 md:mb-10 lg:mb-0"}>
                    <img src={cosmos} alt="cosmos" className={"w-full"} />
                </div>
                <div className={"sm:w-full md:w-full lg:w-[60%] px-[8%] "}>
                    <h1 className={"sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] font-[600]"}>Create account</h1>
                    <p className={"text-[20px] my-10"}>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                    <Input
                        name="username"
                        value={form.username}
                        onChange={handleInputChange}
                        className={"rounded-3xl bg-white text-black text-[18px] p-3 my-5 sm:w-full md:w-full lg:w-[70%] flex gap-3"}
                        prefix={<AiOutlineUser className={"text-gray-400 w-[20px] h-[20px]"} />}
                        placeholder={"Username"}
                    />
                    <Input
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        className={"rounded-3xl bg-white text-black text-[18px] p-3 my-5 sm:w-full md:w-full lg:w-[70%] flex gap-3"}
                        prefix={<IoMailOutline className={"text-gray-400 w-[20px] h-[20px]"} />}
                        placeholder={"Email Address"}
                    />
                    <Input
                        type={"password"}
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        className={"rounded-3xl bg-white text-black text-[18px] p-3 my-5 sm:w-full md:w-full lg:w-[70%] flex gap-3"}
                        prefix={<CiLock className={"text-gray-400 w-[20px] h-[20px]"} />}
                        placeholder={"Password"}
                    />
                    <Input
                        type={"password"}
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleInputChange}
                        className={"rounded-3xl bg-white text-black text-[18px] p-3 my-5 sm:w-full md:w-full lg:w-[70%] flex gap-3"}
                        prefix={<CiLock className={"text-gray-400 w-[20px] h-[20px]"} />}
                        placeholder={"Confirm Password"}
                    />
                    <Button
                        onClick={handleSubmit}
                        className={"rounded-3xl bg-[#A259FF] text-white text-[18px] font-bold border-none py-6 px-3 my-5 sm:w-full md:w-full lg:w-[70%] flex gap-3"}>
                        Create Account
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;
