import type { NextPage } from 'next';
import Link from 'next/link';
import Container from '../components/Container';
import { parseJSON } from '../lib/parseJSON';

const Home: NextPage = ({ categories }: any) => {
  return (
    <Container>
      <div className="categories grid grid-cols-3">
        {categories.map((category: any) => (
          <Link href={category.slug} key={category.name}>
            {category.name}
          </Link>
        ))}
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
