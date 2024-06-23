import classNames from 'classnames/bind'
import styles from './Contact.module.scss'

import Section from '@shared/Section'
import Accordion from '@shared/Accordion'

import { Person, Wedding } from '@models/wedding'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

export default function Contact({
  groom,
  bride,
}: {
  groom: Wedding['groom']
  bride: Wedding['bride']
}) {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Accordion label="신랑측">
        <ContactInfo
          name={groom.name}
          phoneNumber={groom.phoneNumber}
          account={groom.account}
        ></ContactInfo>
        <ContactInfo
          name={groom.parents[0].name}
          phoneNumber={groom.parents[0].phoneNumber}
          account={groom.parents[0].account}
        ></ContactInfo>
        <ContactInfo
          name={groom.parents[1].name}
          phoneNumber={groom.parents[1].phoneNumber}
          account={groom.parents[1].account}
        ></ContactInfo>
      </Accordion>
      <Accordion label="신부측">
        <ContactInfo
          name={bride.name}
          phoneNumber={bride.phoneNumber}
          account={bride.account}
        ></ContactInfo>
        <ContactInfo
          name={bride.parents[0].name}
          phoneNumber={bride.parents[0].phoneNumber}
          account={bride.parents[0].account}
        ></ContactInfo>
        <ContactInfo
          name={bride.parents[1].name}
          phoneNumber={bride.parents[1].phoneNumber}
          account={bride.parents[1].account}
        ></ContactInfo>
      </Accordion>
    </Section>
  )
}

function ContactInfo({ name, phoneNumber, account }: Person) {
  return (
    <div className={cx('wrap-content')}>
      {/* 정보 표현 */}
      <div className={cx('wrap-contact-info')}>
        <span>{`${account.bankName} | ${account.accountNumber}`}</span>
        <span>{name}</span>
      </div>
      {/* 버튼들 */}
      <ul className={cx('wrap-buttons')}>
        <li>
          <a href={`tel: ${phoneNumber}`} className={cx('button')}>
            전화
          </a>
        </li>
        <li>
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => {
              alert('복사가 완료되었습니다.')
            }}
          >
            <button className={cx('button')}>복사</button>
          </CopyToClipboard>
        </li>
        {account.kakaopayLink ? (
          <li>
            <a
              className={cx('button')}
              href={account.kakaopayLink}
              target="_blank"
              rel="noreferrer"
            >
              송금
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  )
}
