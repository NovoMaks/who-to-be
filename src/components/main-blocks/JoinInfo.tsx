import BlockTitle from "../BlockTitle";
import Link from "next/link";
import Image from "next/image";

export default function JoinInfo() {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <div className="w-[80%]">
        <BlockTitle
          className="font-bold text-lg"
          num="03"
          value="Если вы хотите стать частью команды"
        />

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
      </div>
    </div>
  );
}
