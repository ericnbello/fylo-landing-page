import Image from "next/image";

const Arrow = ({ ...props }) => {
  return (
    <Image 
        src="/icon-arrow.svg" 
        width="16" 
        height="16" 
        fill="none"
    />
  )
}

export default Arrow