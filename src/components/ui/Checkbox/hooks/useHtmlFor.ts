import { generateRandomId } from '@/util'
import { useMemo } from 'react'

export const useHtmlFor = (id?: string, name?: string): { htmlFor: string } => {
  const htmlFor = useMemo(() => {
    return id || name || generateRandomId()
  }, [id, name])

  return { htmlFor }
}
