import Link from "next/link";
import { getAllCategories } from "app/libs/server-utils";

export function CategoryList() {
  let allCategories = getAllCategories();

  return (
    <div className="mb-4 flex flex-col justify-start space-y-2 md:flex-row md:space-y-4">
      {allCategories.map((category) => (
        <Link key={category} href={`/category/${category}`}>
          <div>
            <p className="text-base font-medium text-neutral-900 hover:text-orange-900 dark:text-neutral-100">
              {category}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
