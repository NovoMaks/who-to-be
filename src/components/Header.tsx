import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex pt-[25px] pl-[45px] pr-[45px] relative items-center z-10  bg-und-header bg-cover bg-right">
      <div className="flex items-end">
        <Image className="mr-2" src="/main-logo.svg" alt="" width="70" height="70" />
        <div className="text-[1.5em] font-medium leading-6">
          <span>
            КЕМ
            <br />
            БЫТЬ
          </span>
        </div>
      </div>
      <div className="ml-auto flex justify-center items-center">
        <p className="hidden md:block">Следи за нами в:</p>
        <Link className="ml-2" passHref={true} href="https://stackoverflow.com/">
          <Image src={"./telegram-app.svg"} width="30" height="30" alt=""></Image>
        </Link>
      </div>
    </header>
  );
}
