import Image from "next/image";
import AboutImage from "./images/AboutImage";
import Arrow from "./icons/Arrow";
import Quotes from "./icons/Quotes"

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
            <div className="md:flex md:text-left md:flex-row-reverse mx-auto md:p-20 p-10 bg-[#F8F8FE]">
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
                    <p>
                        <a className="text-[#3c9f8f] underline" href="#!">See how Fylo works<Arrow /></a>
                    </p>
                    <div className="md:items-start max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden p-5">
                        <div className="md:flex">
                            <div className="p-8">
                                <Quotes /> 
                                <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                                <p>-Tim </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}