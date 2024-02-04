import Image from "next/image";
import PopUpMenu from "./PopupMenu";
import Logo from "@/public/images/logo.png";
import Flag from "@/public/icons/flag.svg";

const Header = () => {
  return (
    <div className="pt-5 sticky top-0 bg-mypink z-10">
      <div className="flex items-center justify-between gap-5">
        <Image src={Logo} alt="logo" className="w-16" />
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-5">
            <div className="flex items-center gap-1 cursor-pointer">
              <p className="font-semibold">Presentation</p>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <p className="btn bg-mypink text-myblack">Login</p>
            <p className="btn">Free Trial</p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <Image src={Flag} alt="" className="w-7" />
            <p className="font-semibold">EN</p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="block sm:hidden">
            <PopUpMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
