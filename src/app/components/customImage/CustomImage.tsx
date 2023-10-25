import Image from "next/image";
import getImageBase64 from "../../../../lib/getImageBase";

type Props = {
  src: string;
  alt: string;
  priority?: string;
};

const gitUrl: string =
  "https://raw.githubusercontent.com/samjain233/blog-server/main/images/";

export default async function CustomImage({ src, alt, priority }: Props) {
  const prty = priority ? true : false;
  const myBlurDataUrl = await getImageBase64(gitUrl + src);
  return (
    <div className="w-full h-full mt-[2.5em]">
      <Image
        className="w-full h-auto object-cover"
        src={gitUrl + src}
        alt={alt}
        width={650}
        height={365}
        priority={prty}
        placeholder="blur"
        blurDataURL={myBlurDataUrl}
        quality={80}
        sizes="(max-width:768px) 100vw , (max-width:1200px) 50vw , 33vw"
      />
    </div>
  );
}
