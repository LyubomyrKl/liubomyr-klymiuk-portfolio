'use client';

import React, {useCallback, useEffect, useLayoutEffect} from "react";
import type { Metadata } from "next";
import {quicksand} from "@/app/ui/fonts";
import GlobalNav from "@/app/ui/global-nav";

import "./globals.css";
import {usePathname, useRouter} from "next/navigation";
import SplashScreen from "@/app/ui/splash-screen";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const initialTitle = pathname === '/' ? 'Home' : pathname === '/projects' ? 'Projects' : pathname === '/experience' ? 'Experience' : 'About';


    const splashRef = React.useRef(null);
    const textSplashRef = React.useRef<HTMLHeadingElement>(null);
    const bodyRef = React.useRef<HTMLBodyElement>(null);
    const {contextSafe} = useGSAP();

    const [isLoading, setIsLoading] = React.useState(true);


    React.useEffect(() => {
        if (isLoading) {
            // @ts-ignore
            bodyRef.current.style.paddingBottom = '0';
            return
        }

        if(bodyRef.current){
            bodyRef.current.style.removeProperty('padding-bottom');
        }


        if(textSplashRef.current){
            textSplashRef.current.style.opacity = '1';
        }


        startAnimation();

    }, [isLoading])


    const startAnimation = contextSafe(() => {
        const tl = gsap.timeline();
        tl.to(bodyRef.current, {
            maxHeight: '100vh',
            overflow: 'hidden',
        })
        .to(splashRef.current, {
            top: 'initial',
            bottom: '0',
            height: '100vh',
            ease: "power4.out",
        })
        .to(textSplashRef.current, {
            opacity: 0,
            duration: .7,
            delay: .3,
        })
        .to(splashRef.current,{
            bottom: 'initial',
            top: '0',
            height: '0',
            duration: 1.6,
            ease: "power4.out",
        }, '-=.7')
        .to(bodyRef.current, {
            maxHeight: 'initial',
            overflow: 'visible',
        })
    })

    const navigate = contextSafe((link: string, label:string) => {

        if(link === pathname){
            return;
        }

        if(bodyRef.current){
            bodyRef.current.style.overflow = 'hidden';
        }

        const tl = gsap.timeline();
        tl.to(bodyRef.current, {
            overflow: 'hidden',
        })
        .to(splashRef.current, {
            top: 'initial',
            bottom: '0',
            height: '100vh',
            duration: 1.6,
            ease: "power4.out",
            onComplete: () => {
                router.push(link);
            }
        }).to(textSplashRef.current, {
            opacity: 1,
            duration: .7,
        }, '-=1.6')
        .to(bodyRef.current, {
            maxHeight: '100vh',
            overflow: 'hidden',
        })
        .to(textSplashRef.current, {
            text: `${label}.`,
        }, '-=1.15')
        .to(textSplashRef.current, {
            opacity: 0,
            duration: .7,
            delay: .3,
        })
        .to(splashRef.current,{
            bottom: 'initial',
            top: '0',
            height: '0',
            duration: 1.6,
            ease: "power4.out",
        }, '-=.7')
        .to(bodyRef.current, {
            maxHeight: 'initial',
            overflowY: 'visible',
        })

    })


  return (
    <html lang="en">
      <body ref={bodyRef} className={`${quicksand.className} min-h-screen bg-app-background sm:pb-3`}>
      {isLoading ? <SplashScreen finishLoading={() => setIsLoading(false)}/> : (
        <>
            {children}
            <div className='fixed bottom-0 flex items-center min-w-full justify-center left-0 right-0 sm:p-10 py-10'>
                <GlobalNav onLinkClick={navigate}/>
            </div>
            <div ref={splashRef} className={`fixed h-screen w-full bottom-0 left-0 bg-app-black flex justify-center items-center`}>
                <h1 ref={textSplashRef} id='splash-title' className={`max-sm:text-5xl text-7xl text-app-white opacity-0`}>{initialTitle}.</h1>
            </div>
        </>
          )}
      </body>
    </html>
  );
}
