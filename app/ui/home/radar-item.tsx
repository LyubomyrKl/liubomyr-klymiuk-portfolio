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
        <div ref={ref} className='flex relative max-h-[360px]'>
            <span className={`top-line absolute top-0 left-0 w-0 h-[1px] bg-app-border ${inView ? 'animate-expand-horizontal-line-type-1' : ''}`}></span>
            <div className='relative w-1/2 flex flex-col items-center border-r border-app-border p-2'>
                <div className={`inner-vertical absolute w-[1px] h-full bg-app-border left-1/2 bottom-0 -translate-x-full ${inView ? 'animate-expand-vertical-line-type-1' : ''}`}></div>
                <span className='w-full absolute left-0 text-xl font-semibold'>Stack</span>
                <Radar className='radar relative -z-1 w-2/3' data={data}
                       options={{
                           scales: {
                               r: {
                                   beginAtZero: true,
                                   max: 5,
                                   min: 0,
                                   ticks: {
                                       stepSize: 2.5,
                                       display: false // Hides the labels in the middel (numbers)
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
                <div className={`inner-horizontal absolute z-1 h-[1px] w-full bg-app-border right-0 top-1/2 -translate-y-1/2 ${inView ? 'animate-expand-horizontal-line-type-2' : ''}`}></div>
            </div>
            <div className='flex flex-col w-1/2 p-10'>
                <span className='text-4xl text-app-black mb-5'>The main stack.</span>
                <span className='text-lg'>
                    I specialize in front-end development using React ecosystem, Node.js, and TypeScript
                </span>
            </div>
            <span className={`bottom-line absolute bottom-0 right-0 w-full h-[1px] bg-app-border ${inView ? 'animate-expand-horizontal-line-type-3' : ''}`}></span>
        </div>

    );
};

export default React.memo(RadarItem);