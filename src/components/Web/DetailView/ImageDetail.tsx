import "./imageDetail.css";

type ImageDetailProps = {
  image: {
    id: number;
    url: string;
    title: string;
    description?: string;
  };
};

const ImageDetail = ({ image }: ImageDetailProps) => {
  return (
    <div className="image-detail">
      <img src={image.url} alt={image.title} />
      <h2>{image.title}</h2>
      {image.description && <p>{image.description}</p>}
      {/* 추가적인 이미지 상세 정보 */}
    </div>
  );
};

export default ImageDetail;
