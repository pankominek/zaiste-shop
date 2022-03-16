interface FooterProps {
  data: {
    text: string;
  };
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="bg-gray-900 container p-4 border-2 border-b-0 shadow">
      <p className="text-center text-gray-400">
        {`© ${new Date().getFullYear()} ${data.text}`}
      </p>
    </footer>
  );
};
