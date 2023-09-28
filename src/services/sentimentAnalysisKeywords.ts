export const anger = [
    'contempt', 'disgust', 'revulsion',
    'envy', 'jealousy',
    'exasperation', 'frustration',
    'aggravation', 'agitation', 'annoyance', 'grouchiness', 'grumpiness', 'irritation',
    'anger', 'bitterness', 'dislike', 'ferocity', 'fury', 'hate', 'hostility', 'loathing', 'outrage',
    'rage', 'resentment', 'scorn', 'spite', 'vengefulness', 'wrath',
    'torment'
];
export const fear = [
    'alarm', 'fear', 'fright', 'horror', 'hysteria', 'mortification', 'panic', 'shock', 'terror',
    'anxiety', 'apprehension', 'distress', 'dread', 'nervousness', 'tenseness', 'uneasiness', 'worry'
];
export const joy = [
    'amusement', 'bliss', 'cheerfulness', 'delight', 'ecstasy', 'elation', 'enjoyment',
    'euphoria', 'gaiety', 'gladness', 'glee', 'happiness', 'jolliness', 'joviality', 'joy', 'jubilation', 'satisfaction',
    'contentment', 'pleasure', 'enthrallment', 'rapture', 'eagerness', 'hope', 'optimism',
    'pride', 'triumph', 'relief', 'enthusiasm', 'excitement', 'exhilaration', 'thrill', 'zeal', 'zest'
];
export const sadness = [
    'depression', 'despair', 'gloom', 'glumness', 'grief', 'hopelessness', 'melancholy', 'misery', 'sadness', 'sorrow', 'unhappiness', 'woe',
    'alienation', 'defeat', 'dejection', 'embarrassment', 'homesickness', 'humiliation', 'insecurity', 'isolation', 'insult', 'loneliness', 'neglect', 'rejection',
    'depression', 'despair', 'gloom', 'glumness', 'grief', 'hopelessness', 'melancholy', 'misery', 'sadness', 'sorrow', 'unhappiness', 'woe',
    'guilt', 'regret', 'remorse', 'shame',
    'agony', 'anguish', 'hurt', 'suffering',
    'pity', 'sympathy'
];
export const love = [
    'adoration', 'affection', 'attraction', 'caring', 'compassion', 'fondness', 'liking', 'love', 'sentimentality', 'tenderness',
    'longing', 'arousal', 'desire', 'infatuation', 'lust', 'passion'
];
export const surprise = [
    'amazement', 'astonishment', 'surprise'
];

interface ISentimentLexicon {
    [key: string]: number;
}

export const angerLexicon: ISentimentLexicon = {
  contempt: -1,
  disgust: -1,
  revulsion: -1,
  envy: -1,
  jealousy: -1,
  exasperation: -1,
  frustration: -1,
  aggravation: -1,
  agitation: -1,
  annoyance: -1,
  grouchiness: -1,
  grumpiness: -1,
  irritation: -1,
  anger: -1,
  bitterness: -1,
  dislike: -1,
  ferocity: -1,
  fury: -1,
  hate: -1,
  hostility: -1,
  loathing: -1,
  outrage: -1,
  rage: -1,
  resentment: -1,
  scorn: -1,
  spite: -1,
  vengefulness: -1,
  wrath: -1,
  torment: -1,

}

export const fearLexicon: ISentimentLexicon = {
  alarm: -1,
  fear: -1,
  fright: -1,
  horror: -1,
  hysteria: -1,
  mortification: -1,
  panic: -1,
  shock: -1,
  terror: -1,
  anxiety: -1,
  apprehension: -1,
  distress: -1,
  dread: -1,
  nervousness: -1,
  tenseness: -1,
  uneasiness: -1,
  worry: -1,
}

export const joyLexicon: ISentimentLexicon = {
  amusement: 1,
  bliss: 1,
  cheerfulness: 1,
  delight: 1,
  ecstasy: 1,
  elation: 1,
  enjoyment: 1,
  euphoria: 1,
  gaiety: 1,
  gladness: 1,
  glee: 1,
  happiness: 1,
  jolliness: 1,
  joviality: 1,
  joy: 1,
  jubilation: 1,
  satisfaction: 1,
  contentment: 1,
  pleasure: 1,
  enthrallment: 1,
  rapture: 1,
  eagerness: 1,
  hope: 1,
  optimism: 1,
  pride: 1,
  triumph: 1,
  relief: 1,
  enthusiasm: 1,
  excitement: 1,
  exhilaration: 1,
  thrill: 1,
  zeal: 1,
  zest: 1,
  great: 1,
  beautiful: 1,
  happy: 1,
  celebrate: 1,
  celebration: 1,
  wonderful: 1,
  amazing: 1,
  awesome: 1,
  good: 1,
  fantastic: 1,
  excellent: 1,
  superb: 1,
}

export const sadnessLexicon: ISentimentLexicon = {
  depression: -1,
  despair: -1,
  gloom: -1,
  glumness: -1,
  grief: -1,
  hopelessness: -1,
  melancholy: -1,
  misery: -1,
  sadness: -1,
  sorrow: -1,
  unhappiness: -1,
  woe: -1,
  alienation: -1,
  defeat: -1,
  dejection: -1,
  embarrassment: -1,
  homesickness: -1,
  humiliation: -1,
  insecurity: -1,
  isolation: -1,
  insult: -1,
  loneliness: -1,
  neglect: -1,
  rejection: -1,
  guilt: -1,
  regret: -1,
  remorse: -1,
  shame: -1,
  agony: -1,
  anguish: -1,
  hurt: -1,
  suffering: -1,
  pity: -1,
  sympathy: -1,
}

export const loveLexicon: ISentimentLexicon = {
  adoration: 1,
  affection: 1,
  attraction: 1,
  caring: 1,
  compassion: 1,
  fondness: 1,
  liking: 1,
  love: 1,
  sentimentality: 1,
  tenderness: 1,
  longing: 1,
  arousal: 1,
  desire: 1,
  infatuation: 1,
  lust: 1,
  passion: 1,
}

export const surpriseLexicon: ISentimentLexicon = {
  amazement: 1,
  astonishment: 1,
  surprise: 1,
}