import React from 'react';

const PortfolioLayout = ({children}) => {
    return (
        <div>
            <h1 className='text-4xl lg:text-8xl'>Our Works</h1>
            {children}
        </div>
    );
};

export default PortfolioLayout;