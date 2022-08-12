import { FC } from 'react';
import styles from '../../../../styles/catalog/catalogContent.module.scss';
import { cards } from '../../../../utils/consts';
import ContentItemBlock from './contentItemBlock';

const ContentItems: FC = () => {
  return (
    <div className={styles.content_items}>
      {cards.map((obj) => (
        <ContentItemBlock key={obj} />
      ))}
    </div>
  );
};
export default ContentItems;
