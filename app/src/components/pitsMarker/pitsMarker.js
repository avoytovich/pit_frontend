import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

const BLACK_MARKER = 'https://i.imgur.com/8dOrls4.png?2';
const GREEN_MARKER = 'https://i.imgur.com/9v6uW8U.png';

class PitsMarker extends Component {

  render() {
    //console.log('this.props', this.props);
    const { position, pit, radius, withinRegion = f => f, } = this.props;

    const within = !!withinRegion(pit)(position, radius);
    const MARKER_SIZE = new google.maps.Size(25, 35);
    const MARKER_ICON = within ? GREEN_MARKER : BLACK_MARKER;

    return (
      <Marker
        position={pit}
        title={'PIT'}
        options={{ icon: { url: MARKER_ICON, scaledSize: MARKER_SIZE } }}
      />
    );
  }
}

export default PitsMarker;
