import React from 'react';
import {FaLinkedin, FaGoogle, FaGithub} from "react-icons/fa"
const Page = () => {
    return (
        <div className="h-screen overflow-hidden grid grid-cols-2 ">
            <div className='flex flex-col justify-center max-sm:p-3 p-16 relative'>
                <h1 className='max-sm:text-4xl max-lg:text-6xl text-8xl mb-5'>Contacts</h1>
                <span className='sm-text-2xl'>Let&apos;s talk 🤝🏻</span>
                <div className={`absolute w-[1px] bg-app-border h-0 top-0 right-0 animation-delay-3000 animate-expand-vertical-line-type-3`}></div>
            </div>
            <div className='flex flex-col justify-center'>
                <a href='https://www.linkedin.com/in/liubomyrklymuik/' className={'group flex-auto flex justify-center items-center text-3xl relative'}>
                    <div className={`absolute h-[1px] bg-app-border w-[0] bottom-0 right-0 animation-delay-1000 animate-expand-horizontal-line-type-4`}></div>
                    <span className='flex items-center'><FaLinkedin className='mr-2 duration-300 group-hover:text-[#0072b1]'/><span className='linkedid'>LinkedIn</span></span>
                </a>
                <a href="mailto:lyubomyrklymyuk2001@gmail.com" className={'group flex-auto flex justify-center items-center text-3xl relative'}>
                    <div className={`absolute h-[1px] bg-app-border w-[0] bottom-0 animation-delay-1500 animate-expand-horizontal-line-type-4`}></div>
                    <span className='flex items-center'><FaGoogle className='mr-2 duration-300 group-hover:text-[#e34c3c]'/><span>Email</span></span>
                </a>
                <a href='https://github.com/LyubomyrKl' className={'group flex-auto flex justify-center items-center text-3xl relative'}>
                    <div className={`absolute h-[1px] bg-app-border w-[0] bottom-0 right-0 animate-expand-horizontal-line-type-4`}></div>
                    <span className='flex items-center'><FaGithub className='mr-2 duration-300 group-hover:text-[#620296]'/><span>GitHub</span></span>
                </a>
            </div>
        </div>
    );
};

export default Page;