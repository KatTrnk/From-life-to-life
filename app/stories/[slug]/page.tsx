import Image from 'next/image';
import { Asset, Entry, EntryFieldTypes, createClient } from 'contentful';
import { storyDataStructure } from '../page';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const getStoryData = async (slug: string) => {
  const res = await client.getEntries<storyDataStructure>({
    content_type: 'storyPage',
    locale: 'en-US',
    'fields.slug': slug,
  });
  return res.items[0];
};

export default async function Story({ params }: { params: { slug: string } }) {
  const storyData = await getStoryData(params.slug);
  console.log(storyData);

  return <></>;
}
