import { useState } from "react"
import GoogleMapReact from "google-map-react"
import LocationMarker from "./LocationMarker"
import LocationInfoBox from "./LocationInfoBox"

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)
  const [newCenter, setNewCenter] = useState(center)

  const handleClick = (ev) => {
    setLocationInfo({ id: ev.id, title: ev.title })
    setNewCenter({
      lat: ev.geometries[0].coordinates[1],
      lng: ev.geometries[0].coordinates[0],
    })
  }

  const markers = eventData.map((ev) => {
    if (!Array.isArray(ev.geometries[0].coordinates[0])) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          category={ev.categories[0].id}
          onClick={() => handleClick(ev)}
        />
      )
    }
    return null
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCiPDBI-qFR8OvYDiwJvS9IBNaAPaJEZdw" }}
        defaultCenter={center}
        defaultZoom={zoom}
        center={newCenter}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 23.6978,
    lng: 122.9605,
  },
  zoom: 6,
}

export default Map
