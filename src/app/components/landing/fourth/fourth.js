import Box from '../../box/box';
import { headerFont, subHeaderFont } from '../../font/font';

const boxes = [
  {
    title: '벨트 컨베이어',
    subTitle: '벨트 컨베이어는 음식물 생산 포장, 육류 이송, 튜브 이송 등 다양한 산업 분야에서 효과적으로 사용됩니다.',
    link: '/products?products=belt-conveyor',
  },
  {
    title: '롤러 컨베이어',
    subTitle: '롤러 컨베이어는 트레이 이송, 창고 박스 이송, 판재 절단 이송 등 다양한 산업 분야에서 효과적으로 사용됩니다.',
    link: '/products?products=roller-conveyor',
  },
  {
    title: '매쉬 컨베이어',
    subTitle: '매쉬 컨베이어는 과일, 채소 세척 라인, 이물질 제거 등 다양한 산업 분야에서 효과적으로 사용됩니다.',
    link: '/products?products=mash-conveyor',
  },
  {
    title: '체인 컨베이어',
    subTitle: '체인 컨베이어는 파레트 이송, 기계 부품 운반, 사료 및 곡물 이송 라인 등 다양한 산업 분야에서 효과적으로 사용됩니다.',
    link: '/products?products=chain-conveyor',
  },
  {
    title: '효율적인 컨베이어 제작',
    subTitle: '컨베이어는 운반물에 따라서 효율적으로 제작됩니다. 어떤 컨베이어를 제작할 지 모르신다면 해당 페이지를 확인하세요.',
    link: '/products?products=how-to-pick-conveyor',
  },
];

export default function FourthLanding() {
  return (
    <>
      <div id="products" className="bg-card-section py-20 md:py-12">
        <div className='flex flex-col	items-center max-w-xs md:max-w-3xl 2xl:max-w-7xl mx-auto'>
          <div className="text-center my-8 md:my-9 md:w-[623px] 2xl:my-20 2xl:w-[1033px]">
            <div className={[headerFont.className, 'text-sm', 'md:text-2xl', '2xl:text-4xl', 'mb-4'].join(' ')}>우리가 제공하는 모든 제품을 확인하세요</div>
            <div className={[subHeaderFont.className, 'text-[9px]', 'md:text-[10px]', '2xl:text-base'].join(' ')}>
              레드컨베이어는 고객들의 운반물의 종류, 크기, 무게, 속도 등의 다양한 요구사항을 전문적으로 고려하여 정확하고 최적화된 솔루션을 제공해드립니다. 각 산업 분야와 작업 환경에 맞춰 최적의
              컨베이어 시스템을 설계하고 제조하여 고객들의 생산성을 향상시키고 비용 효율성을 극대화하는데 주력합니다.
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-y-3.5 md:gap-y-9">
            {boxes.map((box, i) => {
              return <Box key={i} title={box.title} subTitle={box.subTitle} link={box.link} />;
            })}
          </div>
        </div>

      </div>
    </>
  );
}
