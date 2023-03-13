import { Inter } from "next/font/google";
import Header from "@/components/Header";
import AboutProject from "@/components/main-blocks/AboutProject";
import Footer from "@/components/Footer";
import SchoolInfo from "@/components/main-blocks/SchoolInfo";
import JoinInfo from "@/components/main-blocks/JoinInfo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <AboutProject />
      <SchoolInfo />
      <JoinInfo />
      <Footer />
    </div>
  );
}
