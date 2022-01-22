import Image from "next/image"

const LogoWhite = ({ ...props }) => {
  return (
    <Image className="w-1 m-0 p-0"
        src="/logo-white.svg" 
        width="83"
        height="27"
        fill="#FFF" 
    />
  )
}

export default LogoWhite