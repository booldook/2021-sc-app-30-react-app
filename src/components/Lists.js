import React, { useCallback } from 'react';
import styled, { color, size, font, media, flex } from '../style';

import List from './List';

const ListWrap = styled.ul`
  ${flex({ w: 'wrap' })};
  font-family: ${font.noto};
  color: ${color.dark};
`;

const Lists = ({ lists }) => {
  return (
    <ListWrap>
      {lists.map((v, i) => (
        <List list={v} key={i} />
      ))}
    </ListWrap>
  );
};

export default React.memo(Lists);
