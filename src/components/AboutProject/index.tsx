import BlockSubTitle from "@/components/BlockSubTitle";
import BlockTitle from "@/components/BlockTitle";
import { TypeAnimation } from "react-type-animation";
import Goal from "./Goal";
import Info from "./Info";
import JoinInfo from "./JoinInfo";
import SchoolInfo from "./SchoolInfo";
import Team from "./Team";

const sequence = [
  "Я хочу быть... программистом",
  1000,
  "Я хочу быть... бизнесменом",
  1000,
  "Я хочу быть... дизайнером",
  1000,
  "Я хочу быть... не знаю :(",
];

export default function AboutProject() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%] mt-[50px] md:mt-[80] lg:mt-[100px]">
        <BlockTitle num="01" value="О чем проект" />
        <TypeAnimation
          className="text-[2em] lg:text-[3.5em] font-medium mt-4 min-h-[210px]"
          sequence={sequence}
          wrapper="div"
          cursor={true}
        />
      </div>

      <BlockSubTitle
        textClass="text-[8em]"
        className="w-full lg:text-right mt-[-100px]"
        value="Цель"
      />
      <Goal className="mt-[-50px] lg:mt-[-70px] xl:mt-[-100px]" />

      <Info className="mt-[50px] md:mt-[80px] lg:mt-[100px]" />

      <div className="flex w-full flex-col items-center mt-[100px]">
        <div className="w-[80%]">
          <BlockTitle className="font-bold text-lg" num="02" value="Если вы ученик или учитель" />
          <SchoolInfo />
        </div>
      </div>

      <BlockSubTitle className="w-full mt-[50px]" textClass="text-[4em]" value="Команда" />
      <div
        className={`w-full flex items-center justify-center mt-[-10px] md:mt-[-10px] lg:mt-[-30px] xl:mt-[-50px]`}
      >
        <Team />
      </div>

      <div className="flex w-full flex-col items-center mt-[100px]">
        <div className="w-[80%]">
          <BlockTitle
            className="font-bold text-lg"
            num="03"
            value="Если вы хотите стать частью команды"
          />
          <JoinInfo />
        </div>
      </div>
    </div>
  );
}
