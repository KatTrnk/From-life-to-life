import Image from 'next/image';
import styles from './page.module.css';
import '../app/styles.css';
import { Asset, Entry, EntryFieldTypes, createClient } from 'contentful';
import { Exhibition } from './components/Exhibitions/exhibition';

import { PagePreview } from './components/PagePreview/PagePreview';

import { Partners } from './components/Partners/partners';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';

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
  const galleryPreviewPreview = homepageData.fields.galleryPreview as Entry<
    previewStructure,
    undefined
  >;
  console.log(projectPreview);

  const partners = homepageData.fields.partners as Entry<
    partnersStructure,
    undefined
  >[];

  const banner = homepageData.fields.banner as Asset<undefined, string>;
  console.log(homepageData);

  return (
    <div>
      <div className="container-header">
        <h1 className="header">{homepageData.fields.mainTitle}</h1>

        <Image
          className="container-banner"
          src={`https:${banner.fields?.file?.url}`}
          alt="banner"
          fill
          priority
        />
      </div>
      <div className="container__empty">
        <p className="introduction">{homepageData.fields.introduction}</p>
      </div>
      {/* <Exhibition
        location={exhibition.fields.location}
        dateFrom={exhibition.fields.dateFrom}
        dateTo={exhibition.fields.dateTo}
        link={exhibition.fields.link}
        details={exhibition.fields.details}
      /> */}

      <PagePreview
        previewImages={projectPreview.fields.previewImage}
        previewText={projectPreview.fields.previewText}
        title="About Project"
        url="/about"
      />
      <PagePreview
        previewImages={galleryPreviewPreview.fields.previewImage}
        previewText={galleryPreviewPreview.fields.previewText}
        isSingle
        title="Gallery"
        url="/stories"
      />

      {partners.map((e) => {
        const image = e.fields.logo as Asset<undefined, string>;
        return (
          <Partners
            logoUrl={`https:${image.fields?.file?.url}`}
            email={e.fields.email}
            url={e.fields.url}
            title={e.fields.title}
          />
        );
      })}
    </div>
  );
}
