import { ArrowUpRight, Triangle,ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import React from 'react';

const today = function(){
    const now = new Date();
    const options = { timeZone:'Asia/Seoul', hour12:true };
    return now.toLocaleDateString('ko-KR', options);
}

function NhnSection(){
    
    const [ currentIndex, setCurrentIndex ] =useState(0);
    const totalNotice = 3; 

    const [ currentList, setCurrentList ] =useState(0);
    const totalList = 2;

    useEffect(()=>{
        const intervalNotice = setInterval(()=>{
            setCurrentIndex(prev=>(prev+1)%totalNotice)
        },4000)
        return()=> clearInterval(intervalNotice)
    },[])

    useEffect(()=>{
        const intevalList = setInterval(()=>{
            setCurrentList(prev=>(prev+1)%totalList)
        },4000)
    },[])

    return(
        <section className="nhn-section max-w-[1200px] min-w-[390px] mx-auto h-[610px] px-10 md:px-6 lg:px-4 mt-10 sm:h-[176px] mb-[200px]">
            <div className="section-box min-w-[390px] mx-auto h-[610px] sm:w-full sm:h-[176px] grid gird-cols-1 sm:grid-cols-3 sm:flex md:justify-between sm:gap-10">
                <div className="press-box w-[310px] sm:w-[40%] h-[176px] flex flex-col justify-between mb-10 sm:mb-0">
                    <h2 className="text-lg font-bold">보도자료</h2>
                    <div className="notice-wrap">
                        <ul className="list-box text-gray-500 flex flex-col gap-[10px]" style={{ display:currentIndex===0 ? 'block' : 'none' }}>
                            <li className='mb-[5px]'><a href='#'>NHN, 모바일 웹보드게임 ‘한게임 싱글 맞고’ 출시…데이터 없어도 플레이 가능</a></li>
                            <li className='mb-[5px]'><a href='#'>NHN, "‘어쩌면 해피엔딩’ 토니상 수상 축하...잠재력 있는 국내 공연 발굴 및 글로벌 진출 지원 이어갈 것"</a></li>
                            <li><a href='#'>NHN 클라우드, 25년 공공 클라우드 네이티브 전환 사업 7개 중 5개 기관 진행… "공공 시장 선도 지속"</a></li>
                        </ul>
                        <ul className="list-box text-gray-500" style={{ display:currentIndex===1 ? 'block' : 'none' }}>
                            <li className='mb-[5px]'><a href='#'>NHN페이코, 신전떡볶이에 멤버십·오더 솔루션 제공…운영 효율성 높여</a></li>
                            <li className='mb-[5px]'><a href='#'>설립 10년차 맞은 NHN 장애인 표준사업장 ‘굿프렌즈’…”사업 확대 지속 모색”</a></li>
                            <li><a href='#'>NHN, 판교사옥 가족초청 행사 ‘위패밀리’ 개최 … 2,500여 임직원 가족 참여</a></li>
                        </ul>
                        <ul className="list-box text-gray-500" style={{ display:currentIndex===2 ? 'block' : 'none' }}>
                            <li className='mb-[5px]'><a href='#'>NHN두레이, 국내 협업툴 최초 금융보안원 CSP 안전성, SaaS 제공자 평가 완료</a></li>
                            <li className='mb-[5px]'><a href='#'>NHN, ‘다키스트 데이즈’ 스팀 ‘좀비 대 뱀파이어 게임 축제’ 참가</a></li>
                            <li><a href='#'>NHN커머스, 쇼핑몰 첫걸음 함께하는 '1:1 전담 서비스' 정식 오픈</a></li>
                        </ul>
                    </div>
                    <div className="flex">
                        <a href="#" className="mr-2 text-md font-bold">더 보기</a>
                        <ArrowRight className="text-md font-bold"/>
                    </div>
                </div>
                <div className="posting-box w-[310px] sm:w-[30%] h-[176px] flex flex-col justify-between mb-10 sm:mb-0">
                    <h2 className="text-lg font-bold">채용공고</h2>
                    <div className="flex flex-col text-gray-500">
                        <ul className='list-box text-gray-500' style={{ display:currentList===0 ? 'block' : 'none' }}>
                            <li className='mb-[5px]'><a href='#'>Game AI 연구 및 서비스 개발</a></li>
                            <li className='mb-[5px]'><a href='#'>시스템 엔지니어링</a></li>
                            <li><a href='#'>두레이 모바일 서비스 iOS 개발</a></li>
                        </ul>
                        <ul className='list-box text-gray-500' style={{ display:currentList===1 ? 'block' : 'none' }}>
                            <li className='mb-[5px]'><a href='#'>IT/클라우드 사업 홍보</a></li>
                            <li className='mb-[5px]'><a href='#'>Spring 기반 웹 서비스 백엔드 개발</a></li>
                            <li><a href='#'>게임플랫폼 Unity 개발</a></li>
                        </ul>
                        
                    </div>
                    <div className="flex">
                        <a href="#" className="mr-2 text-md font-bold">더 보기</a>
                        <ArrowUpRight className="text-md font-bold"/>
                    </div>
                </div>
                <div className="w-[310px] sm:w-[30%] h-[176px] flex flex-col justify-between">
                    <h2 className="text-lg font-bold">주가정보</h2>
                    <div className="flex items-center">
                        <strong className="text-4xl font-bold mr-10">28,900</strong>
                        <div className="flex gap-[5px]">
                            <span className="font-bold">1650</span>
                            <img src={`${process.env.PUBLIC_URL}/images/arrow_red2.png`} alt='arrow-red' className="w-[15px] h-auto object-contain"/>
                        </div>
                    </div>
                    <p className="text-lg font-bold text-gray-500 mb-6">KRX {today()}</p>
                    <a href="#" className="text-md font-bold flex">더 보기<ArrowRight className="ml-2"/></a>
                </div>
            </div>

        </section>
    )
}

export default NhnSection;
