'use client';

import React, {useEffect, useState} from 'react';
import DescriptionItem from "@/app/ui/description-item";


interface IProjectItem {
    title: string;
    subtitle: string;
    description: string

    link: string;
    tags: string[];
}


const Page = () => {
    const [isRecentlyScrolled, setISRecentlyScrolled] = useState(false);
    const [items, setItems] = useState(projectItems);
    let pageWidth = window.innerWidth || document.body.clientWidth;
    let threshold = Math.max(1,Math.floor(0.01 * (pageWidth)));
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;
    const limit = Math.tan(45 * 1.5 / 180 * Math.PI);

    const nextItem = () => {
        if(!isRecentlyScrolled){
            setItems(prevItems => {
                return [...prevItems.slice(1), prevItems[0]];
            });
            setISRecentlyScrolled(true);
            setTimeout(() => setISRecentlyScrolled(false), 800); // Adjust the debounce time as needed
        }

    }

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            //@ts-ignore
            if(e.wheelDelta < 0 ) {
                nextItem();
            }
        }


        const handleGesture = (e: TouchEvent) => {
            let x = touchendX - touchstartX;
            let y = touchendY - touchstartY;
            let xy = Math.abs(x / y);
            let yx = Math.abs(y / x);

            if (Math.abs(x) > threshold || Math.abs(y) > threshold)  {
                if ((xy <= limit) && (y < 0) ) {
                    nextItem();
                }
            }
        }

        const handleTouchStart = (e: TouchEvent) => {
            touchstartX = e.changedTouches[0].screenX;
            touchstartY = e.changedTouches[0].screenY;
        }

        const handleTouchEnd = (e: TouchEvent) => {
            touchendX = e.changedTouches[0].screenX;
            touchendY = e.changedTouches[0].screenY;
            handleGesture(e);
        }

        window.addEventListener('wheel', handleScroll);
        window.addEventListener('touchstart', handleTouchStart, false);
        window.addEventListener('touchend',  handleTouchEnd, false);

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart, false);
            window.removeEventListener('touchend',  handleTouchEnd, false);

        };
    }, [isRecentlyScrolled]);


    return (
        <div className="relative w-full h-screen overflow-hidden">
            {items.map((item, index) => <ProjectItem key={item.title} onClick={((index === 2) || (index === 3)) && pageWidth > 640  ? nextItem : undefined} {...item}/>)}
        </div>
    );
};

interface IProjectItemProps extends IProjectItem {
    onClick?: () => void;
}

const ProjectItem: React.FC<IProjectItemProps> = ({title, subtitle, tags, description, link, onClick}) => {
    return (
        <div onClick={onClick} className={`project-item shadow-2xl border border-app-darkgray bg-app-background flex flex-col justify-center transition-all ease-in-out p-10`}>

            <div className={'relative max-md:justify-start h-full w-full flex flex-col justify-center'}>
                <div className='lines absolute h-px w-0 right-0 bottom-2  bg-app-darkgray animate-expand-horizontal-line-type-1 animation-delay-1000'></div>

                <a href={link} className='project-title '>
                    <span className='relative'><div className='lines absolute h-px w-0 left-0 -bottom-[2px] max-xl:-bottom-[5px] max-sm:-bottom-[2px]   bg-app-darkgray animate-expand-horizontal-line-type-3'></div>
                        {title}
                    </span>
                </a>
                <h3 className='project-subtitle title text-app-text-gray mb-3'>{subtitle}</h3>
                <div className={'content relative'}>
                    <p className='mb-4 max-w-screen-sm des'>{description}</p>
                    <div className='max-w-[390px]  flex flex-wrap tags'>
                        {tags.map(tag => (
                            <DescriptionItem className={'mr-2 mb-2'} key={tag}>{tag}</DescriptionItem>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}



const projectItems: IProjectItem[] = [

    {
        title: 'Eve',
        subtitle: 'AI Voice Assistant',
        description: 'The AI Voice Assistant I\'ve developed operates as an OS Home Kit, running on a Raspberry Pi hub. The voice is provided by Assembly AI. Devices within the house communicate via the ZigBee/Z-Wave protocols. Script execution is guided by contextual understanding from the LLM model, employing a transformer agent.',
        link: 'https://github.com/LyubomyrKl/Eve',
        tags: ['Python', 'Raspberry Pi', 'Assembly AI', 'ZigBee', 'Z-Wave', 'LLM', 'Transformer Agent']
    },
    {
        title: 'Book Core',
        subtitle: 'Mobile app',
        description: 'Book-Core is an app designed for avid readers, using React Native, Epub.js, Gemini/Claude 3/GPT-4, Python, and MongoDB. It offers seamless reading and summarization of ebooks. React Native ensures cross-platform compatibility, Epub.js for rendering EPUB files, PDF reader, Gemini for summarization, Python for backend logic, and MongoDB for storage',
        link: 'https://github.com/LyubomyrKl/book-core',
        tags: ['React Native', 'Epub.js', 'Gemini', 'Claude 3', 'GPT-4', 'Python', 'MongoDB']
    },
    {
        title: 'Class Whole',
        subtitle: 'An educational platform',
        description: 'Class Whole is an educational platform, seamlessly integrates features from Google Meet and Classroom, along with AI summarization capabilities. Built with TypeScript, React, Next.js, RTL, Node.js, Mongo, and Styled Components.',
        link: 'https://github.com/LyubomyrKl/class-whole',
        tags: ['TypeScript', 'React', 'Next.js', 'RTL', 'Node.js', 'Mongo', 'Styled Components']
    },
    {
        title: 'Home-Credit',
        subtitle: 'Credit-Risk-Model-Stability',
        description: 'This AI competition aims to predict loan default risks, helping consumer finance providers lend responsibly despite limited credit history. Hosted by Home Credit, your contributions improve loan assessments, benefiting individuals with limited credit history and promoting financial inclusion. Usingl LGBM, RNN/LSTM we achive signigicant result',
        link: 'https://github.com/LyubomyrKl/Home-Credit---Credit-Risk-Model-Stability',
        tags: ['Python', 'LGBM', 'RNN', 'LSTM', 'AI']
    },
    {
        title: 'This portfolio',
        subtitle: 'My business card',
        description: 'This repository hosts my portfolio, spotlighting my skills, projects, and experiences. It\'s powered by Next.js and styled efficiently with Tailwind CSS. Deployed on Vercel and GitHub Pages, it utilizes Sharp for optimized images, Docker for containerization, and i18n for internationalization support.',
        link: 'https://github.com/LyubomyrKl/Home-Credit---Credit-Risk-Model-Stability',
        tags: ['Next.js', 'Tailwind CSS', 'GSAP', 'Vercel', 'GitHub', 'Sharp', 'Docker', 'i18n']
    },
]


export default Page;