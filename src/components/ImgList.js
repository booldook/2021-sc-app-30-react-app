import React from 'react';
import styled, { flex, color, media, size } from '../style';

const List = styled.li`
  width: 19%;
  margin-right: 1%;
  @media ${media.lg} {
    width: 24%;
  }
  @media ${media.md} {
    width: 32.3333%;
  }
  @media ${media.sm} {
    width: 49%;
  }
  @media ${media.xs} {
    width: 99%;
  }
`;

const ImgList = ({ list }) => {
  return (
    <List>
      <img src={list.thumbnail_url} className="w-100" alt="" />
    </List>
  );
};

export default React.memo(ImgList);
