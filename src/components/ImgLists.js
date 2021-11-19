import React, { useCallback } from 'react';
import styled, { color, size, font, media, flex } from '../style';

import List from './ImgList';

const ListWrap = styled.ul`
  ${flex({ w: 'wrap' })};
  width: 101%;
  font-family: ${font.noto};
  color: ${color.dark};
  margin: 1.5em 0;
`;

const ImgLists = ({ lists }) => {
  return (
    <ListWrap>
      {lists.map((v, i) => (
        <List list={v} key={i} />
      ))}
    </ListWrap>
  );
};

export default React.memo(ImgLists);
