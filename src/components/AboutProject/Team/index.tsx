import Member from "./Member";

export default function Team() {
  return (
    <div className="w-[80%] flex flex-wrap gap-10 justify-center">
      <Member
        imgPath="/my.jpg"
        name="Новосельцев Максим"
        mainInfo="01. ____Основатель проекта, web-разработчик"
        desc={[
          "На данный момент работаю руководителем сектора разработки в Консультант+",
          "Был сотрудником Сбербанк технологий и Лаборатории Касперского",
          "Работал преподавателем в школе цифрового творчества Кодабра",
        ]}
      />
    </div>
  );
}
