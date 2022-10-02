import type { NextPage } from 'next';
import Container from '../components/Container';
import { parseJSON } from '../lib/parseJSON';
import Card from '../components/Card';

const Category: NextPage = (category: any) => {
  return (
    <Container>
      <h1 className="text-6xl font-bold text-center p-10">{category.name}</h1>
      <div className="flex flex-col justify-center items-start max-w-6xl mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.walls.map((wall: any) => (
            <Card key={wall.name} {...wall} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  const categories = await parseJSON('/walls.json');
  const x = {
    paths: categories.map((item: any) => ({
      params: {
        slug: item.name.toLowerCase().replace(/ /g, '-'),
      },
    })),
    fallback: false,
  };
  return x;
}

export async function getStaticProps({ params }: any) {
  const categories = await parseJSON('/walls.json');
  const category = categories.find(
    (item: any) => item.name.toLowerCase().replace(/ /g, '-') === params.slug
  );

  return { props: category };
}

export default Category;
