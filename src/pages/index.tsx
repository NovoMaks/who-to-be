import { Inter } from "next/font/google";
import Header from "@/components/Header";
import AboutProject from "@/components/AboutProject";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <AboutProject />
      <Footer />
    </div>
  );
}
