import React, { Fragment, Component } from 'react';
import { Marker, Circle } from 'react-google-maps';

class UserMarker extends Component {

  render() {
    //console.log('this.props', this.props);
    const { radius, position } = this.props;
    const regionOptions = { fillOpacity: 0.1, strokeWidth: 1, strokeOpacity: 0.2 };

    const MARKER_SIZE = new google.maps.Size(50, 70);
    const MARKER_ICON = 'https://i.imgur.com/Rhv5xQh.png';

    return (
      <Fragment>
        <Marker position={position} title="You" options={{ icon: { url: MARKER_ICON, scaledSize: MARKER_SIZE } }} />
        <Circle center={position} radius={radius} options={regionOptions} />
      </Fragment>
    );
  }

};

export default UserMarker;
