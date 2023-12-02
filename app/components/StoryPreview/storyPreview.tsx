import { Asset } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

interface storyPreviewProps {
  name: string;
  mainImage: Asset;
  slug: string;
}

export const StoryPreview: React.FC<storyPreviewProps> = ({
  name,
  mainImage,
  slug,
}) => {
  return (
    <Link href={`/stories/${slug}`}>
      <p>{name}</p>
      <Image
        src={`https:${mainImage.fields.file?.url}`}
        alt={`${mainImage.fields.title} image`}
        width={100}
        height={100}
      />
    </Link>
  );
};
