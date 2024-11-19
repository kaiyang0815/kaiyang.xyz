import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-bold hover:text-primary transition-colors">
          {`kaiyang's Notebook`}
        </Link>
        
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/blog">博客</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/projects">项目</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}