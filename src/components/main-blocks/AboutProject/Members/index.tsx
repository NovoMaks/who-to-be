import Member from "./Member";
type Props = {
  className?: string;
};

export default function Members({ className }: Props) {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="w-[80%] flex flex-wrap gap-10 justify-center">
        <Member
          imgPath="/My.jpg"
          name="Новосельцев Максим"
          mainInfo="01. ____Основатель проекта, web-разработчик"
          desc={[
            "На данный момент работаю руководителем сектора разработки в Консультант+",
            "Был сотрудником Сбербанк технологий и Лаборатории Касперского",
            "Работал преподавателем в школе цифрового творчества Кодабра",
          ]}
        />
        <Member
          imgPath="/pup.jpg"
          name="Вася пупкин"
          mainInfo="02. ____Сантехник"
          desc={[
            "На данный момент работаю руководителем сектора разработки в Консультант+",
            "Был сотрудником Сбербанк технологий и Лаборатории Касперского",
          ]}
        />
      </div>
    </div>
  );
}
