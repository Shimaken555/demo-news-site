import React from 'react';
import Weather from './weather/weather';
import Category from './category/Category';

const Sidebar = () => {
  return (
    <>
      <Weather />
      <Category />
    </>
  );
};

export default Sidebar;
