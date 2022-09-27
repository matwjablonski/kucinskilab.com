import styles from './NewsItem.module.scss';
import Link from "next/link";

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const NewsItem = ({ title, date, excerpt, slug }: NewsItem) => (
  <article className={styles.NewsItem}>
    <Link href={`/news/${slug}`}>
      <a>
        <h3 className={styles.NewsItemTitle}>{title}</h3>
        <time dateTime={date} className={styles.NewsItemDate}>{date}</time>
        <p>{excerpt}</p>
      </a>
    </Link>
  </article>
)

export default NewsItem;
