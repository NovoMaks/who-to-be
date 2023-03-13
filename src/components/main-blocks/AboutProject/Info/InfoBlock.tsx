import Image from "next/image";

type Props = {
  imagePath: string;
  title: string;
  text: string;
  num: string;
};

export default function InfoBlock({ imagePath, title, text, num }: Props) {
  return (
    <div className={`w-[280px]`}>
      <div className="w-[280px] h-[280px] bg-black/10 rounded-[140px] flex justify-center items-center mb-[-100px]">
        <Image className="opacity-20" src={imagePath} alt="" width="150" height="150" />
      </div>
      <div className="w-full">
        <div className="w-[60px] h-[60px] rounded-[30px] bg-black/60 flex justify-center items-center">
          <p className="font-bold text-white">{num}</p>
        </div>
        <p className="text-[1.5em] font-medium">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
