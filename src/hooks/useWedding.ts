import { getWedding } from '@/api/wedding'
import { Wedding } from '@/models/wedding'
import { useQuery } from 'react-query'

export default function useWedding() {
  const { isLoading, error, data } = useQuery<Wedding>(
    ['wedding'],
    () =>
      getWedding().then((res) => {
        if (res.ok === false) {
          throw new Error('청첩장 정보를 불러오지습니다.')
        }
        return res.json()
      }),
    {
      suspense: true,
    },
  )

  return { wedding: data, isLoading, error }
}
