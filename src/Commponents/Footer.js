import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BadgeX, BadgePlus } from 'lucide-react';

function Footer(){
    const [ domestic, setDomestic ] = useState(false);
    const [ overseas, setOverseas ] = useState(false);

    return(
        <footer className='border-t w-full'>
            <div className="h-[300px] sm:h-[142px] sm:max-w-[1200px] min-w-[390px] mx-auto px-10 md:px-6 lg:px-4 mt-[42px]">
                <div className='flex flex-col-reverse items-center gap-[20px] justify-between sm:flex-row w-full h-[250px] sm:h-[100px]'>
                    <div className='flex flex-col w-[300px] h-[100px] justify-between items-center sm:items-start'>
                        <ul className='flex justify-between gap-[15px]'>
                            <li><a href="#">제휴제안</a></li>
                            <li><a href="#">기업윤리</a></li>
                            <li><a href="#" className='font-bold'>개인정보 처리방침</a></li>
                        </ul>
                        <p className='text-gray-400 font-bold'>&copy;NHN Crop. All rights reserved.</p>
                    </div>
                    <div className='flex flex-col w-[300px] h-[100px] justify-between items-center sm:items-end'>
                        <div className='flex flex-col w-[300px] h-[100px] justify-between items-center sm:items-end'>
                            <div className='flex'>
                                <div className="w-full sm:w-auto relative">
                                    <button onClick={()=> setDomestic(!domestic)}
                                        className="w-full sm:w-auto flex justify-between items-center px-4 py-2 sm:text-sm bg-white font-bold gap-[15px]"
                                        aria-expanded={domestic} type="button"
                                    ><p className='text-xl'>국내법인</p> {domestic ? (<img src={`${process.env.PUBLIC_URL}/images/plus.svg`} className='rotate-[135deg]' />) : (<img src={`${process.env.PUBLIC_URL}/images/plus.svg`} />)}
                                    </button>
                                    {domestic && (
                                        <div className="absolute z-20 bottom-[50px] h-[200px] overflow-auto mt-1 right-0 w-full sm:w-56 bg-white border border-gray-300 rounded-md shadow-lg text-xs sm:text-sm">
                                            <p className="cursor-default hover:bg-gray-200 px-4 py-2">NHN PAYCO</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN KCP</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN AD</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN ACE</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NAN COMMERCE</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN wetoo</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN Cloud</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN Dooray!</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN DATA</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN ENTERPRISE</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN Injeinc</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN Crossent</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN Academy</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN LINK</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN Bugs</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN comico KOREA</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN 여행박사</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">NHN EDU</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">위즈덤하우스</p>
                                            <p className="cursor-dafault hover:bg-gray-200 px-4 py-2">도플소프트</p>
                                        </div>    
                                    )
                                    }
                                </div>
                                <div className="w-full sm:w-auto relative">
                                    <button onClick={()=>setOverseas(!overseas)}
                                        className="w-full sm:w-auto flex justify-between items-center px-4 py-2 bg-white gap-[15px] font-bold"
                                        aria-expanded={overseas} type="button"
                                    ><p className='text-xl'>해외법인</p> {overseas ? (<img src={`${process.env.PUBLIC_URL}/images/plus.svg`} className='rotate-[135deg]' />) : (<img src={`${process.env.PUBLIC_URL}/images/plus.svg`} />)}
                                    </button>
                                    {overseas && (
                                        <div className="absolute z-20 bottom-[50px] h-[200px] overflow-auto mt-1 right-0 w-full sm:w-56 bg-white border border-gray-300 rounded-md shadow-lg text-xs sm:text-sm">
                                            <p className="cursor-default hover:bg-gray-200 px-4 py-2">NHN JAPAN</p>
                                            <p className="cursor-default hover:bg-gray-200 px-4 py-2">NHN PlayArt</p>
                                            <p className="cursor-default hover:bg-gray-200 px-4 py-2">NHN TECHORUS</p>
                                            <p className="cursor-default hover:bg-gray-200 px-4 py-2">NHN comico</p>
                                            <p className="cursor-default hover:bg-gray-200 px-4 py-2">NHN GLOBAL</p>
                                            <p className="cursor-default hover:bg-gray-200 px-4 py-2">IBT</p>
                                            <p className="cursor-default hover:bg-gray-200 px-4 py-2">IKONIC</p>
                                        </div>    
                                    )
                                    
                                    }
                                </div>
                            </div>
                            <ul className="flex w-[230px] h-[40px] gap-[20px]">
                                <li className="w-[40px] h-[40px] border rounded-full"><a href="#" className="w-[40px] h-[40px] flex justify-center items-center"><img src={`${process.env.PUBLIC_URL}/images/youtube.svg`} className="w-[20px] h-[20px] object-cover"/></a></li>
                                <li className="w-[40px] h-[40px] border rounded-full"><a href="#" className="w-[40px] h-[40px] flex justify-center items-center"><img src={`${process.env.PUBLIC_URL}/images/instagram.svg`}/></a></li>
                                <li className="w-[40px] h-[40px] border rounded-full"><a href="#" className="w-[40px] h-[40px] flex justify-center items-center"><img src={`${process.env.PUBLIC_URL}/images/linked.svg`}/></a></li>
                                <li className="w-[40px] h-[40px] border rounded-full"><a href="#" className="w-[40px] h-[40px] flex justify-center items-center"><img src={`${process.env.PUBLIC_URL}/images/meetup.svg`}/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
