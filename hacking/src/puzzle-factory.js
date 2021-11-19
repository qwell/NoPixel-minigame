import { randomInt, sample, SHAPES, COLORS } from './helpers.js'

const COLORABLE = ['background', 'colortext', 'shapetext', 'number', 'shape']

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
        color: sample(Object.keys(COLORS)),
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

    const question =  firstQuestion+' ('+nums[positionOne]+') '+andWord+' '+secondQuestion+' ('+nums[positionTwo]+')'
    const answer = QUESTIONS[firstQuestion](puzzles[positionOne]) + ' ' + QUESTIONS[secondQuestion](puzzles[positionTwo])

    return [question, answer]
}
