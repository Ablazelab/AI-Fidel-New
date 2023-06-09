import React from 'react';
import handshake from '@assets/images/handshake.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';
const socialMediaIcons = [AiOutlineInstagram, ImTwitter, GrFacebookOption];

function SelectHand() {
  const { search } = useLocation();
  return (
    <div className="flex gap-10 relative  h-[calc(100vh-64px)] flex-col w-full  items-center">
      <div className="absolute w-[14%] aspect-square top-40 left-7 rounded-full  bg-primary"></div>
      <div className="custom-glass flex w-[80%] pr-5 justify-between py-2 pt-10 ">
        <div className=""></div>
        <div className="w-10"></div>
        <div className="flex   gap-5 flex-col items-center">
          <h1 className="pan font-semibold text-5xl text-center [word-spacing:5px] w-3/4 text-white">
            Are you left or right handed?
          </h1>
          <img className="object-contain w-5/12 " src={handshake} />
          <div className="w-2/3 grow flex flex-col  font-light gap-3 text-sm text-white text-center leading-3">
            <p> Choose the hand you want to use for </p>
            <p>fingerspelling you should use your</p>
            <p>dominant hand</p>
            <p></p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {Array(1)
            .fill(0)
            .map((_, i) => (
              <div></div>
            ))}
          {socialMediaIcons.map((Icon, i) => {
            return <Icon key={i} size={25} color="white" />;
          })}
          {Array(1)
            .fill(0)
            .map((_, i) => (
              <div></div>
            ))}
        </div>
      </div>
      <div className="flex gap-10">
        {['Left', 'Right'].map((hand, i) => {
          return (
            <Link
              to={`/select-level${search}&hand=${hand.toLowerCase()}`}
              key={i}
              className={` capitalize px-20 btn-sm  py-5 font-bold flex items-center justify-center rounded-xl ${
                i == 0 ? 'btn-accent' : 'btn-primary'
              }`}
            >
              {hand}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SelectHand;
