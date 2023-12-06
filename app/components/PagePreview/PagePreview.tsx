import { Asset } from 'contentful';
import Image from 'next/image';
import './pagePreview.css';
import '../../globals.css';
import Link from 'next/link';

interface pagePreviewProps {
  previewImages: Asset[];
  previewText: string;
  isSingle?: boolean;
  title: string;
  url: string;
}

export const PagePreview: React.FC<pagePreviewProps> = ({
  previewImages,
  previewText,
  isSingle = false,
  title,
  url,
}) => {
  return (
    <div className="page-preview">
      {previewImages.map((image, index) => (
        <div
          key={image.sys.id}
          className={`container__image ${
            isSingle ? 'container__image--is-single' : ''
          } image-number${index + 1}`}
        >
          <Image
            className="image"
            src={`https:${image.fields.file?.url}`}
            alt={`${image.fields.title}image`}
            fill
          />
        </div>
      ))}
      <Link
        className={`previewTitle ${isSingle ? 'previewTitle--is-single' : ''} `}
        href={url}
      >
        <p>{title}</p>
      </Link>

      <p className={`previewText ${isSingle ? 'previewText--is-single' : ''} `}>
        {previewText}
      </p>
    </div>
  );
};
