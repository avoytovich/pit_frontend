import React, { Fragment, Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps';
import { UserMarker, PitsMarker } from './../../../../components';

class MapContainer extends Component {
  withinRegion = (position, radius) => {
    const to = new google.maps.LatLng(position.lat, position.lng);
    const distance = google.maps.geometry.spherical.computeDistanceBetween;

    return point => {
      if (!point) return null;
      const from = new google.maps.LatLng(point.lat, point.lng);
      return distance(from, to) <= radius;
    };
  };

  analyzeRegion = (position, radius) => pits => {
    const { onRegionFiltered = f => f } = this.props;
    const withinRegion = this.withinRegion(position, radius);

    const mappedPits = pits.map(pit => {
      const within = withinRegion(pit);
      return { ...pit, within };
    });
    onRegionFiltered(mappedPits);
  };

  componentDidMount() {
    const {
      position,
      radius,
      pits = [],
    } = this.props;

    this.analyzeRegion(position, radius)(pits);
  }

  render() {
    //console.log('this.props', this.props);
    const {
      position,
      radius,
      pits,
    } = this.props;

    return (
      <GoogleMap ref={elem => (this.map = elem)} zoom={15} center={position}>
        <Fragment>
          <UserMarker radius={radius} position={position} />
          {pits.map((pit, index) => {
            const props = { key: index, radius, pit };
            const withinRegion = point => (position, radius) =>
              this.withinRegion(position, radius)(point);

            return (
              <PitsMarker
                key={index}
                position={position}
                withinRegion={withinRegion}
                {...props}
              />
            );
          })}
        </Fragment>
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(MapContainer));
