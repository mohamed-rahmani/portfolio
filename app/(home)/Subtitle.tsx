type TitleProps = {
  text: string;
};

export default function Subtitle({ text }: TitleProps) {
  return (
    <h2 className="text-xl pb-2 sm:text-lg md:text-2xl lg:text-4xl font-bold font-sans bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">
      {text}
    </h2>
  );
}
