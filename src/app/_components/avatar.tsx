type Props = {
  name: string;
  picture: string;
  pictureAlt?: string;
};

const Avatar = ({ name, picture, pictureAlt }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-12 h-12 rounded-full mr-4"
        alt={pictureAlt ?? name}
      />
      <p className="text-xl">{name}</p>
    </div>
  );
};

export default Avatar;
