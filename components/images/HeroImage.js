import Image from "next/image"

const HeroImage = ({ ...props }) => {
  return (
    <Image className="w-1 m-0 p-0"
        src="/illustration-1.svg" 
        width="1132.93" 
        height="839.14"
    />
  )
}

export default HeroImage