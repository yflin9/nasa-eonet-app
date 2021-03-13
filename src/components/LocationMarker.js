import { Icon } from "@iconify/react"
import fireIcon from "@iconify/icons-mdi/fire"
import tornadoIcon from "@iconify-icons/noto-v1/tornado"
import volcanoIcon from "@iconify-icons/maki/volcano-15"
import icebergIcon from "@iconify-icons/openmoji/iceberg"

const LocationMarker = ({ lat, lng, category, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      {category === 8 ? (
        <Icon icon={fireIcon} className="fire-icon" />
      ) : category === 10 ? (
        <Icon icon={tornadoIcon} className="tornado-icon" />
      ) : category === 12 ? (
        <Icon icon={volcanoIcon} className="volcano-icon" />
      ) : category === 15 ? (
        <Icon icon={icebergIcon} className="iceberg-icon" />
      ) : null}
    </div>
  )
}

export default LocationMarker
