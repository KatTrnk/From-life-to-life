import { Asset } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import './story.css';

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
  storyArticle: Document;
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
  storyArticle,
}) => {
  return (
    <div className="story">
      <h2 className="story__title">{title}</h2>
      <div className="story__name">
        <p className="name">{name}</p>
        <div className="story__city">
          <p className="cityFrom">{`${cityFrom}-`}</p>
          <p className="cityTo">{cityTo}</p>
        </div>
      </div>

      <div className="story__image-container">
        <Image
          className="story__image-container__image"
          src={`https:${mainImage.fields.file?.url}`}
          alt={`${mainImage.fields.title} image`}
          // fill
          layout="responsive"
          width={450}
          height={300}
          priority
        />
      </div>
      <div className="story__article">
        <aside>
          <p className="quote">{quote}</p>
        </aside>
        <p className="summary">{summary}</p>
        <div className="article">{documentToReactComponents(storyArticle)}</div>
      </div>
    </div>
  );
};
