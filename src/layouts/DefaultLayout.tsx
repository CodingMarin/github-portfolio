import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";

export default function DefaultLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="font-display min-h-screen dark:bg-github bg-[#FAFAFA]">
      <main>{children}</main>
      <BottomNavigation />
      <Footer />
    </div>
  );
}
