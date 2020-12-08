import React from 'react';
import Quiz from '../utils/api'
import ReactAudioPlayer from 'react-audio-player';

class Playlist extends React.Component {
  state = {
    playlist: [],
  };

  componentDidMount() {
    const code = this.props.match.params.quizCode;
    const quizService = new Quiz();
    quizService.getSongs(code)
        .then((response) => {
            console.log(response.data);
            this.setState({
                playlist: response.data
            })
        })
  }

  render() {
    return (
      <div>
        <h1>Playlist display</h1>
        <div>
            <ul>
                {this.state.playlist.map((playlist, index) => {
                    return(
                        <div>
                        <li key={index}>{this.state.playlist[index].name}</li>
                        <ReactAudioPlayer src={this.state.playlist[index].preview_url} controls />
                        <li> <a href={this.state.playlist[index].href}>What's this</a></li>
                        </div>
                    )
                })}
            </ul>
        </div>
      </div>
    );
  }
}

export default Playlist;
