import "./imageCard.css";

type ImageProps = {
  image: {
    id: number;
    url: string;
    title: string;
  };
};

const ImageCard = ({ image }: ImageProps) => {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};

export default ImageCard;
