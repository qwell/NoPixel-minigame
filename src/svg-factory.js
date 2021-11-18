import { randomInt, SHAPES, COLORS } from './helpers.js'

/**
 * Generates a complete svg image from a PuzzleData object
 *
 * @param {PuzzleData} puzzleData
 */
export function getPuzzleSvg(puzzleData){
    const textSize = 21
    const textWeight = 'normal'

    const shapeSVG = createShape(puzzleData.shape, COLORS[puzzleData.colors.shape])

    let topText;
    let bottomText;

    if (randomInt(2)) {
        topText = createText(puzzleData.text.color.toUpperCase(), COLORS[puzzleData.colors.colortext], textSize, textWeight, 31)
        bottomText = createText(puzzleData.text.shape.toUpperCase(), COLORS[puzzleData.colors.shapetext], textSize, textWeight, 67)
    } else {
        topText = createText(puzzleData.text.shape.toUpperCase(), COLORS[puzzleData.colors.shapetext], textSize, textWeight, 31)
        bottomText = createText(puzzleData.text.color.toUpperCase(), COLORS[puzzleData.colors.colortext], textSize, textWeight, 67)
    }

    const numberText = createText(puzzleData.number, COLORS[puzzleData.colors.number], 60, 100, 50, 'Arial, Helvetica')

    return createSVG([shapeSVG, topText, bottomText, numberText])
}

// Takes multiple SVG strings and combines them to a svg
const createSVG = (elements) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"> ${elements.join("\n")} </svg>`

const createShape = (shape, color) => SHAPE_SVG[SHAPES.indexOf(shape)](color)

const SHAPE_SVG = {
    // Indexes are the same order as language shapes
    "0" : (c) => `<rect fill=${c} stroke="#000" stroke-width="1" width="150" height="150"/>`, 
    "1": (c) => `<polygon  fill=${c}  stroke="#000" stroke-width="1" points="0 150 75 0 150 150 0 150"/>`, 
    "2" : (c) =>`<rect y="30" fill=${c}  stroke="#000" stroke-width="1" class="shape" width="150" height="90"/>`, 
    "3" : (c) => `<circle fill=${c}  stroke="#000" stroke-width="1" cx="75" cy="75" r="75"/>`,
}



const createText = (text, color, size, weight, y, font) => `
    <text 
        stroke="black" 
        fill="${color}" 
        stroke-width="1" 
        style="font-size:${size}px;" 
        font-weight="${weight}" 
        font-family="${font || 'Archivo Black'}, sans-serif";
        x="50%" 
        y="${y}%" 
        dominant-baseline="middle" 
        text-anchor="middle"
    >
        ${text}
    </text> `
