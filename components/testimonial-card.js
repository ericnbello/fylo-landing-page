import Quotes from "./icons/Quotes"
import Image from "next/image"

export default function Testimonial() {
    return (
        <div className="md:items-start max-w-sm bg-white rounded-md shadow-md">
            <div className="md:flex">
                <div className="p-8">
                    <Quotes /> 
                    <p className="mt-2 pb-5 text-slate-900">
                        Fylo has improved our team productivity by an order of magnitude. Since making 
                        the switch our team has become a well-oiled collaboration machine.                    
                    </p>
                    <div className="flex items-center">
                        <Image src="/avatar-testimonial.jpg"
                            width="40"
                            height="40"
                            className="rounded-full"
                        />
                        <div className="block px-2">
                            <p className="font-bold text-sm">Kyle Burton</p>
                            <p className="text-xs">Founder &#38; CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}