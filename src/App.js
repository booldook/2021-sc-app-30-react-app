import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

import MainTitle from './components/MainTitle';
import MainSearch from './components/MainSearch';
import ImgLists from './components/ImgLists';

const kakaoKey = 'KakaoAK f17d0ae4d1d2ec94f5d272fd59b55b7f';
const kakaoURL = 'https://dapi.kakao.com/v2/search/image';
const headerTitle = '다찾아 이미지검색';
const subTitle = 'feat. Kakao';
const kakaoParams = {
  params: { size: 50 },
  headers: { Authorization: kakaoKey },
};

const App = () => {
  const [allPhoto, setAllPhoto] = useState([]);
  const [searchPhoto, setSearchPhoto] = useState([]);

  const changeQuery = useCallback(async (value) => {
    try {
      kakaoParams.params.query = value;
      const { data } = await axios.get(kakaoURL, kakaoParams);
      setAllPhoto(data.documents);
      setSearchPhoto(data.documents);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container">
      <MainTitle title={headerTitle} subTitle={subTitle} />
      <MainSearch changeQuery={changeQuery} />
      <ImgLists lists={searchPhoto} />
    </div>
  );
};

export default React.memo(App);
