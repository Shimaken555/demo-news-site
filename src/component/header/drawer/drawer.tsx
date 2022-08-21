import React, { useContext } from 'react';
import { handleCategoryContext } from '../../main/homeScreen';
import styles from './drawer.module.scss';
import { Visible } from '../../../types';
import { categoryList } from '../../CategoryList';

const Drawer: React.FC<Visible> = ({ visible, setVisible }) => {
  const { category, handleCategory } = useContext(handleCategoryContext);

  console.log(category);

  return (
    <div className={styles.drawer}>
      <div className={
          visible ? `${styles.displayed__drawer}` : `${styles.undisplayed__drawer}`
        }
      >
        <ul className={styles.drawer__ul}>
          {categoryList.map((list, index) => (
            <li
              key={index}
              onClick={() => {
                handleCategory(list as string);
                setVisible(!visible);
              }}
              className={
                category === list
                  ? `${styles.displayed}`
                  : `${styles.undisplayed}`
              }
            >
              <span>{list}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
