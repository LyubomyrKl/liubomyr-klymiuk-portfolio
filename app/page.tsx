import React from "react";
import Timer from "@/app/ui/timer";
import AnimatedButton from "@/app/ui/animated-button";
import RadarItem from "@/app/ui/home/radar-item";
import TechTable from "@/app/ui/home/tech-table";

export default function Home() {

  return (
    <main className="max-sm:p-8 max-lg:py-16 max-lg:px-2 max-xl:px-20 px-24 py-16 2xl:pb-28">
        <div className='md:min-h-screen'>
            <div className="w-full sm:flex justify-between">
                <div className='flex flex-col'>
                    <span className='text-6xl mb-5'>Liubomyr Klymiuk</span>
                    <span className='text-3xl text-app-text-gray max-sm:mb-6 basis-1'>Web Software Developer</span>
                </div>
                <Timer/>
            </div>
            <div className='flex flex-col items-center max-sm:my-16 my-80'>
                <span className=' text-4xl mb-5 text-app-text-gray text-center'>An ordinary human being</span>
                <span className='text-center text-6xl max-sm:text-xl max-sm:mb-10 mb-36'>
                    with a passion for what he does.
                </span>
                <AnimatedButton anchor='#introduction' label={'Introduction'} />
            </div>
        </div>

        <div id='introduction'>
            <RadarItem/>
            <div className=' py-12 text-lg'>Discover a comprehensive list of my professional skills</div>
            <TechTable/>
        </div>
    </main>
  );
}
