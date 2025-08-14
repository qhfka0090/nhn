import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, CircleArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const videos = [
    {
        number:'01',
        src:`${process.env.PUBLIC_URL}/video/mainBanner01.mp4`,
        title:'회사소개',
        subtitle:'우리의 연결로',
        secondtitle:'만드는 새로운 내일'
    },
    {
        number:'02',
        src:`${process.env.PUBLIC_URL}/video/mainBanner02.mp4`,
        title:'ESG',
        subtitle:'함께 성장하며',
        secondtitle:'지속가능한 미래를 만듭니다.'
    },
    { 
        number:'03',
        src:`${process.env.PUBLIC_URL}/video/mainBanner03.mp4`,
        title:'CAREERS',
        subtitle:'더 나은 세상을 만들어갈',
        secondtitle:'Next Player를 찾습니다.'
    },
]

function MainSlider(){
    const swiperRef = useRef(null);
    const videoRefs = useRef([]);
    const playPromises = useRef({});
    const [ isPlaying, setIsPlaying ] = useState(true);
    const [ activeIndex, setActiveIndex ] =useState(0);
    const [ played, setPlayed ] = useState(0);
    const [ ready, setReady ] = useState(false);

    const onSlideChange = async(swiper) => {
        setActiveIndex(swiper.realIndex);
        await Promise.all(
            videoRefs.current.map(async (video, index)=>{
                if(video && playPromises.current[index]){
                    try{
                        await playPromises.current[index];
                    } catch (error) {

                    }
                }
                if(video){
                    video.pause();
                    video.currentTime = 0;
                }
            })
        );
        const currentVideo = videoRefs.current[swiper.realIndex];
            if( currentVideo && isPlaying ){
            try {
                const playPromise = currentVideo.play();
                playPromises.current[swiper.realIndex] = playPromise;
                await playPromise;
                delete playPromises.current[swiper.realIndex];
            } catch (error) {
                if( error.name !== 'AbortError'){ 
                console.error('비디오 재생 중 오류발생 :', error);
                }
            }
        }
    }

    useEffect(()=>{
        if(videoRefs.current[0]){
            const playPromise = videoRefs.current[0]?.play();
            if(playPromise){
                playPromises.current[0] = playPromise;
                playPromise.then(() => {
                  delete playPromises.current[0];
                }).catch((error) => {
                  if( error.name !== 'AbortError'){ 
                    console.error('첫 번째 비디오 재생 오류:', error);
                  }
                });
              }
            }
    },[])

/*     const progressLine = document.querySelector('.autoplay-progress svg')
    const mainSwiper = new Swiper('.main-swiper',{
      loop:true,
      sutoplay:{
        delay:2500,
        disableOnInteraction:false,
      },
      pagination:{
        el: '.main-swiper .swiper-pagination',
        clickable:false,
        type:'custom',
        renderCustom:function(swiper, current, total){
          return (
            '<span class="current">' + 0 + (current) + '</span>' + '<span class="total">' + 0 + (total) + '</span>'
          );
        }
      },
      on:{
        autoplayTimeLeft(s, time, progress){
          progressLine.computedStyleMap.setProperty('--progress',1 - progress)
        }
      }
    }) */
    return(
        <section className="main-sliderelative w-full h-[800px] overflow-hidden">
          <Swiper
          modules = {[Autoplay, Navigation, Pagination]}
          onSwiper = {(swiper)=>{  swiperRef.current = swiper;  }}
          loop = {true}
          slidesPerView = {1}
          onSlideChange = {onSlideChange} // 슬라이드 변경시 실행함수 지정
          autoPlay = {{ delay:3000, disableOnInteraction:false }}
          navigation = {{ nextEl:".swiper-button-next", prevEl:".swiper-button-prev", }}
          pagination = {false}
        >
        {
          videos.map(({ number, src, title, subtitle, secondtitle }, idx) =>(
            <SwiperSlide key={idx}>
              <div className="relative w-full overflow-hidden">
                {/* video */}
                <video 
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={src}
                  muted
                  playsInline // 인라인 재생(모바일대응:ios재생시 전체화면 전환방지)
                  className = "w-full h-[800px] object-cover"
                  preload = "auto"
                  loop="auto"
                  onReady={()=>setReady(true)}
                />
                <div className="absolute top-[100px] left-0 w-full h-full text-white z-20 ">
                  <div className="relative max-w-[1360px] mx-auto h-full px-12 md:px-6 lg:px-8 flex flex-col justify-center items-start">
                    <h2 className="text-xl md:text-3xl font-bold mb-8 flex">
                      {title}
                      <a href="#">
                        <CircleArrowRight className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] ml-3"/>
                      </a>
                    </h2>
                    <p className="text-4xl md:text-6xl font-bold mb-5">{subtitle}</p>
                    <p className="text-4xl md:text-6xl font-bold">{secondtitle}</p>
                    <div className="slide-icon flex items-center gap-[20px] mt-40">
                      <p className="text-2xl font-bold">{number}</p>
                      <div className="progress-box relative w-[150px]">
{/*                     <div className="progressBar absolute top-0 bg-white h-[2px]"></div>
                        <div className="w-full top-0 bg-white opacity-40 h-[2px]"></div> */}
                        <div className="swiper-pagination"></div>
                        <div className="autoplay-progress">
                          <svg viewBox="0 0 100 10">
                            <line x1='0' y1='0' x2='100' y2='0' />
                          </svg>
                        </div>
                      </div>
                      <p className="text-2xl font-bold">03</p>
                      <div className="arrow flex" relative>
                        <button className="swiper-button-prev">
                          <ChevronLeft className="w-[30px] h-[30px]"/>
                        </button>
                        <button className="swiper-button-next">
                          <ChevronRight className="w-[30px] h-[30px]"/>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 검은색 반투명 배경 - abosolute inset-0(left,top,right,bottom:0) */}
                <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
    )
}

export default MainSlider;
