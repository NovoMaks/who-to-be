import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-dot p-[50px] mt-[50px]">
      <div className="flex justify-center items-center mb-2">
        <p>Следи за нами в:</p>
        <Link className="ml-2" passHref={true} href="https://stackoverflow.com/">
          <Image src={"./telegram-app.svg"} width="30" height="30" alt=""></Image>
        </Link>
      </div>
      <p>© Novoseltsev Maksim {new Date().getFullYear()}</p>
    </div>
  );
}
