import ImageCard from "./ImageCard";

const ImageGrid = () => {
  // 실제로는 API나 상태에서 이미지 데이터를 가져와야 합니다
  const images = [
    { id: 1, url: "image1.jpg", title: "이미지 1" },
    { id: 2, url: "image2.jpg", title: "이미지 2" },
    // 더 많은 이미지...
  ];

  return (
    <div className="image-grid">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
