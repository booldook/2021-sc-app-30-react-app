import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const photoURL = 'https://jsonplaceholder.typicode.com/photos';
  const [allPhoto, setAllPhoto] = useState([]);
  const [searchPhoto, setSearchPhoto] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(photoURL);
        setAllPhoto(data);
        setSearchPhoto(data);
        return () => {};
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return <div>Hello world</div>;
};

export default App;
