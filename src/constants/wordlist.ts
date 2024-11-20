import { CONFIG } from './config'

export const WORDS = [
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
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
