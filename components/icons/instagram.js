import Image from "next/image"

const Instagram = ({ ...props }) => {
  return (
    <Image 
        src="/instagram-icon.svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
    />
  )
}

export default Instagram