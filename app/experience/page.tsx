'use client';


import React, {useEffect, useRef, useState} from 'react';

const Page = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const [expandedItems, setExpandedItems] = useState<number[]>([]);
    const gridItemsRef = useRef<HTMLDivElement[] | null>([]);
    const gridRowRef = useRef<HTMLDivElement[] | null>([]);

    useEffect(() => {
        const handleResize = () => {
            setActiveItem(null);
            setExpandedItems([]);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleItemClick = (idx:number) => {
        setActiveItem(idx);

        if (window.innerWidth > 600) {
            const activeGroup = getActiveGroup(idx);
            setExpandedItems(activeGroup);

            const gridRows = gridRowRef.current;


            if(gridRows){
                if (idx <= 2) {
                    gridRows[0].style.height = '70%';
                    gridRows[1].style.height = '30%';
                } else {
                    gridRows[0].style.height = '30%';
                    gridRows[1].style.height = '70%';
                }
            }
        }
    };

    const getActiveGroup = (idx: number) => {
        if (idx === 0 || idx === 3) {
            return [0, 3];
        } else if (idx === 1 || idx === 4) {
            return [1, 4];
        } else if (idx === 2 || idx === 5) {
            return [2, 5];
        }
        return [];
    };


    return (
        <div className="w-full h-screen relative">
            <div className="gallery-grid absolute top-1/4 w-full h-3/4 flex flex-col">
                <h2 className="pl-2 text-4xl ">Temporary in development</h2>
                {rows.map((row, rowIndex) => (
                    // @ts-ignore
                    <div ref={(el) => (gridRowRef.current[rowIndex] = el)} key={rowIndex} className="row flex min-h-10 grow-[2] shrink">
                        {row.map((item, index) => (
                            <div    // @ts-ignore
                                ref={(el) => (gridItemsRef.current[rowIndex * row.length + index] = el)}
                                key={index}
                                className={`grid-item${index === row.length - 1 ? ' end' : ''} ${activeItem === rowIndex * row.length + index ? 'active' : ''} ${expandedItems.includes(rowIndex * row.length + index) ? 'expanded' : ''}`}
                                onClick={() => handleItemClick(rowIndex * row.length + index)}>
                                <div className="experience-title">
                                    <h2 className='text-lg uppercase tracking-[1px] '>{item.category}<span className='text-[10px]'>{item.number}</span></h2>
                                    <h5 className='text-sm absolute bottom-0'>{item.details}</h5>
                                </div>
                                <div className="img-wrap">
                                    <div className="img">
                                        text
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const rows = [
    [
        { category: "Moutains", number: "(01)", details: "Details" },
        { category: "Architecture", number: "(02)", details: "Details" },
        { category: "Abstract", number: "(03)", details: "Details" }
    ],
    [
        { category: "Winter", number: "(04)", details: "Details" },
        { category: "Urban", number: "(05)", details: "Details" },
        { category: "Commute", number: "(06)", details: "Details" }
    ]
];

export default Page;