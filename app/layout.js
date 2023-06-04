import './globals.css'
import {Poppins} from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/Context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const font = Poppins(
    {
        weight: ['400', '500', '600', '700', '800', '900'],
        subsets: ['latin']
    })

export const metadata = {
    title: 'NextTut',
    description: 'NextTut is Full Stack App',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={font.className}>
        <ThemeProvider>
            <AuthProvider>
                <div className='max-w-[1366px]  min-h-screen my-0 mx-auto py-0 px-16 flex flex-col justify-between'>
                    <Navbar/>
                    {children}
                    <Footer/>
                </div>
            </AuthProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
