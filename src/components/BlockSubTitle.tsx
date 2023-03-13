type Props = {
  className?: string;
  textClass?: string;
  value: string;
};

export default function BlockSubTitle({ className, textClass, value }: Props) {
  return (
    <div className={className}>
      <h3
        className={`text-[8em] leading-none lg:text-[10em] xl:text-[15em] font-bold text-black/10 ${textClass}`}
      >
        {value}
      </h3>
    </div>
  );
}
