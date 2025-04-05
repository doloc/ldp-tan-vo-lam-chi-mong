const Hero = () => {
    return (
        <div className="relative w-full">
            <video
                className="relative top-0 left-0 w-full aspect-[640/1136] object-cover"
                src="/images/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute w-full bottom-[5%] flex justify-center animate-bounce"> 
                <img className='w-[40%]' src="/images/scrolling.png" alt="" />
            </div>
        </div>
    )
}

export default Hero