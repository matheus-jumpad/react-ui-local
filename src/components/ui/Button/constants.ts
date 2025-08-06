export const ICON_POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right',
} as const

export const BUTTON_STATES = {
  LOADING: 'loading',
  DISABLED: 'disabled',
  NORMAL: 'normal',
} as const

export const BUTTON_CLASSES = {
  LOADING: 'animate-pulse cursor-not-allowed',
  DISABLED: 'cursor-not-allowed',
  FULL_WIDTH: 'w-full',
  ICON_RIGHT: 'flex-row-reverse',
} as const

export const DEFAULT_BUTTON_CONFIG = {
  ICON_POSITION: ICON_POSITIONS.LEFT,
  IS_LOADING: false,
  IS_DISABLED: false,
  IS_FULL_WIDTH: false,
  AS_CHILD: false,
  IS_ROUNDED: false,
} as const
