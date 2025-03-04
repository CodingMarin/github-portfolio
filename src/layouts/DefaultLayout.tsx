import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="font-display min-h-screen dark:bg-github bg-[#FAFAFA]">
      <main>
        <Outlet />
      </main>
      <BottomNavigation />
      <Footer />
    </div>
  );
}
