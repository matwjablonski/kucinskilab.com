import Image from 'next/image';
import styles from './Publication.module.scss';
import prepareAssetUrl from '@utils/prepareAssetUrl';

const Publication = ({ title, magazineLogo, authors, magazineTitle, publicationYear, volumeNumber, pages, doi, doiUrl }) => {

  return (
    <article className={styles.Publication}>
      <div className={styles.Logo}>
        {magazineLogo && 
          <Image src={prepareAssetUrl(magazineLogo.fields.file.url)} layout="fill" />
        }
      </div>
      <div className={styles.Content}>
        <div>
          <div className={styles.Authors}>{authors}</div>
          <h4 className={styles.Title}>{title}</h4>
        </div>
        <div className={styles.Meta}>
          <div>{magazineTitle}, <strong>{publicationYear}</strong>, {volumeNumber}, {pages}</div>
          <div>
            <strong>DOI:&nbsp;</strong>
            { doiUrl ? <a href={doiUrl} target="_blank" rel="noopenner nofollow noreferrer">{doi}</a> : doi}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Publication;
