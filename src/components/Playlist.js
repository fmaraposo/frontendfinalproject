import React from 'react';
import Quiz from '../utils/api';
/* import ReactAudioPlayer from 'react-audio-player'; */
import SpotifyPlayer from 'react-spotify-player';
import {withRouter} from 'react-router-dom'

class Playlist extends React.Component {
  state = {
    playlist: [],
  };

  componentDidMount() {
    const code = this.props.match.params.quizCode;
    let userToken = this.props.loggedInUser.accessToken
    const quizService = new Quiz();
    quizService.getSongs(code, userToken).then((response) => {
      console.log(response.data);
      this.setState({
        playlist: response.data,
      });
    });
  }

  render() {
    const size = {
      width: '100%',
      height: 300,
    };

    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'

    const spotifyUri =[ "spotify:track:3bWGaqVeYKMlLss40mPgNn", "spotify:track:7iN1s7xHE4ifF5povM6A48"]

    return (
      <div>
        <h1>Playlist display</h1>
        <div>
          <ul>
            {this.state.playlist.map((playlist, index) => {
              return (
                <div>
                  <li key={index}>{this.state.playlist[index].name}</li>
                  {/* <ReactAudioPlayer src={this.state.playlist[index].preview_url} controls /> */}
                  <SpotifyPlayer
                    uri={spotifyUri}
                    size={size}
                    view={view}
                    theme={theme}
                  />
                  <li>
                    <a href={this.state.playlist[index].href}>What's this</a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Playlist);
