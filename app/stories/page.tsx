import { Asset, Entry, EntryFieldTypes, createClient } from 'contentful';
import { StoryPreview } from '../components/StoryPreview/storyPreview';
import { Gallery } from '../components/Gallery/gallery';

export interface storyDataStructure {
  contentTypeId: 'storyPage';
  fields: {
    storyTitle: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    cityFrom: EntryFieldTypes.Text;
    cityTo: EntryFieldTypes.Text;
    quote: EntryFieldTypes.Text;
    summary: EntryFieldTypes.Text;
    article: EntryFieldTypes.Text;
    mainImage: EntryFieldTypes.AssetLink;
    storyImages: EntryFieldTypes.AssetLink[];
    slug: EntryFieldTypes.Text;
    storyArticle: EntryFieldTypes.RichText;
    isPortrait: EntryFieldTypes.Boolean;
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
  const galleryData = storiesData.fields.stories.map((story) => {
    const storyItem = story as Entry<storyDataStructure, undefined>;
    const image = storyItem.fields.mainImage as Asset<undefined, string>;
    return {
      name: storyItem.fields.name,
      mainImage: image,
      slug: storyItem.fields.slug,
    };
  });
  console.log(storiesData);

  return <Gallery title={storiesData.fields.title} stories={galleryData} />;
}
