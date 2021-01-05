import { useState, useEffect } from 'react';

import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import ApiService from './apiService/';
import Loader from 'react-loader-spinner';
import Modal from './Components/Modal';

function App() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [largeImageSrc, setLargeImageSrc] = useState(null);
  const [error, setError] = useState(null);

  const addSearchbarValue = query => {
    setSearchQuery(query);
    setPictures([]);
    setPage(1);
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [pictures]);

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }
    setLoading(true);
    ApiService(searchQuery, page)
      .then(picture => {
        setPictures(prevState => [...prevState, ...picture]);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [searchQuery, page]);

  const openModal = url => {
    setLargeImageSrc(url);
  };
  const closeModal = () => {
    setLargeImageSrc('');
  };

  return (
    <>
      <Searchbar onSubmit={addSearchbarValue} />
      {pictures.length > 0 && !error && (
        <ImageGallery pictures={pictures} openImage={openModal} />
      )}
      {loading && <Loader />}
      {pictures.length !== 0 && !loading && (
        <Button onClick={() => setPage(prevState => prevState + 1)} />
      )}
      {largeImageSrc && (
        <Modal largeImage={largeImageSrc} closeImage={closeModal} />
      )}
    </>
  );
}

export default App;
