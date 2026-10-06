import Link from "next/link";
import StructuredData from "./StructuredData";
import { breadcrumbSchema } from "../lib/seo";

export default function Breadcrumbs({ items }) {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", ...breadcrumbSchema(items) }} />
      <nav className="container breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => (
            <li key={item.href}>
              {index === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
