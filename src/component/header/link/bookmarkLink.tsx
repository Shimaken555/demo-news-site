import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './link.module.scss';

const BookmarkLink: React.FC = () => {
  return (
    <Link to="/bookmark">
      <div className={`${styles.link} ${styles.link__red}`}>
        <div className={styles.link__icon}>
          <MdFavorite />
        </div>
        <div className={styles.link__lead}>
          <span>Favoriteへ</span>
        </div>
      </div>
    </Link>
  );
};

export default BookmarkLink;
