import Link from "next/link";
import Image from "next/image";

export default function JoinInfo() {
  return (
    <div className="mt-[20px] flex flex-col">
      <p>Напишите в свободном формате о себе или задайте интересующий вопрос:</p>
      <div className="flex mt-2">
        <Link target="_blank" className="ml-2" passHref={true} href="https://t.me/novms">
          <Image src={"./telegram-app.svg"} width="40" height="40" alt=""></Image>
        </Link>
        <Link target="_blank" className="ml-2" passHref={true} href="https://wa.me/79017477053">
          <Image src={"./whatsapp.svg"} width="40" height="40" alt=""></Image>
        </Link>
      </div>
    </div>
  );
}
