import './App.css';
import React from 'react';
import video from './1.mp4';
import ReactPlayer from 'react-player';

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
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    this.onSeek(winScroll / height);
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
      this.state.player.seekTo(this.state.seekTo);
    }
  };

  render() {
    return (
      <div className="App">
        <ReactPlayer
          className="player"
          ref={this.ref}
          width="1000px"
          height="100%"
          url={video}
          file={{ forceHLS: true }}
          muted={true}
        />
<div id="about" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row full-width-section  " style="padding-top: 0px; padding-bottom: 0px; "><div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg using-bg-color" style="background-color: #e6e8ec; "></div></div></div><div class="row_col_wrap_12 col span_12 dark left">
	<div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div class="vc_column-inner">
			<div class="wpb_wrapper">
				<div id="fws_61642fe87dfb4" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row  " style="padding-top: 10%; padding-bottom: 0%; "><div class="row-bg-wrap"> <div class="row-bg"></div> </div><div class="row_col_wrap_12_inner col span_12  left">
	<div class="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div class="vc_column-inner">
		<div class="wpb_wrapper">
			
<div class="wpb_text_column wpb_content_element ">
	<div class="wpb_wrapper">
		<h2 style="text-align: center;"><span style="color: #000000;">The foundations for this success are based on:</span></h2>
	</div>
</div>




		</div> 
	</div>
	</div> 
</div></div><div id="fws_61642fe87e5fc" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row  " style="padding-bottom: 10%; "><div class="row-bg-wrap"> <div class="row-bg"></div> </div><div class="row_col_wrap_12_inner col span_12  left">
	<div style="margin-bottom: -30px; " class="vc_col-sm-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div class="vc_column-inner">
		<div class="wpb_wrapper">
			
	<div class="wpb_raw_code wpb_content_element wpb_raw_html">
		<div class="wpb_wrapper">
			<div id="set-height" class="scroll-animation-long dark" style="height: 3024px;position: relative;right: 215px;top: 50px;">

<video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload" playsinline="" autoplay="" muted="" style="visibility: visible;width: 82em;bottom: 89px;top: 245px;position: sticky;">
<source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/wp-content/uploads/2021/10/PFZ_MCutter_Anim_Draft_001.mp4"/>
  <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
</video> 
</div>
		</div>
	</div>

		</div> 
	</div>
	</div> 

	<div style=" color: #000000;" class="vc_col-sm-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone " data-cfc="true" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div class="vc_column-inner">
		<div class="wpb_wrapper">
			<div class="divider-wrap" data-alignment="default"><div style="height: 50px;" class="divider"></div></div><div class="iwithtext"><div class="iwt-icon"> <img src="http://pfz.profi-hub.com/wp-content/uploads/2021/08/Time.svg" alt=""/> </div><div class="iwt-text"> 
<h3>Fast response times</h3>
<h5>We react quickly to your concerns with our top management and realize them immediately due to short instance ways.</h5>
<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
<h5>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
 </div><div class="clear"></div></div><div class="divider-wrap" data-alignment="default"><div style="height: 100px;" class="divider"></div></div><div class="iwithtext"><div class="iwt-icon"> <img src="http://pfz.profi-hub.com/wp-content/uploads/2021/08/road-sign.svg" alt=""/> </div><div class="iwt-text"> 
<h3><span style="color: #000000;">Flexibility</span></h3>
<h5>We have the flexibility to change policies depending on the need of the hour: ♦ to change ♦ to bend and ♦ to make decisions immediately.</h5>
<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
<h5>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
 </div><div class="clear"></div></div><div class="divider-wrap" data-alignment="default"><div style="height: 100px;" class="divider"></div></div><div class="iwithtext"><div class="iwt-icon"> <img src="http://pfz.profi-hub.com/wp-content/uploads/2021/08/hospitality.svg" alt=""/> </div><div class="iwt-text"> 
<h3><span style="color: #000000;">Personal attention</span></h3>
<h5>Our customers get time and attention and this equals the foundation of a successful business.</h5>
<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
<h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
 </div><div class="clear"></div></div><div class="divider-wrap" data-alignment="default"><div style="height: 100px;" class="divider"></div></div><div class="iwithtext"><div class="iwt-icon"> <img src="http://pfz.profi-hub.com/wp-content/uploads/2021/08/milling-machine.svg" alt=""/> </div><div class="iwt-text"> 
<h3><span style="color: #000000;">Specialization</span></h3>
<h5>Highly qualified personnel will manufacture your demanding workpieces on our state-of-the-art CNC machining centers with the highest precision and care.</h5>
<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
<h5>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
 </div><div class="clear"></div></div>
		</div> 
	</div>
	</div> 
</div></div>
			</div> 
		</div>
	</div> 
</div></div>
      </div>
    );
  }
}

export default App;
