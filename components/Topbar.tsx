interface TopbarProps {
  text: string;
}

export const Topbar = ({ text }: TopbarProps) => {
  return (
    <div className="bg-black mx-auto w-full max-w-7xl px-2 py-2">
      <p className="text-center text-white">{text}</p>
    </div>
  );
};
