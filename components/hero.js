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
            <div className="md:w-1/2 w-full py-6 md:p-6">
                <h1 className="text-3xl w-full font-bold p-3">All your files in one secure location, accessible anywhere.</h1>
                <p className="lg:w-full text-md p-3">
                    Fylo stores your most important files in one secure location. 
                    Access them wherever you need, share and collaborate with friends, 
                    family, and co-workers.
                </p>
                <div className="w-full block md:flex md:gap-3 md:justify-start justify-center md:pl-3 pt-6 md:pt-0">
                    <div className="md:w-2/3">
                        <EmailSignupForm />
                    </div>
                    <div className="md:w-1/3">
                        <GetStartedButton />
                    </div>
                </div>
            </div>
        </div>
    )
}