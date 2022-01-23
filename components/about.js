import Image from "next/image";
import AboutImage from "./images/AboutImage";
import Arrow from "./icons/Arrow";
import Testimonial from "./testimonial-card"

export default function About() {
    return (
        <div className="w-screen">
            <div className="block pt-20 -my-2">
                <Image
                src="/bg-curve-desktop.svg" 
                width="2000"
                height="250" 
                />
            </div>
            <div className="md:flex md:text-left md:flex-row-reverse mx-auto md:p-20 p-5 bg-[#F8F8FE]">
                <div className="md:w-1/2 w-full p-6 md:flex-row-reverse">
                    <AboutImage />
                </div>
                <div className="md:w-1/2 w-full p-6">
                    <h2 className="md:text-3xl text-xl text-center md:text-left font-bold py-3">
                        Stay productive, wherever you are
                    </h2>
                    <p className="text-md py-3">
                        Never let location be an issue when accessing your files. Fylo has you 
                            covered for all of your file storage needs.
                    </p>
                    <p className="text-md">
                        Securely share files and folders with friends, family and colleagues for 
                        live collaboration. No email attachments required!
                    </p>
                    <div className="line">
                        <p className="py-10 text-center md:text-left items-center">
                            <a className="text-[#3c9f8f] hover:text-green-300 underline" href="#!">
                                See how Fylo works
                                <Arrow />
                            </a>
                        </p>
                    </div>
                    <div className="items-center p-6 md:p-0">
                        <Testimonial />
                    </div>
                </div>
            </div>
        </div>
    )
}