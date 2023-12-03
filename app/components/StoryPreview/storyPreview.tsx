'use client';
import { Asset } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

import './storyPreview.css';

export interface storyPreviewProps {
  name: string;
  mainImage: Asset;
  slug: string;
}

export const StoryPreview: React.FC<storyPreviewProps> = ({
  name,
  mainImage,
  slug,
}) => {
  return (
    <Link className="story-preview__link" href={`/stories/${slug}`}>
      <div className="story-preview__img-containter">
        <p className="story-preview__title">{name}</p>
        <Image
          className="story-preview__image"
          src={`https:${mainImage.fields.file?.url}`}
          alt={`${mainImage.fields.title} image`}
          fill
        />
      </div>
    </Link>
  );
};
