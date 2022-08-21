import React, { useContext } from 'react';
import { BookmarkContext } from '../../App';
import ArticleList from '../article/articleList';
import styles from './screen.module.scss';
import Weather from '../sidebar/weather/weather';
import Header from '../header/header';

const BookmarkScreen: React.FC = () => {
  const { bookmarkState } = useContext(BookmarkContext);

  return (
    <>
      <Header screen="bookmark" />
      <div className={styles.screen}>
        <div className={styles.screen__left}>
          <div className={`${styles.screen__left__title} ${styles.title__red}`}>
            Favorite
          </div>
          <ArticleList articles={bookmarkState.bookmarkArticles} />
        </div>
        <div className={styles.screen__right}>
          <Weather />
        </div>
      </div>
    </>
  );
};

export default BookmarkScreen;
