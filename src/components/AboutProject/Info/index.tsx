import InfoBlock from "./InfoBlock";
type Props = {
  className?: string;
};

export default function Info({ className }: Props) {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="w-[80%] flex flex-wrap justify-around gap-20">
        <InfoBlock
          num="01."
          imagePath="/game.svg"
          title="Увлекательно"
          text="Люди, работающие в профессии, расскажут о их рабочих буднях, поделятся своим опытом, дадут детям возможность попробовать себя в этой профессии"
        />
        <InfoBlock
          num="02."
          imagePath="/earth.svg"
          title="Из любой точки"
          text="Участником может стать любая школа из любого региона России, для этого просто оставьте заявку"
        />
        <InfoBlock
          num="03."
          imagePath="/free.svg"
          title="Бесплатно"
          text="Это инициатива людей, которые любят свою работу и готовы поделиться своим опытом с другими"
        />
        <InfoBlock
          num="04."
          imagePath="/lecture.svg"
          title="Оффлайн"
          text="Мы лично проведем несколько встреч в вашей школе"
        />
      </div>
    </div>
  );
}
