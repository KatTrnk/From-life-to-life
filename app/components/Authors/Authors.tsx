import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { Asset } from 'contentful';
import Image from 'next/image';
import './Authors.css';
import '../../globals.css';

interface AuthorsProps {
  name: string;
  email: string;
  image: Asset;
  about: string;
  link: string;
}
export const Authors: React.FC<AuthorsProps> = ({
  name,
  email,
  image,
  about,
  link,
}) => {
  return (
    <div className="authors-container">
      <Image
        className="authors-image"
        src={`https:${image.fields.file?.url}`}
        alt={`${image.fields.title}image`}
        width={200}
        height={200}
      />
      <div className="authors-detail">
        <p className="authors-detal__name">{name}</p>
        <p className="authors-detal__about">{about}</p>
        <p className="authors-detal__email">{email}</p>
        <p className="authors-detal__link">{link}</p>
      </div>
    </div>
  );
};
