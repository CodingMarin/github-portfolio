import Footer from "@/components/Footer";

export default function DefaultLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="font-display bg-github">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
