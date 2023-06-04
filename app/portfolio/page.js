import React from 'react';
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: 'Portfolio',
    description: 'NextTut is Full Stack App',
}

const Portfolio = () => {
    return (
        <section>
            <h1 className='my-5 mx-0 text-3xl text-center lg:text-left'>Choose a gallery</h1>
            <div className='flex flex-col items-center lg:flex-row gap-12'>
                <Link href="/portfolio/illustrations"
                      className='border-4 border-solid border-[#bbbbbb] rounded w-72 h-96 relative  hover:text-[#53c28b]'>
                    <Image src='/illustration.png' alt='Illustrations Image' fill={true} className='object-cover'/>
                    <span
                        className='absolute right-2.5 bottom-2.5 text-4xl font-bold hover:text-[#53c28b] '>Illustrations</span>
                </Link>
                <Link href="/portfolio/websites"
                      className='border-4 border-solid border-[#bbbbbb] rounded w-72 h-96 relative hover:text-[#53c28b]'>
                    <Image src='/websites.jpg' alt='Website Image' fill={true} className='object-cover'/>
                    <span
                        className='absolute right-2.5 bottom-2.5 text-4xl font-bold hover:text-[#53c28b] '>Websites</span>
                </Link>
                <Link href="/portfolio/applications"
                      className='border-4 border-solid border-[#bbbbbb] rounded w-72 h-96 relative hover:text-[#53c28b]'>
                    <Image src='/apps.jpg' alt='Apps Image' fill={true} className='object-cover'/>
                    <span
                        className='absolute right-2.5 bottom-2.5 text-4xl font-bold hover:text-[#53c28b] '>Application</span>
                </Link>
            </div>
        </section>
    );
};

export default Portfolio;