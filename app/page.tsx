import Image from "next/image";
import KbItem from "./components/KbItem";
import Header from "@/app/components/Header";
import Chat from "@/public/images/chat.png";
import GirlPic from "@/public/images/girl.png";
import Profile from "@/public/images/profile.svg";
import Users from "@/public/images/users.svg";
import Star from "@/public/icons/star.svg";
import Kbicon1 from "@/public/icons/kbicon1.svg";
import Kbicon2 from "@/public/icons/kbicon2.svg";
import Kbicon3 from "@/public/icons/kbicon3.svg";
import Kbicon4 from "@/public/icons/kbicon4.svg";
import ArrowDown from "@/public/icons/arrowDown.svg";
import Tutor from "@/public/images/tutor.svg";
import SAIcon from "@/public/images/sa.svg";
import SOIcon from "@/public/images/so.svg";
import EmIcon from "@/public/images/em.svg";
import TryBridge from "@/public/images/trybridge.svg";
import Fb from "@/public/icons/fb.svg";
import Twitter from "@/public/icons/twitter.svg";
import Linkedin from "@/public/icons/linkedIn.svg";
import Instagram from "@/public/icons/instagram.svg";
import Logo from "@/public/images/logo.png";

const kbItems = [
  {
    id: 1,
    title: "Eliminate Current Problems",
    des: "Say goodbye to awkward bidding, bidding errors, and overturned boxes.Bridge Copilot ensures a hassle-free gaming experience.",
    icon: Kbicon1,
  },
  {
    id: 2,
    title: "Advanced Technology",
    des: "Individual touchscreen tablets, fixed supports, and wifi connection. Bridge has never been so modern and simple",
    icon: Kbicon2,
  },
  {
    id: 1,
    title: "Intelligent Auction Management",
    des: "Bridge Copilot intelligently manages the auction sequence, eliminating the constant need for arbitrage",
    icon: Kbicon3,
  },
  {
    id: 1,
    title: "Ready for the Future",
    des: "Replace outdated bridgmates with smart tablets. Bridge Copilot software can be updated to meet your evolving needs",
    icon: Kbicon4,
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <div className="text-center mt-28 relative">
        <div>
          <Image
            src={Star}
            alt=""
            className="absolute left-0 bottom-0 w-11 h-11"
          />
          <Image
            src={Star}
            alt=""
            className="absolute right-0 bottom-40 w-7 h-7"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-7xl font-bold !leading-snug">
          Discover the Future of Bridge <br className="hidden sm:block" /> with{" "}
          <p className="inline bg-purple-300">Bridge Copilot</p>
        </h1>
        <p className="text-xl sm:text-2xl mt-10 w-full sm:w-9/12 mx-auto">
          Bridge Copilot revolutionizes the way you bid in bridge. No more
          cardboard boxes, welcome to a digital and hassle-free experience!
        </p>
        <button className="btn mt-10 w-full sm:w-auto">Free Trial</button>
      </div>
      <Image
        src={Chat}
        alt=""
        className="w-full rounded-xl mt-20 border-2 shadow-md"
      />
      <div className="mt-28">
        <div className="text-center">
          <p className="title">Key Benefits</p>
          <p className="des mt-5">Check some of our key benefits</p>
        </div>
        <div className="mt-20 flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-20 xl:gap-10">
          <div className="relative w-full sm:w-10/12 xl:w-7/12">
            <Image
              src={GirlPic}
              alt=""
              className="rounded-xl p-5 bg-white border-2 shadow-sm w-full"
            />
            <Image
              src={Profile}
              alt=""
              className="rounded-xl px-3 py-5 bg-white shadow-sm absolute -right-5 top-[45%] w-5/12"
            />
            <Image
              src={Users}
              alt=""
              className="rounded-xl px-10 py-3 bg-white shadow-sm absolute -bottom-10 left-16 w-6/12"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {kbItems.map((el) => (
              <div key={el.id}>
                <KbItem title={el.title} des={el.des} icon={el.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-28 flex flex-wrap md:flex-nowrap items-center justify-between gap-10">
        <div className="space-y-8">
          <p className="text-5xl font-bold">Main Features</p>
          <p className="text-lg font-semibold opacity-90">
            Lorem ipsum dolor sit amet consectetur. Ac porttitor malesuada
            pellentesque volutpat nisl. Eu imperdiet quam sem sed ut nisi
            pellentesque feugiat.
          </p>
          <Image src={ArrowDown} alt="" className="w-14" />
        </div>
        <Image src={Tutor} alt="" />
      </div>
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-10">
        <div className="bg-white rounded-lg shadow">
          <Image src={SAIcon} alt="" className="w-full" />
          <div className="px-12 -mt-5">
            <p className="text-2xl font-bold">Simplified Auctions</p>
            <p className="opacity-90 mt-4 mb-8">
              {`Place your bids with just a tap on your tablet's touchscreen. The
            server handles everything for you.`}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          <Image src={SOIcon} alt="" className="w-full" />
          <div className="px-12 -mt-5">
            <p className="text-2xl font-bold">Simplified Auctions</p>
            <p className="opacity-90 mt-4 mb-8">
              {`Place your bids with just a tap on your tablet's touchscreen. The
            server handles everything for you.`}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          <Image src={EmIcon} alt="" className="w-full" />
          <div className="px-12 -mt-5">
            <p className="text-2xl font-bold">Simplified Auctions</p>
            <p className="opacity-90 mt-4 mb-8">
              {`Place your bids with just a tap on your tablet's touchscreen. The
            server handles everything for you.`}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-28 relative rounded-md h-[400px] flex justify-center items-center bg-[#FDF4E6]">
        <Image src={TryBridge} alt="" className="absolute w-full" />
        <div className="relative text-center px-5 space-y-6">
          <p className="text-2xl sm:text-5xl font-bold">
            Try Bridge Copilot Today!
          </p>
          <p className="text-xl font-medium">
            Book your free trial now and transform your bridge experience.
          </p>
          <p className="text-[#FFB62B] text-xl sm:text-3xl font-semibold">
            Need help? Contact our support team
          </p>
          <button className="btn">Contact Us</button>
        </div>
      </div>
      <hr className="my-28" />
      <footer>
        <div className="bg-white flex flex-wrap lg:flex-nowrap gap-10 items-center justify-between p-5 sm:p-16">
          <div>
            <p className="text-4xl font-bold ">Reserve Your Copilot</p>
            <p className="text-3xl font-medium mt-2">
              Discover our flexible subscription plans
            </p>
            <div className="mt-10 flex items-center flex-wrap sm:flex-nowrap gap-2">
              <input
                type="rounded"
                className="outline-0 border border-myblack w-full rounded sm:rounded-l h-11 p-2"
                placeholder="Email address"
              />
              <button className="btn w-full sm:w-32 rounded sm:rounded-l ml-0 sm:-ml-1">
                Free Try
              </button>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold">Social connections</p>
            <p className="font-medium mt-4">
              Connect with us on social media for the latest updates
            </p>
            <div className="flex flex-wrap sm:flex-nowrap mt-7">
              <Image src={Fb} alt="" />
              <Image src={Twitter} alt="" />
              <Image src={Linkedin} alt="" />
              <Image src={Instagram} alt="" />
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-between gap-5 flex-wrap my-8 items-center">
        <Image src={Logo} className="w-14" alt="" />
        <p className="font-medium">
          Bridge Copilot offers an unrivaled bridge experience. Modernize your
          game today!
        </p>
      </div>
    </div>
  );
};

export default Home;
