import { CONFIG } from './config'

export const ORTHOGRAPHY = [
"a",
"e",
"i",
"o",
"u",
"b",
"c",
"d",
"f",
"g",
"h",
"j",
"k",
"l",
"m",
"n",
"p",
"r",
"s",
"t",
"w",
"y",
"1",
"2",
"3",  
"4",
"5",
"6",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
