import Image from 'next/image';
import { Asset, Entry, EntryFieldTypes, createClient } from 'contentful';
import { StoryPreview } from '../components/StoryPreview/storyPreview';

export interface storyDataStructure {
  contentTypeId: 'storyPage';
  fields: {
    title: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    cityFrom: EntryFieldTypes.Text;
    cityTo: EntryFieldTypes.Text;
    quote: EntryFieldTypes.Text;
    summary: EntryFieldTypes.Text;
    article: EntryFieldTypes.Text;
    mainImage: EntryFieldTypes.AssetLink;
    storyImages: EntryFieldTypes.AssetLink[];
    slug: EntryFieldTypes.Text;
  };
}
interface storiesListDataStructure {
  contentTypeId: 'storyListPage';
  fields: {
    title: EntryFieldTypes.Text;
    stories: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<storyDataStructure>
    >;
  };
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const getStoriesData = async () => {
  const res = await client.getEntries<storiesListDataStructure>({
    content_type: 'storyListPage',
    locale: 'en-US',
  });
  return res.items[0];
};

export default async function Stories() {
  const storiesData = await getStoriesData();
  console.log(storiesData);

  return (
    <>
      {storiesData.fields.stories.map((item) => {
        const story = item as Entry<storyDataStructure, undefined>;
        const image = story.fields.mainImage as Asset<undefined, string>;
        return (
          <StoryPreview
            name={story.fields.name}
            mainImage={image}
            slug={story.fields.slug}
          />
        );
      })}
    </>
  );
}
