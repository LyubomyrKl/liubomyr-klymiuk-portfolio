'use client';
import React from 'react';
import ArrowDown from "@/app/ui/svg/arrow-down";

interface IAnimatedButton{
    label: string;
    anchor: string;
}

const AnimatedButton: React.FC<IAnimatedButton> = ({label, anchor}) => {

    return (
        <a href={anchor} className='group w-[160px] h-[57px] relative flex items-center'>
            <span className='text-center pl-4 mr-2'>{label}</span>
            <span className='animate-shift-up group-hover:animate-shift-down'><ArrowDown/></span>
            <div className='absolute w-full h-full top-0 left-0 animate-scale-up     group-hover:animate-scale-down '>
                <svg width="100%" height="100%" viewBox="0 0 167 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect id="animatedRect" x="1" y="59" width="58" height="165" rx="29" transform="rotate(-90 1 59)" stroke="#222222" strokeWidth="2"></rect>
                </svg>
            </div>
        </a>
    );
};

export default AnimatedButton;