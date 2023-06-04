'use client'

import React, {useContext} from 'react';
import {ThemeContext} from "@/Context/ThemeContext";

const DarkMode = () => {

    const {toggle, mode} = useContext(ThemeContext);

    return (
        <section
            className='w-12 h-6 border-2 border-solid border-[#53c28b70] rounded-[30px]  flex items-center justify-between p-0.5 relative cursor-pointer'
            onClick={toggle}>
            <div className='text-sm'>🌙</div>
            <div className='text-sm'>🔆</div>
            <div
                className='w-4 h-4 bg-[#53c28b] rounded-[50%] absolute'
                style={mode === "light" ? {left: "4px"} : {right: "2px"}}
            />
        </section>
    );
};

export default DarkMode;