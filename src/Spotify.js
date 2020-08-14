/* eslint-disable import/no-extraneous-dependencies */
import SpotifyWrapper from 'spotify-wrapper';

// const getToken = () => fetch('https://accounts.spotify.com/api/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     Authorization: `Basic ${btoa(
//       'c57ce82bc3f744c9a1182def155edf76:7c9b5198ff1e443bb08e72ffc537843d'
//     )}`,
//   },
//   body: 'grant_type=client_credentials',
// }).then((data) => data.json())
//   .then((result) => console.log(result.access_token));
// getToken();

const spotify = new SpotifyWrapper({
  token: 'BQAIUwZjJJqSOZMbjotSY2bS7ZHXjZeIQLiuURpQK7cG6D-zczmhaa0LhmCjJlrF0dx7GmBgAQzr-5OjGfI',
});

export default spotify;
