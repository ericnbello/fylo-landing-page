import Image from "next/image";

const Phone = ({ ...props }) => {
  return (
    <Image src="/icon-phone.svg"
        width="18" 
        height="18"
        fill="none"
        viewBox="0 0 18 18"
    />
  )
}

export default Phone