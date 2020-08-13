/* eslint-disable import/prefer-default-export */
import spotify from './Spotify';
import renderAlbums from './albumList';

const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

const makeRequest = () => {
  spotify.search.albums(searchInput.value)
    .then((data) => renderAlbums(data.albums.items, albumList));
};

export default function searchTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    makeRequest();
  });
}
