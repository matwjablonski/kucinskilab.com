import Button from '@components/Button';
import styles from './SingleNews.module.scss';
import Link from 'next/link';

const SingleNews = ({ title, publicationDate, excerpt, slug }) => {
  return (
    <article className={styles.SingleNews}>
      <Link href={`/news/${slug}`}><a><h3 className={styles.Title}>{title}</h3></a></Link>
      <p className={styles.Date}>{publicationDate}</p>
      <p className={styles.Text}>{excerpt}</p>
      <Button to={`/news/${slug}`} buttonType="link" label="Read more" />
    </article>
  )
}

export default SingleNews;
