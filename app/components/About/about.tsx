import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import './about.css';
import { Asset } from 'contentful';

import Image from 'next/image';

interface aboutProps {
  title: string;
  bannerAbout: Asset;
  quote: string;
  article: Document;
  titleTeam: string;
}

export const About: React.FC<aboutProps> = ({
  title,
  bannerAbout,
  article,
  quote,
  titleTeam,
}) => {
  return (
    <div>
      <div className="about-container">
        <div className="about-header">
          <h2 className="about__title">{title}</h2>
          <Image
            className="about__banner"
            src={`https:${bannerAbout.fields.file?.url}`}
            alt={`${bannerAbout.fields.title}image`}
            fill
            priority
          />
        </div>
        <div className="about-quote-article">
          <p className="about__quote">{quote}</p>
          <div className="about__article">
            {documentToReactComponents(article)}
          </div>
        </div>
      </div>
      <div className="ourTeam">
        <h2 className="ourTeam__title">{titleTeam}</h2>
      </div>
    </div>
  );
};
