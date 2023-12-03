import Image from 'next/image';
import { Asset, Entry, EntryFieldTypes, createClient } from 'contentful';
import { storyDataStructure } from '../page';
import { StoryDetail } from '@/app/components/Story/story';
import { PortraitStory } from '@/app/components/Story/portraitStory';

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
  const mainImage = storyData.fields.mainImage as Asset<undefined, string>;

  return (
    <div>
      {storyData.fields.isPortrait ? (
        <PortraitStory
          title={storyData.fields.storyTitle}
          name={storyData.fields.name}
          cityFrom={storyData.fields.cityFrom}
          cityTo={storyData.fields.cityTo}
          mainImage={mainImage}
          storyImages={storyData.fields.storyImages}
          quote={storyData.fields.quote}
          summary={storyData.fields.summary}
          article={storyData.fields.article}
          slug={storyData.fields.slug}
          isPortrait={storyData.fields.isPortrait}
          storyArticle={storyData.fields.storyArticle}
        />
      ) : (
        <StoryDetail
          title={storyData.fields.storyTitle}
          name={storyData.fields.name}
          cityFrom={storyData.fields.cityFrom}
          cityTo={storyData.fields.cityTo}
          mainImage={mainImage}
          storyImages={storyData.fields.storyImages}
          quote={storyData.fields.quote}
          summary={storyData.fields.summary}
          article={storyData.fields.article}
          slug={storyData.fields.slug}
          storyArticle={storyData.fields.storyArticle}
        />
      )}
    </div>
  );
}
