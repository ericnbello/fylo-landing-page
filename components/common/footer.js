import LogoWhite from "../images/LogoWhite";
import Instagram from "../icons/instagram";
import Twitter from "../icons/Twitter";
import Facebook from "../icons/Facebook";
import Phone from "../icons/Phone";
import Email from "../icons/Email";

export default function Footer () {
    return (
        <footer className="bg-[#070439] text-white px-5 py-20">
            <div className="block md:pl-20 pb-1 px-5">
                <LogoWhite />
            </div>
            <div className="md:flex md:pl-20 px-5">
                <div className="w-full md:w-1/4 py-6 md:py-6">
                    <ul className="">
                        <li className="pb-3"><Phone /> Phone: +1-543-123-4567</li>
                        <li><Email /> example@fylo.com</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 py-6 md:p-6">
                    <ul>
                        <li><a className="hover:text-[#585989]" href="#!">About Us</a></li>
                        <li><a className="hover:text-[#585989]" href="#!">Jobs</a></li>
                        <li><a className="hover:text-[#585989]" href="#!">Press</a></li>
                        <li><a className="hover:text-[#585989]" href="#!">Blog</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 py-6 md:p-6">
                    <ul>
                        <li><a className="hover:text-[#585989]" href="#!">Contact Us</a></li>
                        <li><a className="hover:text-[#585989]" href="#!">Terms</a></li>
                        <li><a className="hover:text-[#585989]" href="#!">Privacy</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 pt-6 md:p-6">
                    <ul className="flex justify-center px-3">
                        <li class="mr-6 py-1">
                            <a className="hover:text-[#585989]" href="#!"><Facebook /></a>
                        </li>
                        <li class="mr-6 py-1">
                            <a className="hover:text-[#585989]" href="#!"><Twitter /></a>
                        </li>
                        <li class="mr-6 py-1">
                            <a className="hover:text-[#585989]" href="#!"><Instagram /></a>
                        </li>
                    </ul>
                </div>
            </div>
      </footer>
    )
}