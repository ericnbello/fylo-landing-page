import Image from "next/image"

const Logo = ({ ...props }) => {
  return (
    <Image className="w-1 m-0 p-0"
        src="/logo.svg" 
        width="110"
        height="33" 
    />
  )
}

export default Logo