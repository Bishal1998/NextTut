import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='h-12 flex items-center justify-between text-sm'>
            <div>&copy; 2023 NextTut. All Rights Reserved.</div>
            <div className='flex items-center gap-2.5'>
                <Link href='/' className='opacity-60 hover:opacity-100'>
                    <Image src='/1.png' alt='Facebook' width={15} height={15}/>
                </Link>
                <Link href='/' className='opacity-60 hover:opacity-100'>
                    <Image src='/2.png' alt='Instagram' width={15} height={15}/>
                </Link>
                <Link href='/' className='opacity-60 hover:opacity-100'>
                    <Image src='/3.png' alt='Twitter' width={15} height={15}/>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;