import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import './about.css';

interface aboutProps {
  title: string;
  quote: string;
  article: Document;
}

export const About: React.FC<aboutProps> = ({ title, article, quote }) => {
  return (
    <div className="about">
      <h2 className="title">{title}</h2>
      <p className="quote">{quote}</p>
      <div className="article">{documentToReactComponents(article)}</div>
    </div>
  );
};
