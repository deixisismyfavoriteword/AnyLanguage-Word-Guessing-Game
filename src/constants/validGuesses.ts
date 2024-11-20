import { CONFIG } from './config'

export const VALIDGUESSES = [
   "Diu2",
  "Siu1",
  "San1",
  "Yat1",
  "Yih6",
  "Ngh4",
  "hai2",
  "sai1"
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
