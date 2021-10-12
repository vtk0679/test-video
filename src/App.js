import './App.css';
import React from 'react';
import video from './1.mp4';
import videoHeader from './2.mp4';
import videoFooter from './3.mp4';
import ReactPlayer from 'react-player';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';

class App extends React.Component {
  state = {
    player: null,
    value: 0,
    seekTo: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const scroll = window.scrollY - 1084;
    const height = 1700;
    if (scroll > 0) this.onSeek(scroll / height);
  };

  ref = player => {
    this.setState({ player });
  };

  onSeek = value => {
    this.setState({ value });
    if (
      value - this.state.seekTo > 0.035 ||
      value - this.state.seekTo < -0.035
    ) {
      if (value > 0.99) value = 0.99;
      if (value < 0.04) value = 0;
      this.setState({ seekTo: value });
      this.state.player.seekTo(value);
    }
  };

  render() {
    return (
      <>
        <div></div>
        <div className="App">
          <ReactPlayer
            className="player__header"
            width="100%"
            height="100%"
            url={videoHeader}
            playing={true}
            muted={true}
            loop={true}
          />
          {/* <img className="img1" src={logo1} alt="img" /> */}
          <h1 className="title_big">
            Our small company,
            <br /> The complement to your success!
          </h1>
          <p className="main_text">
            Welcome to PFZ-Peuker, <br />
            we invite you to get to know our company.
          </p>
          <img className="img2" src={logo2} alt="img" />

          <section className="section">
            <h2 className="mainTitle">
              The foundations for this success are based on:
            </h2>
            <div className="container">
              <div className="containerVideo">
                <ReactPlayer
                  className="player"
                  ref={this.ref}
                  width="1312px"
                  height="540px"
                  url={video}
                  file={{ forceHLS: true }}
                  muted={true}
                />
              </div>
              <div className="containerText">
                <div className="main">
                  <div>
                    <h3 className="title">Fast response times</h3>
                    <p className="text">
                      We react quickly to your concerns with our top management
                      and realize them immediately due to short instance ways.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>

                  <div>
                    <h3 className="title">Flexibility</h3>
                    <p className="text">
                      We have the flexibility to change policies depending on
                      the need of the hour: ♦ to change ♦ to bend and ♦ to make
                      decisions immediately. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </div>

                  <div>
                    <h3 className="title">Personal attention</h3>
                    <p className="text">
                      Our customers get time and attention and this equals the
                      foundation of a successful business. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </div>

                  <div>
                    <h3 className="title">Specialization</h3>
                    <p className="text">
                      Highly qualified personnel will manufacture your demanding
                      workpieces on our state-of-the-art CNC machining centers
                      with the highest precision and care. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ReactPlayer
            className="player__footer"
            width="100%"
            height="100%"
            url={videoFooter}
            playing={true}
            muted={true}
            loop={true}
          />
        </div>
      </>
    );
  }
}

export default App;
