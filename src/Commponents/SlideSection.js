import { CircleArrowRight } from 'lucide-react';
import { useState } from 'react';

const cardList = [
    {
        image:`${process.env.PUBLIC_URL}/images/playBanner001.png`,
        title:'누구나 연결되는 새로운 즒거움',
        subtitle:'Game ',
        links:[
            {name:'한게임포커 PC&MOB'},
            {name:'한게임 포커'},
            {name:'한게임 더블에이 포커'},
            {name:'한게임 섯다&맞고'},
            {name:'한게임 고스톱'},
            {name:'한게임 바둑&오목'},
            {name:'한게임 장기'},
            {name:'LINE:디즈니 츠무츠무'},
            {name:'요괴워치 뿌니뿌니'},
            {name:'라인팝2'},
            {name:'프렌즈팝'},
            {name:'우파루 오딧세이'},
            {name:'#콤파스'},
            {name:'건즈업!모바일 '},
            {name:'한게임'}
        ]
    },
    {   
        image:`${process.env.PUBLIC_URL}/images/playBanner002.png`,
        title:'생활 속 어디서나 쉽고 편리하게',
        subtitle:'Payment Ad',
        links:[
            {name:'PAYCO'},
            {name:'NHN KCP'},
            {name:'openads'},
            {name:'ACE eXchange'}
        ]
    },
    {   
        image:`${process.env.PUBLIC_URL}/images/playBanner003.png`,
        title:'더 넓은 세상으로의 연결',
        subtitle:'Commerce',
        links:[
            {name:'godomall'},
            {name:'shop by'},
            {name:'가방팝'},
            {name:'Residenza 725'}
        ]
    },
    {
        image:`${process.env.PUBLIC_URL}/images/playBanner004.png`,
        title:'유연한 기술력으로 연결된 안전한 비즈니스',
        subtitle:'Technology',
        links:[
            {name:'NHN Cloud'},
            {name:'Dooray!'},
            {name:'Dighty'}
        ]
    },
    {   
        image:`${process.env.PUBLIC_URL}/images/playBanner005.png`,
        title:'나를 위한 새로운 발견',
        subtitle:'Contents',
        links:[
            {name:'ticketlink'},
            {name:'Bugs'},
            {name:'comico & pocket comics'},
            {name:'여행박사'},
            {name:'iam School'},
            {name:'핑크다이어리'},
            {name:'지하철종결자'}
        ]
    }
]

function SlideSection(){

    const [ activeIndex, setActiveIndex ] = useState(0);
    const getTranslateX = () =>{
        const activeWidth = 1200;
        const inactiveWidth = 224;
        const gap = 10;
        let totalWidthBeforActive = 0;
        for( let i=0; i<activeIndex; i++ ){
            totalWidthBeforActive += inactiveWidth + gap;
        }
        const activeBoxCenter = totalWidthBeforActive + activeWidth / 2;
        const viewportCenter = window.innerWidth / 2;
        return viewportCenter - activeBoxCenter;
    }
    const containerStyle = {
        width: '100vw',
        height: '526px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
    };

    const boxContainerStyle = {
        display: 'flex',
        transition: 'transform 0.5s ease-out',
        gap: '10px',
        transform: `translateX(${getTranslateX()}px)`
    };


    const getBoxStyle = (index) => ({
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.5s ease-in-out',
        fontWeight: 'bold',
        fontSize: '18px',
        height: '526px',
        position:'relative',
        width: activeIndex === index ? '1200px' : '224px',
    });

    const innerbox = (index) => ({
        transition: 'all 0.5s ease-in-out',
        display: activeIndex === index ? 'block' : 'none',
    });

    const imgstyle = {
        postion:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        objectFit:'cover',
        borderRadius:'12px'
    }

    const topInner ={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'10px'
    }

    const imgIcon = {
        width:'35px',
        height:'35px'
    }

    return(
        <section className="slide-section mt-10 mb-[100px] sm:mb-[200px]">
            <div className="top min-w-[390px] md:w-[1200px] mx-auto px-10 md:px-6 lg:px-0">
                <h2 className="text-3xl lg:text-5xl font-bold mb-10">Weaving New Play. NHN</h2>
                <p className="text-lg lg:text-[20px] mb-20">상상과 현실, 기술과 삶, 사람과 사람을 연결합니다.</p>
            </div>
            <section style={containerStyle}>
                <div style={boxContainerStyle} className='weaving-box'>
                    {
                    cardList.map((card,idx)=>(
                        <div key={idx} style={getBoxStyle(idx)} onClick={() => setActiveIndex(idx)}>
                            <img src={card.image} alt={card.title} style={imgstyle}/>
                            <div className='img-innerbox' style={innerbox(idx)} onClick={()=>setActiveIndex(idx)}>
                                <div className='top'>
                                    <h3>{card.title}</h3>
                                    <div className='top-inner' style={topInner}>
                                        <p>{card.subtitle}</p>
                                        <p><CircleArrowRight className='img-icon' style={imgIcon}/></p>
                                    </div>    
                                </div>
                                <div className='link-box'>
                                    {
                                        card.links.map((link,index)=>(
                                            <a href='#' key={link}>{link.name}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </section>
        </section>
    )
}
export default SlideSection;
