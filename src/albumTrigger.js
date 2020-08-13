import spotify from './Spotify';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumTracks';

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

const makeRequest = (albumId) => {
  spotify.album.getAlbum(albumId)
    .then((data) => renderAlbumInfo(data, albumInfo))
    .then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
};

export default function albumTrigger() {
  listAlbums.addEventListener('click', (e) => {
    makeRequest(e.target.getAttribute('data-album-id'));
  });
}
