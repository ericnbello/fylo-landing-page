import Image from "next/image"
import EmailSignupForm from "./email-signup-form"
import GetStartedFreeButton from "./buttons/btn-get-started-free"

export default function SignupBanner() {
    return (
        <div className="md:flex md:justify-start items-center py-10 px-20 bg-[#585989] text-white">
            <div className="w-full text-center md:w-1/2 md:px-5 md:text-left">
                <h2 className="text-xl font-bold py-3">Get early access today</h2>
                <p className="py-3 text-sm">
                    It only takes a minute to sign up and our free starter tier is extremely generous. 
                    If you have any questions, our support team would be happy to help you.               
                </p>
            </div>
            <div className="w-full md:w-1/2 block py-6">
                <EmailSignupForm />
                <GetStartedFreeButton className="p-0"/>
            </div>
        </div>
    )
}