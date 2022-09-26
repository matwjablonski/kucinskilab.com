import Link from "next/link";
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul className={styles.NavList}>
        <li className={styles.NavItem}>
          <Link href="/">
            <a>About me</a>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/">
            <a>Sonata Project</a>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/">
            <a>Publications</a>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/">
            <a>News</a>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/">
            <a>Team</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
