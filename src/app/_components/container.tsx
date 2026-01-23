type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-auto px-4 md:px-6 max-w-screen-xl">{children}</div>;
};

export default Container;
