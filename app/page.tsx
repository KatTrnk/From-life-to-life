import Image from 'next/image';
import styles from './page.module.css';
import { createClient } from 'contentful';

interface homepageDataStructure {
  contentTypeId: 'homePage';
  fields: {
    mainTitle: string;
  };
}
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const getHomepageData = async () => {
  const res = await client.getEntries<homepageDataStructure>({
    content_type: 'homePage',
    locale: 'cs',
  });
  return res.items[0];
};

export default async function Home() {
  const homepageData = await getHomepageData();
  console.log(homepageData);
  return <h1>{homepageData.fields.mainTitle}</h1>;
}
