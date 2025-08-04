
function AudioSection(){

    return(
        <section className="sm:max-w-[1200px] min-w-[390px] mx-auto px-10 md:px-6 lg:px-4 mt-10 h-[400px] md:h-[475px] flex flex-col md:flex-row justify-between md:items-center mb-[240px] gap-10">
            <div className="flex flex-col justify-start">
                <h2 className="text-3xl lg:text-5xl font-bold flex flex-col">새로운 내일을<span className="mt-4">만드는 사람들</span></h2>
                <p className="mt-8 mb-2">우리는 멈춰있지 않고,</p>
                <p>늘 어떤 형태로든 행동하고 실행합니다.</p>
            </div>
            <div className="w-full md:w-[70%] h-auto ">
                <article className='relative rounded-2xl overflow-hidden'>
                    <video src={`${process.env.PUBLIC_URL}/video/main.mp4`}
                        autoPlay
                        muted
                        playsInline
                        className = "w-full h-full object-cover"
                        preload = "auto"
                        loop='true'
                    />
                    <button className='absolute'>
                    </button>
                </article>
            </div>
        </section>
    )
}

export default AudioSection;
