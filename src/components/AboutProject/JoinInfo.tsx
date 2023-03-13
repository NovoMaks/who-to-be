import Link from "next/link";
import Image from "next/image";

export default function JoinInfo() {
  return (
    <div className="mt-[20px] flex flex-col">
      <p>Напишите в свободном формате о себе или задайте интересующий вопрос:</p>
      <div className="flex mt-2">
        <Link className="ml-2" passHref={true} href="https://stackoverflow.com/">
          <Image src={"./telegram-app.svg"} width="40" height="40" alt=""></Image>
        </Link>
        <Link className="ml-2" passHref={true} href="https://stackoverflow.com/">
          <Image src={"./whatsapp.svg"} width="40" height="40" alt=""></Image>
        </Link>
      </div>
    </div>
  );
}
