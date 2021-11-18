import { randomInt, sample } from './helpers.js'

import TRANSLATIONS from './language.js'

const selectedLang = TRANSLATIONS.SELECTED_LANGUAGE

if(!TRANSLATIONS.LANGUAGES.includes(selectedLang)) console.log(`LANGUAGE NOT SUPPORTED\nSELECTED: ${TRANSLATIONS.SELECTED_LANGUAGE}\nAVAILABLE: ${TRANSLATIONS.LANGUAGES}`)
const LANG = TRANSLATIONS[selectedLang]

const SHAPES = ["square", "triangle", "rectangle", "circle"]
const COLORABLE = ['background', 'colortext', 'shapetext', 'number', 'shape']

const COLOR_CODES = ['black', 'white','#1991F9','#8C0C00','#FFE335','#FF9900','#46A04F','#A43AB5']

const LANG_COLORS = LANG.COLORS.reduce((obj, key, i) => {obj[key] = COLOR_CODES[i]; return obj}, {})


// console.log('colors var', COLORS)
// COLORS becomes this:
const COLORS = {
    'black' : 'black',
    'white' : 'white',
    'blue' : '#1991F9',
    'red' : '#8C0C00',
    'yellow' : '#FFE335',
    'orange' : '#FF9900',
    'green' : '#46A04F',
    'purple' : '#A43AB5',
}

// functions that return answers from PuzzleData class
const QUESTIONS = {
    'background color' : (d) => d.colors.background,
    'color text background color' : (d) => d.colors.colortext,
    'shape text background color' : (d) => d.colors.shapetext,
    'number color' : (d) => d.colors.number,
    'shape color' : (d) => d.colors.shape,
    'color text' : (d) => d.text.color,
    'shape text' : (d) => d.text.shape,
    'shape' : (d) => d.shape
}

class PuzzleData {
    constructor(shape, number, text, colors) {
        this.shape = shape
        this.number = number
        this.text = text
        this.colors = colors
    }
}

// generates a random puzzle
export function generateRandomPuzzle(){

    const shape = sample(SHAPES)
    const number = randomInt(9) + 1

    const texts = {
        color: sample(Object.keys(LANG_COLORS)),
        shape: sample(SHAPES)
    }

    const colors = COLORABLE.reduce((obj, color) => {
        let c;
        do {
            // Get a random color and ensure it hasn't been used before.
            c = sample(Object.keys(COLORS));
        } while (Object.values(obj).includes(c));

        obj[color] = c;
        return obj;
    }, {})

    return new PuzzleData(shape, number, texts, colors)
}


export function generateQuestionAndAnswer(nums, puzzles){

    const positionOne = randomInt(nums.length)
    let tempPosTwo
    do {tempPosTwo = randomInt(nums.length)} while(positionOne == tempPosTwo)
    const positionTwo = tempPosTwo

    const firstQuestion = sample(Object.keys(QUESTIONS))
    let tempSecondQuestion
    do {tempSecondQuestion = sample(Object.keys(QUESTIONS))} while(tempSecondQuestion == firstQuestion)
    const secondQuestion = tempSecondQuestion

    const andWord = 'AND'

    puzzles = puzzles.map(convertPuzzleDataLang)

    const question =  firstQuestion+' ('+nums[positionOne]+') '+andWord+' '+secondQuestion+' ('+nums[positionTwo]+')'
    const answer = QUESTIONS[firstQuestion](puzzles[positionOne]) + ' ' + QUESTIONS[secondQuestion](puzzles[positionTwo])

    return [question, answer]
}


// LANGUAGE TRANSLATION FUNCTIONS
// Should implement a more robust method for all text, but this is a start

// takes in a puzzleData class and converts language of colors
function convertPuzzleDataLang(puzzle){
    const result = puzzle

    result.colors.background = convertColor(puzzle.colors.background)
    result.colors.number = convertColor(puzzle.colors.number)
    result.colors.shape = convertColor(puzzle.colors.shape)
    result.colors.colortext = convertColor(puzzle.colors.colortext)
    result.colors.shapetext = convertShape(puzzle.colors.shapetext)
    result.text.color = convertColor(puzzle.text.color)
    result.text.shape = convertShape(puzzle.text.shape)

    return result
}

function convertColor(originalColor){
    const englishColors = TRANSLATIONS.EN.COLORS
    const position = englishColors.indexOf(originalColor)
    return LANG.COLORS[position]
}

function convertShape(originalShape){
    return originalShape;
}
