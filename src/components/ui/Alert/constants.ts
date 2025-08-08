export const ALERT_CONSTANTS = {
  ACTIONS_CONTAINER_CLASSES:
    'absolute top-3 right-3 flex items-center justify-end',
  ICON_CLASSES:
    'cursor-pointer opacity-70 transition-opacity hover:opacity-100 focus:opacity-100',

  DEFAULT_LABELS: {
    ACTION_BUTTON: 'Ação',
    CLOSE_BUTTON: 'Fechar',
  },

  DATA_SLOTS: {
    ALERT: 'alert',
    ICON: 'icon',
    TITLE: 'alert-title',
    DESCRIPTION: 'alert-description',
    CLOSE: 'close',
    ACTION: 'action',
  },
} as const
