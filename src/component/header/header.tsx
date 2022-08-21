import React, { useState } from 'react';
import styles from './header.module.scss';
import Drawer from './drawer/drawer';
import { Props } from '../../types';
import BookmarkLink from './link/bookmarkLink';
import HomeLink from './link/homeLink';

const Header: React.FC<Props> = ({ screen }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <header className={styles.header}>
        <h1>Demo News Site</h1>
        <div className={styles.header__bookmark}>
          {screen === 'home' ? <BookmarkLink /> : <HomeLink />}
        </div>
        {screen === 'home' && (
          <nav
            className={styles.header__nav}
            onClick={() => setVisible(!visible)}
          >
            <div className={styles.header__open}>
              <span className={styles.header__open__bar}></span>
              <span className={styles.header__open__bar}></span>
              <span className={styles.header__open__bar}></span>
            </div>
          </nav>
        )}
      </header>
      <Drawer visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Header;
