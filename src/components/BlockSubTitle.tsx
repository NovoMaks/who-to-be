type Props = {
  className?: string;
  textClass?: string;
  value: string;
};

export default function BlockSubTitle({ className, textClass, value }: Props) {
  return (
    <div className={className}>
      <h3
        className={`${textClass} leading-none lg:text-[10em] xl:text-[15em] font-bold text-black/10`}
      >
        {value}
      </h3>
    </div>
  );
}
