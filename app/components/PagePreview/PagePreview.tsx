import { Asset } from 'contentful';
import Image from 'next/image';

interface pagePreviewProps {
  previewImages: Asset[];
  previewText: string;
  isSingle?: boolean;
}

export const PagePreview: React.FC<pagePreviewProps> = ({
  previewImages,
  previewText,
  isSingle = false,
}) => {
  return (
    <div className="container">
      {previewImages.map((image) => (
        <Image
          key={image.sys.id}
          className="image"
          src={`https:${image.fields.file?.url}`}
          alt={`${image.fields.title}image`}
          width={200}
          height={200}
        />
      ))}

      <p className="previewText">{previewText}</p>
    </div>
  );
};
