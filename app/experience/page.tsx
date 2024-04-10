'use client';
import React, {useCallback, useState} from 'react';
import DescriptionItem from "@/app/ui/description-item";

const Page = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [activeRow, setActiveRow] = useState<number | null>(null);

    const handleItemClick = useCallback((idx:string, rowIndex: number) => {
        if(activeItem === idx) {
            setActiveItem(null);
            setActiveRow(null);
            return;
        }
        setActiveItem(idx);
        if (window.innerWidth > 600) {
            setActiveRow(rowIndex)
        }
    }, [activeItem]);

    return (
        <div className="w-full h-screen relative flex flex-col pt-5">

            <div className='relative pb-10'>
                <div className="typewriter">
                    <h2 className="sm:text-xl md:text-2xl lg:text-4xl ">Web Software developer since 2020</h2>
                </div>
                    <p className='text-sm mt-4 px-5 md:text-lg'>
                        I have deep knowledge of JavaScript/TypeScript, especially React, Redux/RTL.
                        I also have experience with React Native and Angular.
                        Beside that, I have broad experience in Antd/MUI,
                        Styled-components/CSS-in-JS/Preprocessors as styles
                        React-testing-library/Jest. Has familiarity with Docker
                    </p>
                <div className='absolute w-0 h-px bg-app-darkgray bottom-0 animate-expand-horizontal-line-type-3'></div>
            </div>
            <div className='px-3 py-2 md:px-24 w-full flex justify-end items-center  md:h-24'>
                <span className='text-right md:text-lg'>That&apos;s only main projects</span>
            </div>
            <div className='relative grow'>
                <div className="gallery-grid h-[300%] md:h-full w-full flex flex-col">
                    {experienceItems.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`row-item max-w-screen-md:flex-col flex min-h-10 grow-[2] shrink
                            ${activeRow === null ? 'md:h-[50%]' : rowIndex === activeRow ? 'md:h-[70%]' : 'md:h-[30%]'}`}
                        >
                            <div className={`absolute w-0 h-px bg-app-darkgray animation-delay-1500 
                                ${rowIndex === 1 ? 'animate-expand-horizontal-line-type-3 right-0' : 'animate-expand-horizontal-line-type-4'}`}>
                            </div>
                            {row.map((item) => (
                                <ExperienceItem
                                    key={item.title}
                                    {...item}
                                    activeItem={activeItem}
                                    handleItemClick={() => handleItemClick(item.title, rowIndex)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


interface IExperienceItemProps extends IExperienceItem{
    activeItem: string | null;
    handleItemClick: () => void;
}
// handleItemClick(item.title, rowIndex)
// index !== row.length - 1
const ExperienceItem: React.FC<IExperienceItemProps> = ({
    title,
    subtitle,
    details,
    line,
    tags,
    activeItem,
    handleItemClick,
}) => {
    return (
        <div
            key={title}
            className={`grid-item ${activeItem === title  ? 'active' : ''}`}
            onClick={handleItemClick}
        >
            {line}
            <div className="experience-title">
                <h2 className='text-lg md:text-xl uppercase tracking-[1px]'>{title}</h2>
                <h5 className='max-w-screen-md:text-sm absolute bottom-2'>{subtitle}</h5>
            </div>
            <div className="img-wrap text-sm lg:text-lg ">
                <div className='img p-10'>
                    <div className='mb-5'>
                        {details}
                    </div>
                    <div>
                        {tags?.map(tag => (
                            <DescriptionItem className={'py-1 mr-3 mb-3'} key={tag}>
                                {tag}
                            </DescriptionItem>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

interface IExperienceItem {
    title: string;
    subtitle: string;
    details: string;
    tags?: string[];
    line?: React.ReactNode[];
}

const experienceItems: IExperienceItem[][] = [
    [
        { title: "CRM System", subtitle: 'CRM System',
            details:
                "Front-End Developer leading CRM system development for key automotive and real estate projects in the US market at Abetter.bid/IAAI/SCA. Skilled in React, Redux/RTK/RTK Query, and Ant Design (Antd), I create responsive interfaces, conduct rigorous testing with React Testing Library (RTL), and ensure browser compatibility. " +
                "I implement new features like real-time data updates, enhanced accessibility, and optimized user interfaces for diverse devices.",
            tags: ['React', 'Redux', 'RTK', 'RTL', 'Jest', 'Ant Design'],
            line: [
                <div key={1} className={`vertical-line absolute w-px h-0 right-0 bottom-0 bg-app-darkgray animation-delay-2500 animate-expand-vertical-line-type-2`}></div>,
                <div key={2} className='horizontal-line absolute h-px w-0 animate-expand-horizontal-line-type-3 bottom-0 bg-app-darkgray right-0'></div>
            ]
        },
        { title: "A Better Bid/SCA/IAAI", subtitle: 'Bid Car Auction',
            details: "We were developing a number of major projects in the automotive business, including real-time auto auctions and real estate business in the US market.",
            tags: ['Vue', 'Vuex', 'Vuetify', 'Jest', 'jQuery', 'PHP', 'Elastic'],
            line: [
                <div key={1} className={`vertical-line absolute w-px h-0 right-0 top-0 bg-app-darkgray animate-expand-vertical-line-type-1`}></div>,
                <div key={2} className='horizontal-line absolute h-px w-0 animate-expand-horizontal-line-type-1 bottom-0 bg-app-darkgray left-0'></div>
            ]
        },

        { title: "Business Brokers", subtitle: 'NDA', details: "Serves matches businesses with buyers, handling all aspects of the process " +
                "from marketing to legal requirements.",
            tags: ['Angular', 'Formik']
        },
    ],
    [
        { title: "Healthcare", subtitle: 'NDA', details: "A healthcare system that offers the capability to track patients" +
                "gather statistics, and monitor progress in health management.",
            tags: ['React', 'Redux', 'RTK', 'RTL', 'Jest', 'Chart.js', 'Material-UI'],
            line: [
                <div key={1} className={`vertical-line absolute w-px h-0 right-0 bottom-0 bg-app-darkgray animate-expand-vertical-line-type-2`}></div>,
                <div key={2} className='horizontal-line absolute h-px w-0 animate-expand-horizontal-line-type-2 bottom-0 bg-app-darkgray left-0'></div>
            ]
        },
        { title: "CRM Chrome Extension", subtitle: 'Extension', details: "Improve CRM experience with Chrome Extension, offering seamless " +
                "integration and enhanced functionality for efficient client management.",
            tags: ['React', 'Redux-persist', 'RTK', 'RTL', 'Jest', 'Ant Design'],
            line: [
                <div key={1} className={`vertical-line absolute w-px h-0 right-0 animation-delay-3000 top-0 bg-app-darkgray animate-expand-vertical-line-type-3`}></div>,
                <div key={2} className='horizontal-line absolute h-px w-0 animate-expand-horizontal-line-type-4 bottom-0 bg-app-darkgray right-0'></div>

            ]
        },
        { title: "Survey", subtitle: 'NDA', details: "I've had the opportunity to work on an online service for surveys in the Sociology/Education domain, leveraging Qualtrics as the base platform. The project involved integrating rich text libraries, dynamic components, and charts, all infused with super interactive animations. " +
                "Despite the complexity of that project the performance optimization helped to provide smooth UX.",
            tags: ['React', 'Redux', 'RTK', 'RTL', 'Jest', 'Chart.js', 'Ant Design', 'Fomik', 'Lottie', 'Yup', 'Styled Components'],
            line: [
                <div key={1} className='horizontal-line absolute h-px w-0 animate-expand-horizontal-line-type-4 bottom-0 bg-app-darkgray left-0'></div>
            ]
        }
    ]
];

export default Page;