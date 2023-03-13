import BlockTitle from "../BlockTitle";

export default function SchoolInfo() {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <div className="w-[80%]">
        <BlockTitle className="font-bold text-lg" num="02" value="Если вы ученик или учитель" />
        <p className="mt-[20px]">
          Заполните простую{" "}
          <a href="#" className="text-blue-500">
            google-форму
          </a>{" "}
          и мы обязательно свяжемся с вами
        </p>
      </div>
    </div>
  );
}
