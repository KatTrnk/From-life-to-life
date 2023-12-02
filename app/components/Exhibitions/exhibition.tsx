import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
interface ExhibitionProps {
  location: string;
  dateFrom: string;
  dateTo: string;
  link: string;
  details: Document;
}
export const Exhibition: React.FC<ExhibitionProps> = ({
  location,
  dateFrom,
  dateTo,
  link,
  details,
}) => {
  return (
    <>
      <div className="location">{location}</div>
      <p className="date date-from">{dateFrom}</p>
      <p className="date date-to">{dateTo}</p>
      <p className="link">{link}</p>
      <p className="details">{documentToReactComponents(details)}</p>
    </>
  );
};
