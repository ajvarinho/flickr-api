import { React, useState, useEffect } from "react";
import "/home/user/flickr-api/src/App.css";
import Container from "./components/Container";
//const api_key = "d0ea9a9fa35e27a24d8b57f7637ef300";

const FAVOURITES_STORE_KEY = 'favourite_photos'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  // Favourites

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favs = localStorage.getItem(FAVOURITES_STORE_KEY);
    setFavourites(favs ? JSON.parse(favs) : []);
  }, [])

  const toggleFavourite = (photo) => {
    const index = favourites.indexOf(photo.id)
    if (index === -1) {
      favourites.push(photo.id)
    } else {
      favourites.splice(index, 1)
    }
    setFavourites(favourites)
    localStorage.setItem(FAVOURITES_STORE_KEY, JSON.stringify(favourites));
    setData([...data])
  };

  useEffect(() => {
    getData(true)
  }, [])

  useEffect(() => {
    if (loadMore) {
      getData(loadMore);
      setLoadMore(false);
    }
  }, [loadMore]);

  const getData = (load) => {
    if (load) {
      fetch(
        //STAVIO 24 KAO LOAD"
        `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=d0ea9a9fa35e27a24d8b57f7637ef300&per_page=24&page=${pageNo}&format=json&nojsoncallback=1`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            if (pageNo > 1) {
              let arr = [...data, ...result.photos.photo];
              setData(arr);
            } else {
              setData(result.photos.photo);
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  };


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }


  const handleScroll = (e) => {
    let bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 100;
    if (data.length !== 0 && bottom) {
      let pg = pageNo + 1;
      setPageNo(pg);
      setLoadMore(true);
    } else if (!setLoadMore) {
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      );
    }
  }

  return (
    <div className="grid-container" id="container" onScroll={handleScroll}>
      {data.map((photo, index) => {
        return <Container key={photo.id} photo={photo} infavourites={favourites.indexOf(photo.id) !== -1} toggleFavourite={toggleFavourite} />;
      })}
    </div>
  );
}

export default App;


