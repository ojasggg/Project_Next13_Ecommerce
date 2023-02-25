import { Footer, Navbar } from "../../components";

export default function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex">
          <div className="flex-1">{children}</div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
