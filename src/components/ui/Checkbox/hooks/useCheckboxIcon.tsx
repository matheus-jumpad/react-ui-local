import { CheckIcon, MinusIcon } from 'lucide-react'
import { useMemo } from 'react'
import type { CheckboxVariant } from '../props'

const ICON_PROPS = {
  className: 'size-3 transition-all duration-300 text-white',
  strokeWidth: 3,
} as const

export const useCheckboxIcon = (variant: CheckboxVariant) => {
  const icon = useMemo(() => {
    if (variant === 'check') {
      return <CheckIcon {...ICON_PROPS} />
    }

    return <MinusIcon {...ICON_PROPS} />
  }, [variant])

  return { icon }
}
