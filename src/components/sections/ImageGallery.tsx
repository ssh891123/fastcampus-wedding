import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'
import Section from '@shared/Section'
import ImageView from '@components/ImageViewer'
import { useState } from 'react'

const cx = classNames.bind(styles)

export default function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx > -1

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(idx)
              }}
            >
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img src={`${src}.jpg`} alt="이미지" />
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageView
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}
