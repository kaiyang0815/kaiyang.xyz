import { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About | Kaiyang's Notebook",
  description: "About me and this site",
};

export default function AboutPage() {
  return <AboutContent />;
}
