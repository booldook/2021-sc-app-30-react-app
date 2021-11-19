import React from 'react';

const List = ({ list }) => {
  return (
    <li>
      <img src={list.thumbnail_url} className="w-100" alt="" />
    </li>
  );
};

export default List;
