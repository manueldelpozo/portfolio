import React, { PureComponent } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


/*
const styles = [
  {
    stylers: [
      { hue: "#00ffe5" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "administrative.country",
    elementType: "labels.text",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "administrative.locality",
    elementType: "labels.text",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      { visibility: "off" }
    ]
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "geometry",
    stylers: [
      { visibility: "off" }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      { color: "#009999" },
      { visibility: "on" }
    ]
  }
]

const styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"})

const mapProp = {
  center:new google.maps.LatLng(52,2),
  zoom:4,
  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'],
  mapTypeControl: false,
  panControl: false,
  zoomControl: false,
  scaleControl: false,
  streetViewControl: false
} */

class MapContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.markers = [
      {
        "city": "Clermont-Ferrand",
        "lat": 45.777222,
        "lng": 3.087025,
        "info": "<strong>WEB DESIGNER </strong><br> AU 10 ET DÉCO - CLERMONT FERRAND - 2011",
        "icon": "icons/maps/works-au10etdeco.png"
      },
      {
        "city": "Murcia",
        "lat": 37.992240,
        "lng": -1.130654,
        "info": "<strong>UI/UX DESIGNER AND FRONT-END DEVELOPER </strong><br> QUESERADEMI (STARTUP) - MURCIA - 2012/18",
        "icon": "icons/maps/works-qsdm.png"
      },
      {
        "city": "Berlin",
        "lat": 52.520007,
        "lng": 13.404954,
        "info": "<strong>WEB DEVELOPER </strong><br> GO-POPUP - BERLIN - 2015",
        "icon": "icons/maps/works-gopopup.png"
      },
      {
        "city": "Leszno",
        "lat": 51.829760,
        "lng": 16.597281,
        "info": "<strong>JAVASCRIPT UI DEVELOPER </strong><br> C&C TECHNOLOGY - LESZNO - 2015/16",
        "icon": "icons/maps/works-cctechnology.png"
      },
      {
        "city": "Madrid",
        "lat": 40.416775,
        "lng": -3.703790,
        "info": "FRONT-END DEVELOPER__BANKIA (GFT GROUP)__MADRID__2017",
        "icon": "icons/maps/works-bankia.png"
      },
      {
        "city": "Brussels",
        "lat": 50.8503396,
        "lng": 4.3517103,
        "info": "FRONT-END DEVELOPER__ING BANK (COGNIZANT)__BRUSSELS__2017/18",
        "icon": "icons/maps/works-ing.png"
      }
    ]
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 4
    }
    
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClick = this.onMapClick.bind(this)
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const markers = this.markers.map(marker => (
      <Marker position={[marker.lat, marker.lng]} key={`marker_${marker.name}`}>
        <Popup>
          <span>{marker.city}</span>
        </Popup>
      </Marker>
    ));

    return (
      <div className="map">
        <Map center={[this.state.lat, this.state.lng]} zoom={this.state.zoom} className="map__reactleaflet">
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          {markers}
        </Map>
      </div>
    );
  }
}

export default MapContainer;