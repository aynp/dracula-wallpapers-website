import Footer from './Footer';

export default function Container(props: any) {
  const { children, ...customMeta } = props;

  return (
    <div className="bg-dracula-darker">
      <main className="flex flex-col justify-center px-8 ">{children}</main>
      <Footer />
    </div>
  );
}
