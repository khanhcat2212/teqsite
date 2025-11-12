import Footer from "@src/components/layout/Footer";
import Header from "@src/components/layout/Header";
import { Outlet } from "@tanstack/react-router";

const RootLayout = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between bg-white-400">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
