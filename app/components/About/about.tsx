import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import './about.css';

interface aboutProps {
  title: string;
  quote: string;
  article: Document;
  titleTeam: string;
}

export const About: React.FC<aboutProps> = ({
  title,
  article,
  quote,
  titleTeam,
}) => {
  return (
    <div>
      <div className="about-container">
        <h2 className="about__title">{title}</h2>
        <p className="about__quote">{quote}</p>
        <div className="about__article">
          {documentToReactComponents(article)}
        </div>
      </div>
      <div className="ourTeam">
        <h2 className="ourTeam__title">{titleTeam}</h2>
      </div>
    </div>
  );
};
