import Link from "next/link";
import Comments from "@/components/comments";

export const metadata = {
  title: "About",
};

const infoItems = [
  {
    label: "GitHub",
    href: "https://github.com/kaiyang0815",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/kaiyang0815",
  },
];

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium tracking-tighter">About</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi, I'm Kaiyang. I'm an iOS developer with a passion for crafting
          elegant and user-friendly mobile experiences. I specialize in building
          native iOS applications and enjoy staying at the forefront of Apple's
          latest technologies.
        </p>

        <h2>Skills & Technologies</h2>
        <ul>
          <li>iOS Development: Swift, SwiftUI, UIKit, Combine</li>
          <li>Tools: Xcode, CocoaPods, Swift Package Manager</li>
          <li>
            Architecture: MVVM, Clean Architecture, Protocol-Oriented
            Programming
          </li>
          <li>Testing: XCTest, UI Testing, TDD</li>
          <li>Other: Git, CI/CD, App Store Connect</li>
        </ul>

        <h2>Interests</h2>
        <p>
          Beyond iOS development, I'm passionate about mobile user experience,
          app performance optimization, and exploring emerging Apple
          technologies. I enjoy keeping up with the latest WWDC announcements
          and contributing to the iOS developer community.
        </p>

        <h2>Contact me</h2>
        <ul>
          {infoItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="giscus-container">
        <Comments />
      </div>
    </section>
  );
}
