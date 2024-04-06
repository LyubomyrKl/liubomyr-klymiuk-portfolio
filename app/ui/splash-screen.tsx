'use client';

import React, { useState, useEffect } from "react"
import Image from "next/image"
import anime from "animejs"
import {usePathname, useRouter} from "next/navigation";

interface ISplashScreen {
    finishLoading: () => void;
}

const SplashScreen: React.FC<ISplashScreen>= ({ finishLoading }) => {
    const pathname = usePathname();
    const title = pathname === '/' ? 'Home' : pathname === '/projects' ? 'Projects' : pathname === '/experience' ? 'Experience' : 'About';

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })

        loader
            .add({
                targets: "#logo",
                delay: 0,
                scale: 1,
                duration: 500,
                easing: "easeInOutExpo",
            })
            .add({
                targets: "#logo",
                delay: 100,
                scale: 1.25,
                duration: 500,
                easing: "easeInOutExpo",
            })
            .add({
                targets: "#logo",
                delay: 100,
                scale: 1,
                duration: 500,
                easing: "easeInOutExpo",
            })
    }

    useEffect(() => {
        animate()
    }, [])

    return (
        <div className={`absolute h-full w-full bottom-0 left-0 bg-app-black flex justify-center items-center`}>
            <h1 className={`text-7xl text-app-white`}>{title}.</h1>
        </div>
    )
}

export default SplashScreen
