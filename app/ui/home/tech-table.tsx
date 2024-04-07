'use client';

import React, { useRef } from 'react';
import {FaBook, FaBriefcase, FaCode, FaTasks, FaToolbox} from "react-icons/fa";
import {useInView} from "react-intersection-observer";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {useWindowSize} from "@/app/ui/hooks";

const TechTable = () => {
    const windowWidth = useWindowSize();
    const refScroll = React.useRef(null);


    const { ref, inView} = useInView({
        threshold: 0.2,
    });


    useGSAP(() => {

        if(windowWidth < 1024){
            const isMobile = windowWidth < 640;
            gsap.to(refScroll.current, {
                xPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: isMobile ? refScroll.current : '#introduction',
                    pin: true,
                    scrub: .3,
                    // @ts-ignore
                    end: '+=' + Math.max(150, (refScroll.current.offsetWidth - windowWidth - (isMobile ? 400 : 200))),
                }
            });
        }



    }, [windowWidth])

    return (

        <div ref={refScroll} className='grid relative max-lg:w-[1200px]' style={{
            gridTemplateColumns: '3fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr 4fr'
        }}>
            <div ref={ref} className={'absolute w-full'}></div>
            <div className={`first-horizontal-line absolute h-[1px] bg-app-border w-[0] top-0 ${inView ? 'animation-delay-1000 animate-expand-horizontal-line-type-4' : ''}`}></div>
            <div className={`second-horizontal-line absolute h-[1px] bg-app-border w-[0] top-[16.5%] right-0 ${inView  ? 'animate-expand-horizontal-line-type-2' : ''}`}></div>
            <div className={`third-horizontal-line absolute h-[1px] bg-app-border w-[0] top-[33%] ${inView ? 'animate-expand-horizontal-line-type-1' : ''}`}></div>
            <div className={`last-horizontal-line absolute h-[1px] bg-app-border w-[0] bottom-0 right-0 ${inView ? 'animate-expand-horizontal-line-type-3' : ''}`}></div>


            <div className={'py-10 flex items-end text-3xl font-semibold relative'}>
                <div className={`absolute w-[1px] bg-app-border h-[0] top-0 right-0 ${inView ? 'animate-expand-vertical-line-type-3' : ''}`}></div>
                Hard Skills
            </div>
            <div  className={'p-10 flex items-end text-3xl font-semibold relative'}>
                <div className={`absolute w-[1px] bg-app-border h-[0] bottom-0 right-0 ${inView ? 'animation-delay-2500 animate-expand-vertical-line-type-2' : ''}`}></div>
                Soft Skills
            </div>
            <div className={'p-10 flex items-end text-3xl font-semibold relative'}>
                <div className={`absolute w-[1px] bg-app-border h-[0] top-0 right-0 ${inView ? 'animate-expand-vertical-line-type-1' : ''}`}></div>
                Methodologies
            </div>


            <div className=" flex items-center text-xl font-semibold grid grid-cols-3 relative">
                <div className={`first-vertical-line absolute w-[1px] bg-app-border h-[0] bottom-0 right-0 ${inView ? 'animation-delay-3000 animate-expand-vertical-line-type-2' : ''}`}></div>
                <span><FaCode className='text-2xl mr-2 -mt-1'/>Languages</span>
                <span><FaToolbox className='text-2xl mr-2 -mt-1'/>Frameworks</span>
                <span><FaBook className='text-2xl mr-2 -mt-1'/>Libraries</span>
            </div>


            <div className="pl-10 flex items-center text-xl font-semibold relative">
                <div className={`first-vertical-line absolute w-[1px] bg-app-border h-[0] bottom-0 right-0 ${inView ? 'animate-expand-vertical-line-type-2' : ''}`}></div>
                <span><FaTasks className='text-2xl mr-2 -mt-1'/>Job Related</span>
            </div>
            <div className="pl-10 flex items-center text-xl font-semibold relative">
                <div className={`first-vertical-line absolute w-[1px] bg-app-border h-[0] top-0 right-0 ${inView ? 'animation-delay-3000 animate-expand-vertical-line-type-3' : ''}`}></div>
                <span><FaBriefcase className='text-2xl mr-2 -mt-1'/> Management</span>
            </div>


            <div className={'py-5 grid grid-cols-3 relative'}>
                <div className={`absolute w-[1px] bg-app-border h-0 bottom-0 right-0 ${inView ? 'animate-expand-vertical-line-type-1' : ''}`}></div>
                <div className='flex flex-col'>
                    <span className='descriptionItem'>JavaScript</span>
                    <span className='descriptionItem'>TypeScript</span>
                    <span className='descriptionItem'>Node.js</span>
                    <span className='descriptionItem'>Python</span>
                </div>
                <div className='flex flex-col'>
                    <span className='descriptionItem'>React</span>
                    <span className='descriptionItem'>Next.js</span>
                    <span className='descriptionItem'>React Native</span>
                    <span className='descriptionItem'>Angular</span>
                    <span className='descriptionItem'>Vue.js</span>
                    <span className='descriptionItem'>Express</span>
                    <span className='descriptionItem'>Mongo.DB</span>
                    <span className='descriptionItem'>Docker</span>
                </div>
                <div className='flex flex-col'>
                    <span className='descriptionItem'>Redux/RTL/RTQ</span>
                    <span className='descriptionItem'>Recoil</span>
                    <span className='descriptionItem'>MobX</span>
                    <span className='descriptionItem'>Styled Components</span>
                    <span className='descriptionItem'>Tailwind CSS</span>
                    <span className='descriptionItem'>CSS-in-JS</span>
                    <span className='descriptionItem'>Chart.js</span>
                    <span className='descriptionItem'>Material UI</span>
                    <span className='descriptionItem'>Ant Design</span>
                    <span className='descriptionItem'>Framer Motion</span>
                    <span className='descriptionItem'>React Transition Group</span>
                    <span className='descriptionItem'>Lottie</span>
                    <span className=' descriptionItem'>a lot more</span>
                </div>
            </div>


            <div className={'px-10 py-5 relative'}>
                <div className={`absolute w-[1px] bg-app-border h-0 top-0 right-0 ${inView ? 'animate-expand-vertical-line-type-2' : ''}`}></div>
                <div className='flex flex-col'>
                    <span className='descriptionItem'>Communication</span>
                    <span className='descriptionItem'>Problem-solving</span>
                    <span className='descriptionItem'>Time management</span>
                    <span className='descriptionItem'>Adaptability</span>
                    <span className='descriptionItem'>Leadership</span>
                </div>
            </div>


            <div className={'px-10 py-5 relative'}>
                <div className={`first-vertical-line absolute w-[1px] bg-app-border h-0 top-0 bottom-0 right-0 ${inView ? 'animate-expand-vertical-line-type-3' : ''}`}></div>
                <div className='flex flex-col'>
                    <span className='descriptionItem'>Scrum</span>
                    <span className='descriptionItem'>Agile</span>
                    <span className='descriptionItem'>Kanban</span>
                </div>
            </div>

        </div>
    );
};

export default TechTable;