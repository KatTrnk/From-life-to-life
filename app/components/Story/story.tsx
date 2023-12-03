import { Asset } from 'contentful';
import Image from 'next/image';

interface storyProps {
  title: string;
  name: string;
  cityFrom: string;
  cityTo: string;
  quote: string;
  summary: string;
  article: string;
  mainImage: Asset;
  storyImages: Asset[];
  slug: string;
  isHorizontal: boolean;
}

export const StoryDetail: React.FC<storyProps> = ({
  title,
  name,
  cityFrom,
  cityTo,
  quote,
  summary,
  article,
  mainImage,
  storyImages,
  slug,
  isHorizontal = false,
}) => {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <p className="name">{name}</p>
      <p className="cityFrom">{cityFrom}</p>
      <p className="cityTo">{cityTo}</p>
      <Image
        src={`https:${mainImage.fields.file?.url}`}
        alt={`${mainImage.fields.title} image`}
        width={100}
        height={100}
      />
      <p className="quote">{quote}</p>
      <p className="summary">{summary}</p>
      <p className="article">{article}</p>
    </div>
  );
};
