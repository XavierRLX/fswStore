import Image, { ImageProps } from "next/image";

const PromoBanner = ({alt, ...props}: ImageProps) => {
    return ( 
        <Image height={150}
        width={350}
        className="mt-10 h-auto w-full px-5"
        sizes="100vw"
        alt={alt}
        {...props}
      />
     );
}
 
export default PromoBanner;