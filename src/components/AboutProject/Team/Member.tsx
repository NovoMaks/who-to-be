import Image from "next/image";
type Props = {
  mainInfo: string;
  name: string;
  desc: string[];
  imgPath: string;
  className?: string;
};

export default function Member({ mainInfo, name, desc, className, imgPath }: Props) {
  return (
    <div className={`w-[400px] ${className}`}>
      <div className="relative w-full h-[400px]">
        <Image className="rounded-lg object-cover" src={imgPath} alt="" fill />
      </div>
      <div className="mt-2">
        <p className="font-bold">{mainInfo}</p>
        <p className="text-[1.5em]">{name}</p>
        <p>
          {desc.map((item, i) => (
            <span key={i}>
              <span>{item}</span>
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
