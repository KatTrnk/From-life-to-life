import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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
    <div>
      <img className="logo" src={logoUrl}></img>
      <p className="email">{email}</p>
      <p className="link">{url}</p>
      <p className="details">{title}</p>
    </div>
  );
};
