import Link from "../components/link";
import utilStyles from "../styles/utils.module.css";
export default function Navigation() {
  return (
    <nav className={utilStyles.navigation}>
      <ul className={utilStyles.list}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
