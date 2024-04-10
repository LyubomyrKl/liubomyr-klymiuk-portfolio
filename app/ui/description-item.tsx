import React from 'react';

interface IDescriptionItem {
    children: React.ReactNode;
    className?: string;
}

const DescriptionItem: React.FC<IDescriptionItem> = ({children, className}) => {
    return (
        <span className={`px-3 py-3 inline-flex items-center border border-app-darkgray rounded-3xl ${className}`}>
            {children}
        </span>
    );
};

export default DescriptionItem;