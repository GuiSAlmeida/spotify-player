/* eslint-disable no-console */
import spotify from './Spotify';
import renderAlbums from './albumList';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumTracks';

const albums = spotify.search.albums('incubus');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

albums.then((data) => renderAlbums(data.albums.items, albumList));

album
  .then((data) => renderAlbumInfo(data, albumInfo))
  .then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
