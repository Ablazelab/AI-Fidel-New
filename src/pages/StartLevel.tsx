// import { createRef, useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import BackButton from '../components/BackButton';
// import LinkwithQuery from '../components/LinkwithQuery';
// import { levels } from '../utils/amharicindex';

// function StartLevel() {
//   const [isMouseOver, setIsMouseOver] = useState(false);
//   const buttonRef = createRef<HTMLAnchorElement>();
//   useEffect(() => {
//     const mouseEnterHandler = async (e: MouseEvent) => {
//       setIsMouseOver(true);
//     };
//     const mouseLeaveHandler = async (e: MouseEvent) => {
//       setIsMouseOver(false);
//     };
//     buttonRef.current?.addEventListener('mouseenter', mouseEnterHandler);
//     buttonRef.current?.addEventListener('mouseleave', mouseLeaveHandler);

//     return () => {
//       buttonRef.current?.removeEventListener('mouseenter', mouseEnterHandler);
//       buttonRef.current?.removeEventListener('mouseleave', mouseLeaveHandler);
//     };
//   }, []);

//   const searchParams = useSearchParams();
//   const level = Number(searchParams[0].get('level'));
//   return (
//     <div
//       className={`flex flex-col h-[100vh] bg-[#ffe090]
//     ${
//       isMouseOver
//         ? "bg-[url('/turn.png')]"
//         : "bg-[url('/selectlevel1.png')] hover:bg-[url('/turnon.png')]"
//     }
//     bg-top   bg-no-repeat bg-center items-center justify-center gap-10`}
//     >
//       <BackButton
//         url={`/select-level?hand=${searchParams[0].get(
//           'hand'
//         )}&lang=${searchParams[0].get('lang')}`}
//       />
//       <div className="circle  Top bg-[#ffebb8] w-[230px] h-[432px] rounded-tr-full rounded-br-full absolute inset-x-0"></div>
//       <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tl-full rounded-bl-full absolute right-0 "></div>

//       <h1 className="text-8xl text-[#683aff]">Level {level}</h1>
//       <h1 className="text-xl  text-[rgb(104,58,255)]">
//         እነዢን የአማርኛ ሆሄ ይማሩ{' '}
//         <span className="text-[#683aff] ml-5">
//           {levels[level - 1].join(' , ').toUpperCase()}
//         </span>
//       </h1>
//       <h1 className="text-xl text-[#683aff] text-center ">
//         ጨዋታዉ ሲጀምር ምስሉን ተመክተዉ <h2>እጆትን እንደ ምስሉ ያርጉ</h2>
//       </h1>
//       <div className="card">
//         <LinkwithQuery
//           query={''}
//           path={'/game'}
//           text={`Turn On Webcam`}
//           ref={buttonRef}
//         />
//       </div>
//     </div>
//   );
// }

// export default StartLevel;
import LinkwithQuery from '@/components/LinkwithQuery';
import pointhand from '@assets/images/pointinghand.png';
import { AiOutlineCamera } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
function StartLevel() {
  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col items-center gap-5">
        <button className="btn btn-accent rounded-md w-full flex justify-between">
          <div> </div>
          <p>ደረጃ 1</p>
          <MdKeyboardArrowDown size={20} />
        </button>
        <img className="object-contain w-40" src={pointhand} />
        <p className="">እነዚህን የአማርኛ ሆሄ ይማሩ</p>
        <div className="flex gap-2 md:gap-4 lg:gap-8">
          {['ሀ', 'ሰ', 'ነ', 'ነ', 'ኘ', 'የ', 'ተ'].map((letter, i) => {
            return (
              <p
                key={i}
                style={{
                  background: '#2E2E2E',
                  boxShadow: '0px 2px 26px rgba(0, 0, 0, 0.08)',
                  borderRadius: '6px'
                }}
                className="w-10 md:w-14 aspect-square flex items-center justify-center text-white text-2xl"
              >
                {letter}
              </p>
            );
          })}
        </div>
        <LinkwithQuery query={''} path={'/game'} ref={null}>
          <div></div>
          <p>Turn on Camera</p>
          <AiOutlineCamera size={20} color="white" />
        </LinkwithQuery>
      </div>
    </div>
  );
}
export default StartLevel;
