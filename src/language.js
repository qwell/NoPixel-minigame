// langue française = 'FR'
// lengua española = 'ES'
// lingua italiana = 'IT'
// english language = 'EN'
// svenska språk = 'SE'
const SELECTED_LANGUAGE = 'SE';

const LANGUAGES = {
    'EN' : {
        COLORS : ['black', 'white', 'blue', 'red', 'yellow', 'orange', 'green', 'purple'],
        SHAPES : ['square', 'triangle', 'rectangle', 'circle']
    },
    'ES' : {
        COLORS : ['negro', 'blanco', 'azul', 'rojo', 'amarillo', 'naranja', 'verde', 'púrpura'],
        SHAPES : ['cuadrado', 'triángulo', 'rectángulo', 'círculo']
    },
    'IT' : {
        COLORS : ['nero', 'bianco', 'blu', 'rosso', 'giallo', 'arancione', 'verde', 'viola']
    },
    'FR' : {
        COLORS : ['noir', 'blanc', 'bleu', 'rouge', 'jaune', 'orange', 'vert', 'violet']
    },
    'SE' : {
        COLORS : ['svart', 'vit', 'blå', 'röd', 'gul', 'orange', 'grön', 'lila']
    }
}

export { LANGUAGES, SELECTED_LANGUAGE }
