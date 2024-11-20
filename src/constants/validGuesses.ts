import { CONFIG } from './config'

export const VALIDGUESSES = [
   "diu2",
  "siu1",
  "san1",
  "yat1",
  "yih6",
  "ngh4",
  "hai2",
  "sai1",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
