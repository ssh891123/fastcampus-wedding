import classNames from 'classnames/bind'
import styles from './Map.module.scss'

import Section from '@shared/Section'
import { useEffect, useRef } from 'react'
import { Location } from '@models/wedding'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    kakao: any
  }
}

export default function Map({ location }: { location: Location }) {
  const mapContainer = useRef(null)
  useEffect(() => {
    const script = document.createElement('script')
    //autoload를 false로 둬서 원하는 시점에 load 해오기 위함
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`

    script.async = true

    document.head.appendChild(script)
    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3,
        }

        const marker = new window.kakao.maps.Marker({
          position,
        })
        const map = new window.kakao.maps.Map(mapContainer.current, options)
        marker.setMap(map)
      })
    }
  }, [location])

  return (
    <Section>
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer}></div>
      </div>
    </Section>
  )
}
