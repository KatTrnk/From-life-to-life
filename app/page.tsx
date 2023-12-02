import Image from 'next/image';
import styles from './page.module.css';
import { EntryFieldTypes, createClient } from 'contentful';

interface previewStructure {
  contentTypeId: 'pagePreview';
  fields: {
    previewImage: EntryFieldTypes.AssetLink;
    previewText: EntryFieldTypes.Text;
  };
}
interface partnersStructure {
  contentTypeId: 'partners';
  fields: {
    logo: EntryFieldTypes.AssetLink;
    email: EntryFieldTypes.Text;
    url: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
  };
}
interface exhibitionsStucture {
  contentTypeId: 'exhibitions';
  fields: {
    location: EntryFieldTypes.Text;
    dateFrom: EntryFieldTypes.Date;
    dateTo: EntryFieldTypes.Date;
    link: EntryFieldTypes.Text;
    details: EntryFieldTypes.RichText;
  };
}

interface homepageDataStructure {
  contentTypeId: 'homePage';
  fields: {
    mainTitle: EntryFieldTypes.Text;
    banner: EntryFieldTypes.AssetLink;
    introduction: EntryFieldTypes.Text;
    projectPreview: EntryFieldTypes.EntryLink<previewStructure>;
    galleryPreview: EntryFieldTypes.EntryLink<previewStructure>;
    partners: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<partnersStructure>
    >;
    exhibitions: EntryFieldTypes.EntryLink<exhibitionsStucture>;
  };
}
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const getHomepageData = async () => {
  const res = await client.getEntries<homepageDataStructure>({
    content_type: 'homePage',
    locale: 'en-US',
  });
  return res.items[0];
};

export default async function Home() {
  const homepageData = await getHomepageData();
  console.log(homepageData);
  return <h1>{homepageData.fields.mainTitle}</h1>;
}
