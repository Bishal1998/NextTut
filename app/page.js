import Image from 'next/image'
import Button from "@/components/Button/Button";

export const metadata = {
    title: 'Home',
    description: 'NextTut is Full Stack App',
}

export default function Home() {
    return (
        <main className='flex items-center gap-24'>
            <div className='flex-1 flex flex-col gap-12'>
                <p className='text-7xl leading-tight font-semibold bg-gradient-to-b from-[#194c33] to-[#bbbbbb] bg-clip-text text-transparent'>Better
                    design
                    for your digital
                    products.</p>
                <p className='text-xl font-light'>Turning your Idea into Reality. We bring together the teams from the
                    global tech industry.</p>
                <Button text='See Our Works' url='/portfolio' />
            </div>
            <div className='flex-1 flex flex-col gap-12'>
                <Image src='/hero.png' alt='Hero Image' className='w-full h-[500px] object-contain' />
            </div>
        </main>
    )
}
