import Link from "next/link";

export default function SlugPage({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        {"Meals Slug " + params.slug + " Page"}
      </h1>
    </main>
  );
}
