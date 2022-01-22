import Image from "next/image"
import EmailSignupForm from "./email-signup-form"
import GetStartedButton from "./buttons/btn-get-started"
import HeroImage from "./images/HeroImage"

export default function Hero () {
    return (
        <div className="md:flex md:text-left md:flex-row-reverse mx-auto md:p-20 p-10 text-center bg-white">
            <div className="md:w-1/2 w-full md:flex">
                <HeroImage />  
            </div>
            <div className="md:w-1/2 w-full p-6">
                <h1 className="text-3xl w-full font-bold p-3">All your files in one secure location, accessible anywhere.</h1>
                <p className="lg:w-full text-md p-3">
                    Fylo stores your most important files in one secure location. 
                    Access them wherever you need, share and collaborate with friends, 
                    family, and co-workers.
                </p>
                <div className="w-full inline-flex lg:justify-start sm:justify-center p-6">
                    <EmailSignupForm className="w-screen" />
                    <GetStartedButton />
                </div>
            </div>
        </div>
    )
}