import { FC } from 'react';
import styles from './Content.module.scss';
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Content = {
  title: string;
  content: Document;
}

const Content: FC<Content> = ({ title, content }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => <p className={styles.p}>{children}</p>
    }
  };

  return <article className={styles.Content}>
    <h2 className={styles.Title}>{title}</h2>
    {documentToReactComponents(content, options)}
  </article>
}

export default Content;
