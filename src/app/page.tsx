import Navbar from "./components/Navbar"
import "./globals.css"

const page = () => {
    return (
        <main>
            <Navbar />
            <div className="main">
                <div className="gradient" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center">
                <h1 className='mt-5 text-5xl font-bold leading-[1.15] text-black sm:text-6xl text-center'>
                    Access the perks of RapidAPI & ChatGPT with <br className='max-md:hidden' />
                    <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>Prompt-based</span>
                </h1>
                <h2 className=' mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
                    Initially creating a platform where user can summarize the text and generate image on prompt
                </h2>

            </div>

            <div className='flex justify-center items-center  mt-20'>
                <div className="z-10">
                    <a
                        href="/summarizer"
                        className=" bg-black rounded-xl hover:bg-slate-300 hover:text-black text-white font-bold px-8 py-3"
                    >
                        Summarize it
                    </a>
                    <a
                        href="/image"
                        className=" ml-20 bg-black rounded-xl hover:bg-slate-300 hover:text-black text-white font-bold px-8 py-3"
                    >
                        Generate image
                    </a>
                </div>
            </div>
        </main>
    )
}

export default page