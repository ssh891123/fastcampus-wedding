import classNames from 'classnames/bind'
import styles from './Accordion.module.scss'
import { PropsWithChildren, useState } from 'react'

const cx = classNames.bind(styles)

interface Accordion {
  label: string
}

export default function Accordion({
  label,
  children,
}: PropsWithChildren<Accordion>) {
  const [expended, setExpended] = useState(false)

  return (
    <div className={cx(['wrap-accordion', expended ? 'open' : ''])}>
      <div className={cx('wrap-header')}>
        <span>{label}</span>
        <IconArrowDown className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

function IconArrowDown({ className }: { className: string }) {
  return (
    <svg className={className} version="1.1" viewBox="0 0 512 512">
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  )
}
