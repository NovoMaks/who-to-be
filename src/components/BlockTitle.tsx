type Props = {
  className?: string;
  num: string;
  value: string;
};

export default function BlockTitle({ className, num, value }: Props) {
  return (
    <div className={`font-bold ${className}`}>
      <h2 className="text-[1.5em]">{`${num}. _________${value}`}</h2>
    </div>
  );
}
