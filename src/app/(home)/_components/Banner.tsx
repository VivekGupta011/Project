import { Container } from '@/components/layouts'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className='relative w-full h-full'>
            <video src="https://webevis.s3.us-west-1.amazonaws.com/Movieminia/videoplayback.mp4" className='object-cover opacity-70 ' autoPlay></video>
            <div className='max-w-screen-sm flex flex-col justify-center gap-5 bg-gradient-to-r from-black via-transparent to-transparent from-opacity-65 via-opacity-0 to-opacity-0 absolute h-full'>
                <Image src="https://webevis.s3.us-west-1.amazonaws.com/Movieminia/kurulusosmanlogohd.png" className="w-[400px] h-auto" alt="" width={600} height={600} />
                <p className='text-white text-2xl'>Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy`s mother. Two decades later, Amleth is now a Viking who`s on a mission to save his mother, kill his uncle and avenge his father.</p>
                <div className='flex gap-5'>
                    <button type='button' className='rounded-md px-3 py-2 text-black bg-white font-medium text-base'>Watch Trailer</button>
                    <button type='button' className='rounded-md px-3 py-2 text-black bg-white font-medium text-base'>Watch Trailer</button>
                </div>
            </div>
            {/* <Container>
                
            </Container> */}
        </section>
    )
}

export default Banner