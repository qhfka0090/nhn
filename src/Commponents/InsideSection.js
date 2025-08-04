import { CircleArrowRight } from 'lucide-react';

const items = [
    {id:1, title:'사람&문화',subtitle:'WE! FAMILY 한 지붕 아래, 온 가족이 함께!', src:`${process.env.PUBLIC_URL}/images/202506161730031.webp`,},
    {id:2, title:'서비스',subtitle:'안심할 수 있는 보안 환경을 만드는 보안 파트 김수민', src:`${process.env.PUBLIC_URL}/images/202505301455021.webp`,},
    {id:3, title:'기업',subtitle:'장애인 고용 10년, NHN ‘굿프렌즈’의 따뜻한 동행', src:`${process.env.PUBLIC_URL}/images/202506111020171.webp`,}
]

function InsideSection(){

    return(
        <section className="max-w-[1200px] min-w-[390px] mx-auto h-[1188px] px-10 md:px-6 lg:px-4 mt-10 sm:h-[452px] mb-[140px]">
            <div className='flex flex-col jusity-center items-center mb-[58px]'>
                <div className='flex mb-2'>
                    <h2 className='text-lg md:text-5xl font-bold mr-4 mb-2'>NHN의 사람, 기술, 문화이야기</h2>
                    <CircleArrowRight className='w-[30px] h-[30px] md:w-[48px] md:h-[48px]'/>
                </div>
                <p className='text-md md:text-xl text-gray-600'>공식 뉴스룸 'INSIDE NHN'에서 만나보세요.</p>
            </div>
            <div className="min-w-[310px] mx-auto h-[1050px] sm:w-full md:h-[310px] grid gird-cols-1 sm:grid-cols-3 sm:flex sm:justify-between sm:gap-10">
                {
                    items.map(({id, title, subtitle, src})=>(
                        <article key={id} className='w-full h-[350px] md:h-[310px] relative'>
                            <a href="#" className="w-full h-[350px] md:h-[310px]">
                                <img src={src} alt={title} className='absolute top-0 left-0 w-full h-60 object-cover transition-all duration-300 rounded-xl hover:top-[-20px]' />
                                <div className="absolute left-0 top-60">
                                    <h3 className='text-lg font-bold text-gray-500 mt-2 mb-2 w-full'>{title}</h3>
                                    <p className='font-bold w-full'>{subtitle}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default InsideSection;
