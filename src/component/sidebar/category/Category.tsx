import React, { useContext } from 'react';
import { handleCategoryContext } from '../../main/homeScreen';
import styles from './Category.module.scss';
import { categoryList } from '../../CategoryList';

const Category: React.FC = () => {
  const { category, handleCategory } = useContext(handleCategoryContext);
  return (
    <div className={styles.category}>
      {categoryList.map((list, index) => (
        <li
          key={index}
          onClick={() => handleCategory(list as string)}
          className={
            category === list ? `${styles.displayed}` : `${styles.undisplayed}`
          }
        >
          <span>{list}</span>
        </li>
      ))}
    </div>
  );
};

export default Category;
