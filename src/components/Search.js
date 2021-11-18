import { useRef, useState, useEffect } from 'react';
import '../scss/Search.scss';

const Search = ({ changeQuery }) => {
  const placeholder = '이미지 검색';
  const queryRef = useRef(null);
  const [query, setQuery] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    changeQuery(queryRef.current.value);
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const onClick = (e) => {
    setQuery('');
    changeQuery('');
  };
  /* useEffect(() => {
    changeQuery(query);
  }, [query]); */
  return (
    <form className="search-wrapper" onSubmit={onSubmit}>
      <div className="search-wrap">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder={placeholder}
          autoFocus
          ref={queryRef}
          onChange={onChange}
          value={query}
        />
        {query.length ? (
          <i className="fa fa-times-circle bt-remove" onClick={onClick} />
        ) : (
          ''
        )}
      </div>
      <button className="btn btn-lg btn-warning bt-submit">이미지 검색</button>
    </form>
  );
};

export default Search;
