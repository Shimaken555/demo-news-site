import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './link.module.scss';

const HomeLink: React.FC = () => {
  return (
    <Link to="/">
      <div className={`${styles.link} ${styles.link__blue}`}>
        <div className={styles.link__icon}>
          <FaHome />
        </div>
        <div className={styles.link__lead}>
          <span>Top Pageへ</span>
        </div>
      </div>
    </Link>
  );
};

export default HomeLink;
