interface TopbarProps {
  text: string;
}

export const Topbar = ({ text }: TopbarProps) => {
  return (
    <div className="bg-black p-4">
      <p className="text-center text-white">{text}</p>
    </div>
  );
};
