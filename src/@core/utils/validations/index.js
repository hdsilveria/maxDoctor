import { extend, localize } from 'vee-validate'
import {
  required as rule_required,
  min as rule_min,
} from 'vee-validate/dist/rules'

import br from 'vee-validate/dist/locale/pt_BR.json'

export const required = extend('required', rule_required)
export const min = extend('min', rule_min)

localize({
  en: {
    messages: br.messages,
    names: {},
  },
})