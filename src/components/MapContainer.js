import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import './../../node_modules/leaflet/dist/leaflet.css'

class MapContainer extends PureComponent {
  constructor(props) {
    super(props)
    props.places.map(place => this[place.location.city] = React.createRef())
    this.state = {
      lat: 47,
      lng: 5,
      zoom: 4,
      places: props.places
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.state.places.map(place => {
        const iconEl = this[place.location.city].current.leafletElement._icon
        iconEl.setAttribute('src', iconEl.getAttribute('src').split('")')[0])
      })
    }, 0)
  }

  render() {
    const markers = this.state.places.map(place => (
      <Marker position={[place.location.lat, place.location.lng]} 
              key={`marker_${place.location.city}`}
              ref={this[place.location.city]}>
        <Popup className="App-map__marker-popup">
          <img src={require(`./../assets/${place.icon}`)} height="auto" width="50" alt={place.title} />
          <Typography align="center" color="primary" paragraph>{place.location.city}</Typography>
        </Popup>
      </Marker>
    ))

    return (
      <div className="App-map">
        <Map center={[this.state.lat, this.state.lng]} zoom={this.state.zoom} className="map__reactleaflet">
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          {markers}
        </Map>
      </div>
    )
  }
}

MapContainer.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object)
}

export default MapContainer