'use client';

import React, { useState, useEffect } from "react"
import Image from "next/image"
import anime from "animejs"
import {usePathname, useRouter} from "next/navigation";
import {gsap} from "gsap";

interface ISplashScreen {
    finishLoading: () => void;
}

const SplashScreen: React.FC<ISplashScreen>= ({ finishLoading }) => {
    const pathname = usePathname();
    const title = pathname === '/' ? 'Home' : pathname === '/projects' ? 'Projects' : pathname === '/experience' ? 'Experience' : 'About';
    const splashRef = React.useRef(null);

    const animate = () => {

        const tl = gsap.timeline();
        tl.to(splashRef.current, {
            top: 'initial',
            bottom: '0',
            height: '100vh',
            duration: 2,
            onComplete: finishLoading
        })

    }

    useEffect(animate, [finishLoading])

    return (
        <div ref={splashRef} className={`absolute h-full w-full bottom-0 left-0 bg-app-black flex justify-center items-center`}>
            <h1 className={`text-7xl text-app-white`}>{title}.</h1>
        </div>
    )
}

export default SplashScreen
