import type { ButtonGroupOrientation } from './props'

export const BUTTON_GROUP_DEFAULT_ORIENTATION: ButtonGroupOrientation =
  'horizontal'

export const BUTTON_GROUP_ORIENTATIONS: ButtonGroupOrientation[] = [
  'horizontal',
  'vertical',
]

export const BUTTON_GROUP_DATA_ATTRIBUTES = {
  SLOT: 'data-slot',
  VARIANT: 'data-variant',
  SIZE: 'data-size',
} as const

export const BUTTON_GROUP_SLOT_VALUES = {
  TOGGLE_GROUP_ITEM: 'toggle-group-item',
} as const
