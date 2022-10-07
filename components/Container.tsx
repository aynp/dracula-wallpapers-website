import Link from 'next/link';
import Footer from './Footer';

export default function Container(props: any) {
  const { children, categories } = props;
  return (
    <div className="bg-dracula-darker">
      <main className="flex flex-col justify-center px-8 ">
      <nav className="grid grid-cols-3">
        {categories.map((category: any) => (
          <Link href={category.slug} key={category.name}>
            {category.name}
          </Link>
        ))}
      </nav>
        {children}
      </main>
      <Footer />
    </div>
  );
}
