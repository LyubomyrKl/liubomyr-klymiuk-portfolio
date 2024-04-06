'use client';

import React, {useCallback} from "react";
import type { Metadata } from "next";
import {quicksand} from "@/app/ui/fonts";
import GlobalNav from "@/app/ui/global-nav";

import "./globals.css";
import {usePathname, useRouter} from "next/navigation";
import SplashScreen from "@/app/ui/splash-screen";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  const initialTitle = pathname === '/' ? 'Home' : pathname === '/projects' ? 'Projects' : pathname === '/experience' ? 'Experience' : 'About';

  const [title, setTitle] = React.useState<string>(`${initialTitle}.`);
  const [startAnimation, setStartAnimation] = React.useState<boolean>(false);
  const [startFadeAnimation, setStartFadeAnimation] = React.useState<boolean>(false);


    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        if (isLoading) {
            return
        }
    }, [isLoading])



    const navigate = useCallback((link: string, label:string) => {
      setTitle(`${label}.`);

      setStartAnimation(true);

      setTimeout(() => {
            setStartFadeAnimation(true);
      }, 100);

    setTimeout(() => {
        setStartFadeAnimation(false);
    }, 1500);

    setTimeout(() => {
        setStartAnimation(false);
    }, 1600);

    setTimeout(() => {
        router.push(link);
    }, 1500);
  }, []);


  return (
    <html lang="en">
      <body className={`${quicksand.className} min-h-screen bg-app-background${!isLoading ? ' pb-24' : ''}${startAnimation ? ' overflow-hidden' : ''}`}>
      {isLoading ? <SplashScreen finishLoading={() => setIsLoading(false)}/> : (
        <>
            {children}
            <div className='fixed bottom-0 flex items-center min-w-full justify-center left-0 right-0 sm:p-10 py-10'>
                <GlobalNav onLinkClick={navigate}/>
            </div>
            <div className={`absolute h-[0px] w-full bottom-0 left-0 bg-app-black flex justify-center items-center  
            ${startAnimation ? 'animate-popup-route-in' : 'animate-popup-route-out'}`}>
                <h1 className={`text-7xl text-app-white
                    ${startFadeAnimation ? 'animate-fadeIn' : 'animate-fadeOut'}
                `}>{title}</h1>
            </div>
        </>
          )}
      </body>
    </html>
  );
}
