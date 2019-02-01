import React, { Component, Fragment } from 'react';

import Map from './map/map';
import { NearbyPits } from './../../components';
import texts from './../../helper/texts';

class IndexPage extends Component {
  state = {
    pits: [],
    lat: '',
    lng: '',
  };

  regionFiltered = pits =>
    this.nearby.updatePeople(pits);

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lat = this.state.lat) {
      setTimeout(() => {
        const { lat, lng } = this.state;
        const showPosition = position =>
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(showPosition);
      }, 1000);
    }
  }

  componentDidMount() {
    const showPosition = async position =>
      await this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        pits: texts.pits
      });
    navigator.geolocation &&
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  render() {
    const { pits, lat, lng } = this.state;
    const position = {
      lat: lat,
      lng: lng,
    }

    return (
      <main className="container-fluid position-absolute h-100 bg-light">
        <div className="row position-absolute w-100 h-100">
          <section className="col-md-9 px-0 border-right border-gray position-relative h-100">
            <Map
              position={position}
              radius={1000}
              pits={pits}
              onRegionFiltered={this.regionFiltered}
            />
          </section>

          <section className="col-md-3 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
            <NearbyPits
              ref={elem => (this.nearby = elem)}
              person={ position }
            />
          </section>
        </div>
      </main>
    );
  }
}

export default () => <IndexPage />;
