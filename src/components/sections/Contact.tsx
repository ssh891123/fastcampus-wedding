import classNames from 'classnames/bind'
import styles from './Contact.module.scss'

import Section from '@shared/Section'
import Accordion from '../shared/Accordion'

const cx = classNames.bind(styles)

export default function Contact() {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Accordion label="신랑측">신랑 신랑 신랑 신랑 신랑</Accordion>
      <Accordion label="신부측">신부 신부 신부 신부 신부</Accordion>
    </Section>
  )
}
