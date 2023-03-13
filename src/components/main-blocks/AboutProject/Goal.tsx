type Props = {
  className?: string;
};

export default function Goal({ className }: Props) {
  return (
    <div
      className={`w-full bg-dot pb-[50px] pt-[50px] xl:pt-[150px] flex justify-center ${className}`}
    >
      <div className="w-[80%]">
        <p className="text-[2.5em] font-medium">Помочь детям сделать правильный выбор профессии</p>
      </div>
    </div>
  );
}
