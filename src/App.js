import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import styled from './style';
import { InView } from 'react-intersection-observer';

import MainTitle from './components/MainTitle';
import MainSearch from './components/MainSearch';
import ImgLists from './components/ImgLists';

const kakaoKey = 'KakaoAK f17d0ae4d1d2ec94f5d272fd59b55b7f';
const kakaoURL = 'https://dapi.kakao.com/v2/search/image';
const headerTitle = '다찾아 이미지검색';
const subTitle = 'feat. Kakao';
const kakaoParams = {
  params: { size: 80 },
  headers: { Authorization: kakaoKey },
};

const InViewStyled = styled(InView)`
  border: 1px solid red;
  height: 1em;
  margin-bottom: 1em;
`;

const App = () => {
  const [isEnd, setisEnd] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [searchPhoto, setSearchPhoto] = useState([]);

  const changeQuery = useCallback(
    async (value) => {
      try {
        setQuery(value);
        kakaoParams.params.query = value;
        kakaoParams.params.page = page;
        const { data } = await axios.get(kakaoURL, kakaoParams);
        setSearchPhoto([...searchPhoto, ...data.documents]);
      } catch (err) {
        console.log(err);
      }
    },
    [page, searchPhoto]
  );

  const onChange = useCallback(
    (inView, entry) => {
      if (inView) {
        setPage(page + 1);
        changeQuery(query);
      }
    },
    [changeQuery, page, query]
  );

  return (
    <div className="container">
      <MainTitle title={headerTitle} subTitle={subTitle} />
      <MainSearch changeQuery={changeQuery} />
      <ImgLists lists={searchPhoto} />
      <InViewStyled onChange={onChange} />
    </div>
  );
};

export default React.memo(App);
