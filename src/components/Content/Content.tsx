import { FC } from 'react';
import styles from './Content.module.scss';
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Content = {
  title: string;
  content: Document;
  publicationDate?: string;
}

const Content: FC<Content> = ({ title, content, publicationDate }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => <p className={styles.p}>{children}</p>
    }
  };

  return <article className={styles.Content}>
    <div className={styles.TitleBox}>
      <h2 className={styles.Title}>{title}</h2>
      {publicationDate && <span className={styles.Date}>{publicationDate}</span>}
    </div>
    {documentToReactComponents(content, options)}
  </article>
}

export default Content;
