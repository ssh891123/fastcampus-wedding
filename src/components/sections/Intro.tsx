import classNames from 'classnames/bind'
import styles from './Intro.module.scss'
import Section from '@shared/Section'
import Text from '@shared/Text'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

const cx = classNames.bind(styles)

interface IntroProp {
  groomName: string
  brideName: string
  date: string
  location: string
  message: string
}

export default function Intro({
  groomName,
  brideName,
  date,
  location,
  message,
}: IntroProp) {
  return (
    <Section className={cx('container')}>
      <div className={cx('wrap-persons')}>
        <span>{groomName}</span>
        <IconHeart className={cx('ico-heart')} />
        <span>{brideName}</span>
      </div>
      <div className={cx('wrap-location')}>
        <span>
          {format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}
        </span>
        <span>{location}</span>
      </div>
      <Text>{message}</Text>
    </Section>
  )
}

function IconHeart({ className }: { className: string }) {
  return (
    <svg
      className={className}
      height="512px"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}
