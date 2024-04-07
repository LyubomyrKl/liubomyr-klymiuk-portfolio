'use client';

import React from 'react';

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import {useInView} from "react-intersection-observer";


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
);

export const data = {
    labels: ['Python',  'React   ',   'Next.js', ' React Native',  'Node.js', 'JS/TS'],
    datasets: [
        {
            data: [2, 5, 4, 2, 3, 5],
            backgroundColor: 'rgba(94,94,94,0.2)',
            borderColor: 'rgb(82,82,82)',
            borderWidth: 1,
        },
    ],

};


const RadarItem = () => {

    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    return (
        <div ref={ref} className='flex max-sm:flex-col-reverse relative sm:max-h-[360px]'>
            <span className={`max-sm:hidden top-line absolute top-0 left-0 w-0 h-[1px] bg-app-border ${inView ? 'animate-expand-horizontal-line-type-1' : ''}`}></span>
            <div className='relative sm:w-1/2 max-sm:mb-10 flex flex-col items-center p-2'>
                <div className={`inner-vertical left-1/2 bottom-0 absolute w-[1px] h-full bg-app-border -translate-x-full ${inView ? 'animate-expand-vertical-line-type-1' : ''}`}></div>
                <div className={`right-inner-vertical right-0 bottom-0 absolute w-[1px] h-full bg-app-border -translate-x-full ${inView ? 'animate-expand-vertical-line-type-3' : ''}`}></div>
                <div className={`sm:hidden left-0 bottom-0 absolute w-[1px] h-full bg-app-border ${inView ? 'animate-expand-vertical-line-type-1' : ''}`}></div>
                <div className={`sm:hidden right-0 bottom-0 absolute z-1 h-[1px] w-full bg-app-border ${inView ? 'animate-expand-horizontal-line-type-3' : ''}`}></div>
                <div className={`sm:hidden right-0 top-0 absolute z-1 h-[1px] w-full bg-app-border  ${inView ? 'animate-expand-horizontal-line-type-2' : ''}`}></div>
                <span className='w-full max-sm:pl-3 absolute left-0 text-xl font-semibold'>Stack</span>
                <Radar className='radar relative -z-1 w-2/3' data={data}
                       options={{
                           scales: {
                               r: {
                                   beginAtZero: true,
                                   max: 5,
                                   min: 0,
                                   ticks: {
                                       stepSize: 2.5,
                                       display: false // Hides the labels in the middle (numbers)
                                   },
                                   angleLines: {
                                       lineWidth: 1,
                                       color: '#aaaaaa',
                                   },
                                   grid: {
                                       color: ['rgb(82,82,82)', 'rgba(170,170,170,0.26)' ]
                                   },
                                   pointLabels:{
                                       font: {
                                           size: 14
                                       }
                                   },
                               },
                           },
                           elements:{
                               point: {
                                   radius: 0,
                               }
                           },

                       }}
                />
                <div className={`inner-horizontal right-0 top-1/2 absolute z-1 h-[1px] w-full bg-app-border  ${inView ? 'animate-expand-horizontal-line-type-3' : ''}`}></div>
            </div>
            <div className='relative flex flex-col sm:w-1/2 sm:p-10 max-sm:mb-10'>
                <span className='text-4xl text-app-black mb-5'>The main stack.</span>
                <span className='text-lg max-sm:pb-10'>
                    I specialize in front-end development using React ecosystem, Node.js, and TypeScript
                </span>
            </div>
            <span className={`bottom-line absolute bottom-0 sm:right-0 w-0 h-[1px] bg-app-border animation-delay-1000 ${inView ? 'animate-expand-horizontal-line-type-1' : ''}`}></span>
        </div>

    );
};

export default React.memo(RadarItem);