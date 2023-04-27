import { Fragment } from "react";
import Link from "next/link";

// our-domain.com/news/something-important

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/test1">test1</Link>
        </li>
        <li>test2</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
