import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../components/Container';
import { parseJSON } from '../lib/parseJSON';

const fwall = {
  name: '',
  urlhd:
    'https://raw.githubusercontent.com/aynp/dracula-wallpapers/main/OS/Arch%20Linux%20(Logo%20Rainbow).png',
  url4k:
    'https://raw.githubusercontent.com/aynp/dracula-wallpapers/main/OS/4k/Arch%20Linux%20(Logo%20Rainbow).png',
};

const Home: NextPage = ({ categories }: any) => {
  return (
    <Container categories={categories}>
      <div className="flex flex-col items-center">
        <div className="text-5xl font-bold p-10">Featured Wall</div>
        <div className="rounded bg-dracula-darker-600 p-4">
          <Image
            className="rounded"
            width={480}
            height={270}
            src={fwall.urlhd}
            alt="Featured Wallpaper"
          />
        </div>
        <div className="flex justify-center p-10 gap-4">
          <a
            href={fwall.urlhd}
            className="inline-flex items-center py-2 px-3 text-sm font-bold text-center rounded-lg bg-dracula-purple-500 hover:bg-dracula-purple-600">
            Download HD
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
          <a
            href={fwall.url4k}
            className="inline-flex items-center py-2 px-3 text-sm font-bold text-center rounded-lg bg-dracula-purple-500 hover:bg-dracula-purple-600">
            Download 4k
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const categories = await parseJSON('/walls.json');
  // const categories: any = [];

  categories.map((item: any) => {
    const name = item.name;
    item.slug = name.toLowerCase().replace(/ /g, '-');
  });

  // const categories = categories.reduce((acc: any[], item: any) => {
  //   return [...acc, item.name];
  // }, []);

  return { props: { categories } };
}

export default Home;
