import { useState, useEffect } from 'react';
import axios from 'axios';

import Title from './components/Title';
import Search from './components/Search';

const App = () => {
  const photoURL = 'https://dapi.kakao.com/v2/search/image';
  const headerTitle = '다찾아 이미지검색';
  const subTitle = 'feat. Kakao';
  const [allPhoto, setAllPhoto] = useState([]);
  const [searchPhoto, setSearchPhoto] = useState([]);

  const changeQuery = async (value) => {
    console.log(value);
    // await axios.get(photoURL);
  };

  return (
    <div className="container">
      <Title title={headerTitle} subTitle={subTitle} />
      <Search changeQuery={changeQuery} />
    </div>
  );
};

export default App;
