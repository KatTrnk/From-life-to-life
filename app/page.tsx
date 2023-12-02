import Image from 'next/image';
import styles from './page.module.css';
import { Asset, Entry, EntryFieldTypes, createClient } from 'contentful';
import { Exhibition } from './components/Exhibitions/exhibition';
import { PagePreview } from './components/PagePreview/PagePreview';

interface previewStructure {
  contentTypeId: 'pagePreview';
  fields: {
    previewImage: EntryFieldTypes.AssetLink[];
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
  const exhibition = homepageData.fields.exhibitions as Entry<
    exhibitionsStucture,
    undefined
  >;
  const projectPreview = homepageData.fields.projectPreview as Entry<
    previewStructure,
    undefined
  >;
  console.log(projectPreview);
  return (
    <>
      <h1>{homepageData.fields.mainTitle}</h1>
      <Exhibition
        location={exhibition.fields.location}
        dateFrom={exhibition.fields.dateFrom}
        dateTo={exhibition.fields.dateTo}
        link={exhibition.fields.link}
        details={exhibition.fields.details}
      />

      <PagePreview
        previewImages={projectPreview.fields.previewImage}
        previewText={projectPreview.fields.previewText}
      />
    </>
  );
}
