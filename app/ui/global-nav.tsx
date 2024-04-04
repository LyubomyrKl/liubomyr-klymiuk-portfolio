'use client'

import { usePathname } from 'next/navigation'

import React, {useCallback, useMemo, useState} from 'react';
import Link from "next/link";
import Home from "@/app/ui/svg/home";
import ArrowRight from "@/app/ui/svg/arrow-right";
import {useWindowSize} from "@/app/ui/hooks";
import Burger from "@/app/ui/svg/burger";
import Cross from "@/app/ui/svg/cross";

const desktopNavItems = [
    {
        label: 'Projects',
        href: '/projects'
    },
    {
        label: 'Experience',
        href: '/experience'
    },
]


const mobileNavItems = [
    {
        label: 'Home',
        href: '/'
    },
    ...desktopNavItems,

]

interface INav{
    onLinkClick: (link: string, label: string) => void;
}

const DesktopNav: React.FC<INav> = ({onLinkClick}) => {
    const pathname = usePathname();

    const renderNavItems = useCallback(() => {
        return desktopNavItems.map(({label, href}, index) => {
            return (
                <div className={`px-5 py-3 mr-2 flex items-center relative` }
                     onClick={() => onLinkClick(href, label)}
                      key={href}
                >
                    <div className={`min-w-full rounded-full 
                    absolute top-0 left-0 bottom-0 right-0 
                    animate-scale-up hover:animate-scale-down
                    hover:bg-app-lightgray duration-200
                    ${pathname === href ? 'bg-app-gray' : ''}
                    `}></div>
                    <span className='relative pointer-events-none'>{label}</span>
                </div>
            );
        });
    }, [pathname]);

    return (
        <nav className='flex bg-app-darkgray/95 p-1 rounded-full p-1.5 text-app-white'>
            <div onClick={() => onLinkClick('/', 'Home')}  className={`px-5 py-3 mr-5 relative flex items-center`}>
                <div className={`rounded-full duration-200 absolute top-0 left-0 bottom-0 right-0 animate-scale-up hover:animate-scale-down hover:bg-app-gray animate-scale-up hover:animate-scale-down
                ${pathname === '/' ? 'bg-app-gray' : ''}
                `}></div>
                <span className='pointer-events-none relative flex items-center'>
                    <Home/>
                </span>
            </div>
            {renderNavItems()}
            <div onClick={() => onLinkClick('/contacts', 'Contacts')}>
                <LetsTalkButton/>
            </div>
        </nav>
    );
};

const MobileNav: React.FC<INav> = ({onLinkClick: onClick}) => {
    const [isMenuActive , setIsMenuActive ] = useState<boolean>(false);
    const [isItemActive , setIsItemActive ] = useState<boolean>(false);
    const pathname = usePathname();

    const activeLabel = useMemo(() => mobileNavItems.find(({href}) => href === pathname)?.label, [pathname]);

    const renderNavItems = useCallback(() => {
        return (
            mobileNavItems.map(({label, href}, index) => {
                    return (
                        <div onClick={() => onLinkClick(href, label)} key={href} className={`w-full rounded-3xl flex items-center text-sm  font-semibold ${pathname === href && 'bg-app-gray'}`}>
                            <span className={`ml-5 scale-75 ${pathname !== href && 'invisible '} `}><ArrowRight/></span>
                            <span className='p-5'>{label}</span>
                        </div>
                    )
                })
        )
    }, [pathname]);

    const onLinkClick = (href: string, label: string) => {
        onClick(href, label);
        closeMenu();
    }


    const openMenu = () => {
        setIsMenuActive(true);

        setTimeout(() => {
            setIsItemActive(true);
        }, 450)
    }

    const closeMenu = () => {
        setIsItemActive(false);
        setTimeout(() => {
            setIsMenuActive(false);
        }, 250)
    }


    return (
        <nav className={`flex flex-col justify-end items-center bg-app-darkgray/95 p-1  p-1.5 mx-1 text-app-white 
        rounded-bl-3xl rounded-br-3xl rounded-tl-3xl rounded-tr-3xl h-[60px]
        ${isMenuActive ? 'animate-expand-menu' : 'animate-shrink-menu'}
        
        `}>
            <div className={`w-full z-1 bg-app-darkgrey mb-7 px-1 overflow-hidden
                ${isItemActive ? 'animate-fadeIn' : 'animate-fadeOut'}
            `}>
                <div className={`flex flex-col items-center`}>
                    {renderNavItems()}
                </div>
            </div>
            <div className={'flex justify-between w-full h-[50px]'}>
                <div className='flex items-center relative z-2'>
                    <span onClick={isItemActive ? closeMenu : openMenu} className={'flex items-center mr-2 ml-2'}>{isMenuActive ? <Cross/> : <Burger/>}</span>
                    <span>{activeLabel}</span>
                </div>
                <div onClick={() => onLinkClick('/contacts', 'Contacts')}>
                    <LetsTalkButton/>
                </div>
            </div>
        </nav>
    );
}

const LetsTalkButton = () => {
    return (
        <div className='group px-5 py-3 ml-3 flex items-center relative'>
            <div className='min-w-full rounded-full top-0 left-0 bottom-0 rigth-0 duration-200 absolute bg-app-black hover:bg-black animate-scale-up group-hover:animate-scale-down'></div>
            <span className='relative pointer-events-none'>Let's talk </span>
            <span className='relative ml-3 animate-shift-left group-hover:animate-shift-right'><ArrowRight/></span>
        </div>
    )
}

const GlobalNav: React.FC<INav> = (props) => {
    const windowSize = useWindowSize();

    return (
        windowSize > 560 ? <DesktopNav {...props}/> : <MobileNav {...props}/>
    );
}







export default React.memo(GlobalNav);