import { LANGUAGES, SELECTED_LANGUAGE } from './language.js'

if (!Object.keys(LANGUAGES).includes(SELECTED_LANGUAGE)) {
    console.log("LANGUAGE '" + SELECTED_LANGUAGE + "' NOT SUPPORTED (" + Object.keys(LANGUAGES) + ")")
}

const $ = name => document.querySelector(name)
const delay = s => new Promise(res => setTimeout(res, s * 1000));
const randomInt = (max) => Math.floor(Math.random() * Math.floor(max))
const sample = (arr) => arr[randomInt(arr.length)]
const shuffleArray = (arr) => arr.map((a) => ({sort: Math.random(), value: a})).sort((a, b) => a.sort - b.sort).map((a) => a.value)

function playSound(name, volume){
    const sound = new Audio(name)
    sound.volume = volume || 0.15;
    sound.play();
    return sound
}

const COLOR_CODES = [
    'black',
    'white',
    '#1991F9', // blue
    '#8C0C00', // red
    '#FFE335', // yellow
    '#FF9900', // orange
    '#46A04F', // green
    '#A43AB5', // purple
]

const LANG = LANGUAGES[SELECTED_LANGUAGE] || LANGUAGES['EN']

const SHAPES = LANG.SHAPES || LANGUAGES['EN'].SHAPES

const COLORS = LANG.COLORS.reduce((obj, key, i) => {
    obj[key] = COLOR_CODES[i];
    return obj;
}, {})

export {
    $, delay, randomInt, sample, shuffleArray, playSound,
    SHAPES, COLORS
}
