import React, { useCallback } from 'react';
import { styled, color, size, font, media, flex } from '../style';

import List from './List';

const Lists = ({ lists }) => {
  return (
    <ul>
      {lists.map((v, i) => (
        <List list={v} key={i} />
      ))}
    </ul>
  );
};

export default React.memo(Lists);
