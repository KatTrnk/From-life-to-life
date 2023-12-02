import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { Asset } from 'contentful';
import Image from 'next/image';

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
    <div>
      <div className="name">{name}</div>
      <p className="email">{email}</p>

      <Image
        className="image"
        src={`https:${image.fields.file?.url}`}
        alt={`${image.fields.title}image`}
        width={200}
        height={200}
      />

      <p className="about">{about}</p>
      <p className="link">{link}</p>
    </div>
  );
};
