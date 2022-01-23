import Logo from "../images/Logo";

export default function Nav () {
    return (
        <nav className="flex justify-between p-6 bg-transparent">
            <div className="flex items-center text-black mr-5 md:pl-20">
                <Logo />
            </div>
            <div>
                <ul className="flex px-1 text-sm md:text-lg">
                    <li className="mr-5 py-6">
                        <a className="text-neutral-800 hover:text-[#585989]" href="#!">Features</a>
                    </li>
                    <li className="mr-5 py-6">
                        <a className="text-neutral-800 hover:text-[#585989]" href="#!">Team</a>
                    </li>
                    <li className="mr-5 py-6">
                        <a className="text-neutral-800 hover:text-[#585989]" href="#!">Sign In</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}