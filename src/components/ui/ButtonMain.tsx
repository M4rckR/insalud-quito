type ButtonProps = {
  children: React.ReactNode;
};

export const ButtonMain = ({ children }: ButtonProps) => {
  return (
    <a
      className="py-2 md:py-4 md:px-10 md:text-lg  bg-in-orange px-4 rounded-3xl text-white font-bold"
      href=""
    >
      {children}
    </a>
  );
};
