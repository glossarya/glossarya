import Link from 'next/link';

function Home() {
  return <ul>
    <li>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </li>
    <li>
      <Link href="/blog">
        <a>Blog Post</a>
      </Link>
    </li>
  </ul>;
}

export default Home;