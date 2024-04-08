import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import './partners.css';

interface PartnersProps {
  logoUrl: string;
  email: string;
  url: string;
  title: string;
}
export const Partners: React.FC<PartnersProps> = ({
  logoUrl,
  email,
  url,
  title,
}) => {
  return (
    <div className="container__partners">
      <p className="details">{title}</p>
      <Image
        className="logo"
        src={logoUrl}
        alt={title}
        width={100}
        height={50}
        layout="responsive"
      ></Image>
      <p className="email">{email}</p>
      {/* <p className="link">{url}</p> */}
    </div>
  );
};
