import { Globe, Sidebar } from 'lucide-react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const headerMenu = [
    {
        title:'회사소개',
        links:[
            {name:'회사소개'},
            {name:'국내법인'},
            {name:'해외법인'},
            {name:'브랜드'}
        ]
    },
    {
        title:'서비스',
        links:[
            {name:'게임'},
            {name:'결제.광고'},
            {name:'커머스'},
            {name:'기술'},
            {name:'콘텐츠'}
        ]
    },
    {
        title:'홍보',
        links:[
            {name:'보도자료'}
        ]
    },
    {
        title:'투자정보',
        links:[
            {name:'공시정보'},
            {name:'주가정보'},
            {name:'재무제표'},
            {name:'IR 행사'},
            {name:'일반공고'}
        ]
    },
    {
        title:'ESG',
        links:[
            {name:'ESG경영'},
            {name:'환경'},
            {name:'사회'},
            {name:'지배구조'},
            {name:'기업윤리'},
            {name:'보고서.정책'}
        ]
    },
    {
        title:'CAREERS',
        links:[
            {name:' '}
        ]
    },
    {
        title:'INSIDE NHN',
        links:[
            {name:' '}
        ]
    }
]
function MainHeader(){
    const [ activeMenu, setActiveMenu ] = useState(null);
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ isToggled, setIsToggled ] = useState(false);
    const [ show, setShow ] = useState(false);

    const toggleMenu=()=>{
        setShow((prevShow)=>!prevShow);
    }
    const handleMenuHover = (menu) => {
        setActiveMenu(menu);
        setIsMenuOpen(true);
    }
    const handleMenuLeave = () => {
        setActiveMenu(null);
        setIsMenuOpen(false);
    }
    

    return(
        <header className={`transition duration-200 ease-in-out `} >
            <div className={`main-header transition-colors duration-200`}>
                <h1><a href='#' className={`${show ? 'text-gray-800' : 'text-white'} lg:${isMenuOpen ? 'text-gray-800' : 'text-white' }`} onToggleMenu={toggleMenu} show={show} onMouseEnter={()=> setIsMenuOpen()} >NHN</a></h1>
                <nav className={`navbar ${isToggled ? 'flex' : 'none'}`} onMouseLeave={handleMenuLeave} isToggled={isToggled} >
                    <ul>
                        {
                            headerMenu.map((list,index)=>(
                                <li key={index}
                                    onMouseEnter={()=>handleMenuHover(list)}
                                    className={`${isMenuOpen ? 'text-gray-800' : 'text-white'}`}
                                >
                                    <a href='#'>{list.title}</a>
                                    <ul className={`transform transition-all duration-300 ease-in-out z-[1000] h-[240px]
                                        ${ isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'} `}
                                        onMouseEnter={()=> setIsMenuOpen(true)}
                                    >
                                        {
                                            list.links.map((sublist,index)=>(
                                                <li key={sublist}
                                                    className={`text-gray-700 h-[40px] `}
                                                    
                                                >
                                                    <a href='#' className='h-[40px] hover:underline hover:font-bold'>{sublist.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Globe className='globe'/>
                <div className='toggle' >
                    <button className='toggle-btn' onClick={()=>toggleMenu()}>
                        <FontAwesomeIcon icon={!show ? faBars : faTimes} className={`toggle-icon ${show ? 'text-gray-800' : 'text-white'}`}/>
                    </button>
                    {
                        show && (
                            <>
                                <nav className='toggle-nav'>
                                    <ul>
                                        {
                                            headerMenu.map((list,index)=>(
                                                <li key={index} className='toggle-list'>
                                                    <a href='#'>{list.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                                <div className='toggle-bg'></div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className={`sub-bg transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}></div>
            {/* <div className={`toggle-bg ${show ? 'block' : 'none'}`} show={show}></div> */}
        </header>
    )
}
export default MainHeader;