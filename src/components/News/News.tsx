import Button from "@components/Button";
import NewsItem from "@components/NewsItem";
import Section from "@components/Section";
import styles from './News.module.scss';

const News = ({ news }) => {
  return (
    <Section>
      <div className={styles.News}>
        <div className={styles.NewsContent}>
          <div className={styles.NewsItems}>
            {news.map(item => (
              <NewsItem
                key={item.slug}
                title={item.title}
                date={item.publicationDate}
                excerpt={item.excerpt}
                slug={item.slug}
              />
            ))}
          </div>
          <div className={styles.NewsMeta}>
            <h2 className={styles.NewsMetaTitle}>Recent news</h2>
            <Button buttonType="link" label="View all" to="/news" reversed/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default News;
