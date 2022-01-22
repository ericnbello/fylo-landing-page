import Image from "next/image"

const Email = ({ ...props }) => {
  return (
    <Image className="pr-2"
        src="/icon-email.svg" 
        width="20"
        height="16"
        fill="#FFF" 
    />
  )
}

export default Email