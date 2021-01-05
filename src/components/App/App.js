import React, { useEffect, useState } from "react";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

import apiSearch from "../../services/api";

import "./App.css";

function App() {

const [searchQuery, setSearchQuery] = useState('');
const [loading, setLoading] = useState(false);
const [galleryItems, setGalleryItems] = useState([]);
const [page, setPage] = useState(1);
const [showModal, setShowModal] = useState(false);
const [largeImageURL, setLargeImageUrl] = useState('');
const [totalHits, setTotalHits] = useState(0);


useEffect(()=>{
  if(searchQuery === ''){
    return
  }
  fetchItems(searchQuery)
  setPage(prevPage => prevPage + 1)
  
}, [searchQuery])

  const onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
  setPage(prevPage => prevPage + 1)
  fetchItems(searchQuery, page)
  };

  const fetchItems = (query, page) => {
  setLoading(true)
    apiSearch
      .apiSearch(query, page)
      .then((data) => {
        const { hits, totalHits } = data;

        setGalleryItems([...galleryItems, ...hits])
        setTotalHits(totalHits)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
        onScroll();
      });
  };

  const handleSearchApi = (query) => {
    if(query !== searchQuery) {
    setSearchQuery(query)
    setGalleryItems([]);
  }
  return
  };

  const openModal = (itemsId) => {
    const itemId = galleryItems.find(({ id }) => id === itemsId);

    setLargeImageUrl(itemId.largeImageURL)
    setShowModal(true)
    
  };

  const closeModal = () => {

    setShowModal(false);
    setLargeImageUrl('')
  };

  return (
          <>
            <Searchbar onSubmit={handleSearchApi} />
            {showModal && (
              <Modal onCloseItem={closeModal} largeImageURL={largeImageURL} />
            )}
            {galleryItems.length > 0 && (
              <ImageGallery items={galleryItems} onItemClick={openModal} />
            )}
            {loading && <Loader />}
            {galleryItems.length > 0 &&
              !loading &&
              galleryItems.length !== totalHits && (
                <Button onClickBtn={nextPage} />
              )}
          </>
        );
}

export default App;
