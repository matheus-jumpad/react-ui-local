'use client'

import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'
import type { DividerProps } from './props'

const Divider = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: DividerProps) => {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        // Colors
        'bg-divider',
        // Sizes
        'shrink-0',
        // Orientation horizontal
        'data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full',
        // Orientation vertical
        'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className,
      )}
      {...props}
    />
  )
}

export { Divider }
