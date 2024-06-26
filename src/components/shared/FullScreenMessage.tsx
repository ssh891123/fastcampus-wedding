import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}
function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Loading />
      ) : (
        <>
          에러가 발생했어요. 잠시 후에 다시 시도해주세요.
          <Error />
        </>
      )}
    </div>
  )
}

function Loading() {
  return (
    <svg
      className={cx('ico-loading')}
      id="Flat"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
            .cls-1{fill:#e84857;}
            .cls-2{fill:#fe4f60;}
            .cls-3{fill:#ff6d7a;}
            .cls-4{fill:#cc3f4c;}
          `}
        </style>
      </defs>
      <title />
      <g data-name="21. Organ heart" id="_21._Organ_heart">
        <path
          className="cls-1"
          d="M237.43,96.68c-1-.2-1.93-.37-2.9-.54C235.5,96.31,236.47,96.48,237.43,96.68Z"
        />
        <path
          className="cls-1"
          d="M412.59,172.94a26.68,26.68,0,0,1-21.18,25.63c-9.44,2.07-21.1,4.58-32.94,7.11,34.8,75.22,21.88,158.91-28.63,221.57l-.16-.12c-12.23,19.2-47.91,61.29-91,60.87-74.53-.73-116.13-105.36-123.59-124.12a233,233,0,0,1-11.75-41.19c-6.83-35.28-5.78-66.53,10.92-99.57-5.53-31,.45-63.5,20.73-88.37V64.85c0-17.79,21.55-26.49,34-14.07a19.85,19.85,0,0,1,5.83,14.07v39.61a107.21,107.21,0,0,1,38.74-9.57v-52c0-16.85,20.43-25.09,32.19-13.33a18.79,18.79,0,0,1,5.52,13.33v57.9c20.28,7.76,38.1,23,50.5,45.8h84.54A26.26,26.26,0,0,1,412.59,172.94Z"
        />
        <path
          className="cls-2"
          d="M412.59,172.94a26.68,26.68,0,0,1-21.18,25.63c-26.66,5.85-87.73,18.77-93.52,20A48.34,48.34,0,0,0,290.7,311c48.08,18.28,67,77.43,36.26,120.11-20.84,28.74-52.34,57.22-88.24,56.87-74.53-.73-116.13-105.36-123.59-124.12s-12.5-41-14.67-60c-10.09-87.35,57-157.29,138.26-157.29H386.33A26.26,26.26,0,0,1,412.59,172.94Z"
        />
        <path
          className="cls-3"
          d="M410.61,162.87a17.24,17.24,0,0,1-16,23.68H278.72c-78.93,0-140.88,65.48-139.28,140.84.43,20.7-29.17,24.5-34.06,4.39A204.17,204.17,0,0,1,100,299.1c-6.44-88,60.89-152.55,138.74-152.55H386.33A26,26,0,0,1,410.61,162.87Z"
        />
        <path
          className="cls-1"
          d="M345.21,180.54A8,8,0,0,1,337.6,175c-3.9-12-11.52-21.35-21.64-28.45h23.69a68.51,68.51,0,0,1,13.17,23.53A8,8,0,0,1,345.21,180.54Z"
        />
        <path
          className="cls-1"
          d="M206.67,319.46a8,8,0,0,0-9.75-5.75,138,138,0,0,1-96.46-9.87c.7,6.15,1.75,12.78,2.92,18.85a153.8,153.8,0,0,0,43.73,10.85c12,3.74,19.91,14.1,18.7,27a8,8,0,0,0,15.93,1.5A40.71,40.71,0,0,0,174,333.72a160,160,0,0,0,26.89-4.51A8,8,0,0,0,206.67,319.46Z"
        />
        <path
          className="cls-4"
          d="M363.67,217.9a15.2,15.2,0,0,1-11,20.4c-20.33,4.32-36.95,7.83-37.8,8a48.13,48.13,0,0,0-24.84,13.77c-12.26,12.78-33-1.7-24.64-17.32a47.33,47.33,0,0,1,32.48-24.21c1.16-.24,31.44-6.62,60.58-12.86C360.12,209.24,361.89,213.32,363.67,217.9Z"
        />
        <path
          className="cls-2"
          d="M202.87,96A112.36,112.36,0,0,0,149,120.62V78.85a19.85,19.85,0,0,1,10.09-17.31c7.82-4.46,5.26-17.38-5.76-16.53-10.43.8-18.33,9.81-18.33,20.27v69.47c-20.31,24.9-26.25,57.44-20.73,88.37a139.74,139.74,0,0,1,21.88-31.57c9.83-36.12,39-62.24,72.24-72.25C222.72,115,217.62,93.68,202.87,96Z"
        />
        <path
          className="cls-2"
          d="M217.86,30.78c7.41-8.74,20.59,1.93,14.07,11.34a18.76,18.76,0,0,0-3.35,10.73V95.33a96.33,96.33,0,0,0-15-.38V42.85A18.32,18.32,0,0,1,217.86,30.78Z"
        />
      </g>
    </svg>
  )
}

function Error() {
  return (
    <svg
      className={cx('ico-error')}
      enable-background="new 0 0 64 64"
      height="64px"
      version="1.1"
      viewBox="0 0 64 64"
      width="64px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Layer_1">
        <g>
          <circle cx="32" cy="32" fill="#C75C5C" r="32" />
        </g>
        <g opacity="0.2">
          <path
            d="M16.954,50c-4.4,0-6.2-3.118-4-6.928L28,17.012c2.2-3.811,5.8-3.811,8,0l15.046,26.06    c2.2,3.811,0.4,6.928-4,6.928H16.954z"
            fill="#231F20"
          />
        </g>
        <g>
          <path
            d="M16.954,48c-4.4,0-6.2-3.118-4-6.928L28,15.012c2.2-3.811,5.8-3.811,8,0l15.046,26.06    c2.2,3.811,0.4,6.928-4,6.928H16.954z"
            fill="#F5CF87"
          />
        </g>
        <g>
          <path
            d="M34,32c0,1.105-0.895,2-2,2l0,0c-1.105,0-2-0.895-2-2v-8c0-1.105,0.895-2,2-2l0,0c1.105,0,2,0.895,2,2V32z    "
            fill="#4F5D73"
          />
        </g>
        <g>
          <path
            d="M34,40c0,1.105-0.895,2-2,2l0,0c-1.105,0-2-0.895-2-2l0,0c0-1.105,0.895-2,2-2l0,0    C33.105,38,34,38.895,34,40L34,40z"
            fill="#4F5D73"
          />
        </g>
      </g>
      <g id="Layer_2" />
    </svg>
  )
}

export default FullScreenMessage
