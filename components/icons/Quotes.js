import Image from "next/image";

const Quotes = ({ ...props }) => {
  return (
    <Image 
        src="/icon-quotes.svg" 
        width="13" 
        height="12"
        fill="none"
    />
  )
}

export default Quotes