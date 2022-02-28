interface FooterProps {
  data: {
    text: string;
  };
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white container py-4 px-2">
      <p className="text-center text-gray-400">
        {`© ${new Date().getFullYear()} ${data.text}`}
      </p>
    </footer>
  );
};
