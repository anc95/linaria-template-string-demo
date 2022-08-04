import { css } from '@linaria/core'
import { literal } from './literal'

export const style = css`
  width: 1px;
  content: ${literal}
`