import { StoryPreview, storyPreviewProps } from '../StoryPreview/storyPreview';
import './gallery.css';
import '../../globals.css';

interface GalleryProps {
  title: string;
  stories: storyPreviewProps[];
}
export const Gallery: React.FC<GalleryProps> = ({ title, stories }) => {
  return (
    <div className="container__gallery">
      <h3 className="container__gallery__title">{title}</h3>
      {stories.map((story) => {
        return (
          <div className="gallery-image">
            <StoryPreview
              name={story.name}
              mainImage={story.mainImage}
              slug={story.slug}
            />
          </div>
        );
      })}
    </div>
  );
};
