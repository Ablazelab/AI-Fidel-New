import profile from '@assets/images/avatar/avatar.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { MdLock } from 'react-icons/md';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
const socialMediaIcons = [AiOutlineInstagram, GrFacebookOption, ImTwitter];

function SelectLevel() {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  return (
    <div className="flex  flex-col gap-10">
      <div className="custom-glass smrounded  flex justify-between px-3 pl-10 py-5">
        <div className="flex  prose flex-col items-start ">
          <div className="leading-none bg-transparent">
            <h1 className="md:text-4xl text-white m-1">Start learning </h1>
            <h1 className="leading-none text-4xl m-1 text-white">Your</h1>
            <h1 className="text-white text-4xl m-1 mb-6">Language</h1>
          </div>
          <div className="w-8/12">
            <button className="capitalize btn btn-primary w-full rounded-lg btn-md py-0 ">
              ተመዝገብ{' '}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="rounded-full w-32 h-32 aspect-square p-4"
            style={{
              background: '#2E2E2E',
              boxShadow: '0px 0px 20px 4px #FFAF52'
            }}
          >
            <img src={profile} className="object-contain rounded-full" />
          </div>
          <div className="flex mr-5 self-stretch flex-col justify-between">
            {socialMediaIcons.map((Icon, i) => {
              return <Icon key={i} size={20} color="white" />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        {buildLevelButtons(searchParams)}
      </div>
    </div>
  );
}

function buildLevelButtons(searchParams: URLSearchParams) {
  return (
    <>
      {[1, 2, 3, 4].map((i) => {
        // 013201076808100
        return (
          <Link
            //TODO if it is game mod  e go to game
            // TODO if there is no previous session deactivate the resume button
            to="/welcome"
            key={i}
            className="btn btn-primary rounded-md flex justify-between px-5"
          >
            <div></div>
            <p className="text-white ">ደረጃ {i}</p>
            <MdLock fontSize={20} color="white" />
          </Link>
        );
      })}
    </>
  );
}
export default SelectLevel;
