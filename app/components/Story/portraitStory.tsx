import { Asset } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import './portraitStory.css';

interface portraitStoryProps {
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
  isPortrait: boolean;
}

export const PortraitStory: React.FC<portraitStoryProps> = ({
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
  isPortrait = false,
}) => {
  return (
    <div className="portrait-story">
      <h2 className="portrait-story__title">{title}</h2>
      <div className="portrait-story__name">
        <p className="name">{name}</p>
        <div className="portrait-story__city">
          <p className="cityFrom">{`${cityFrom}-`}</p>
          <p className="cityTo">{cityTo}</p>
        </div>
      </div>
      <div className="portrait-story-container">
        <div className="portrait-story__quoteImage-container">
          <div className="portrait-story__image-container">
            <Image
              className="portrait-story__image-container__image"
              src={`https:${mainImage.fields.file?.url}`}
              alt={`${mainImage.fields.title} image`}
              fill
              priority
            />
          </div>
          <div className="portrait-story__quote">
            <aside className="pullquote">
              <p className="quote">{quote}</p>
            </aside>
          </div>
        </div>

        <div className="portrait-story__article">
          <p className="summary">{summary}</p>
          <div className="article">
            {documentToReactComponents(storyArticle)}
          </div>
        </div>
      </div>
    </div>
  );
};
