import { EntryFieldTypes, createClient, Entry, Asset } from 'contentful';
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { Authors } from '../components/Authors/Authors';
import { About } from '../components/About/about';
import './about.css';

interface authorsStructure {
  contentTypeId: 'contactPerson';
  fields: {
    image: EntryFieldTypes.AssetLink;
    name: EntryFieldTypes.Text;
    email: EntryFieldTypes.Text;
    about: EntryFieldTypes.Text;
    link: EntryFieldTypes.Text;
  };
}

interface aboutDataStructure {
  contentTypeId: 'aboutPage';
  fields: {
    title: EntryFieldTypes.Text;
    quote: EntryFieldTypes.Text;
    article: EntryFieldTypes.RichText;
    titleTeam: EntryFieldTypes.Text;
    authors: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<authorsStructure>>;
  };
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const getAboutData = async () => {
  const res = await client.getEntries<aboutDataStructure>({
    content_type: 'aboutPage',
    locale: 'en-US',
  });
  return res.items[0];
};

export default async function AboutPage() {
  const aboutData = await getAboutData();
  //console.log(aboutData);
  const authors = aboutData.fields.authors as Entry<
    authorsStructure,
    undefined
  >[];
  //console.log(authors);

  return (
    <div>
      <About
        title={aboutData.fields.title}
        quote={aboutData.fields.quote}
        article={aboutData.fields.article}
        titleTeam={aboutData.fields.titleTeam}
      />
      <div className="container__authors">
        {authors.map((i) => {
          const image = i.fields.image as Asset<undefined, string>;
          return (
            <Authors
              key={i.sys.id}
              image={image}
              name={i.fields.name}
              email={i.fields.email}
              about={i.fields.about}
              link={i.fields.link}
            />
          );
        })}
      </div>
    </div>
  );
}
