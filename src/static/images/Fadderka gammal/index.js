import {
    FkB, FkDV, FkE, FkES,
    FkF, FkI, FkIT,
    FkK, FkM, FkMT,
    FkQ, FkSTS, FkW,
    FkX, FkGl2
} from '../../texts/Fadderka';

const FadderKaiter = [{ name: FkGl2.firstName, lastName: FkGl2.lastName, url: require('./gl2.jpg'), program: 'Gruppledare', key: '2', longProgram: 'Gruppledare', text: FkGl2.text, quote: FkGl2.quote, pic: require('./gl2.jpg') },
{ name: FkB.firstName, lastName: FkB.lastName, url: require('./fkb.jpg'), program: 'B', key: '3', longProgram: 'Byggteknik', text: FkB.text, quote: FkB.quote, pic: require('./fkb.jpg') },
{ name: FkDV.firstName, lastName: FkDV.lastName, url: require('./hampus.jpg'), program: 'DV', key: '4', longProgram: 'Datavetenskap', text: FkDV.text, quote: FkDV.quote, pic: require('./hampus.jpg') },
{ name: FkE.firstName, lastName: FkE.lastName, url: require('./vendela.jpg'), program: 'E/Ei', key: '5', longProgram: 'Elektroteknik', text: FkE.text, quote: FkE.quote, pic: require('./vendela.jpg') },
{ name: FkES.firstName, lastName: FkES.lastName, url: require('./erik.jpg'), program: 'ES', key: '6', longProgram: 'Energisystem', text: FkES.text, quote: FkES.quote, pic: require('./erik.jpg') },
{ name: FkF.firstName, lastName: FkF.lastName, url: require('./simon.jpg'), program: 'F', key: '7', longProgram: 'Teknisk fysik', text: FkF.text, quote: FkF.quote, pic: require('./simon.jpg') },
{ name: FkI.firstName, lastName: FkI.lastName, url: require('./albin.jpg'), program: 'I', key: '8', longProgram: 'Industriell ekonomi', text: FkI.text, quote: FkI.quote, pic: require('./albin.jpg') },
{ name: FkIT.firstName, lastName: FkIT.lastName, url: require('./maja.jpg'), program: 'IT', key: '9', longProgram: 'Informationsteknologi', text: FkIT.text, quote: FkIT.quote, pic: require('./maja.jpg') },
{ name: FkK.firstName, lastName: FkK.lastName, url: require('./elina.jpg'), program: 'K', key: '10', longProgram: 'Kemiteknik', text: FkK.text, quote: FkK.quote, pic: require('./elina.jpg') },
{ name: FkM.firstName, lastName: FkM.lastName, url: require('./aria.jpg'), program: 'M', key: '11', longProgram: 'Maskinteknik', text: FkM.text, quote: FkM.quote, pic: require('./aria.jpg') },
{ name: FkMT.firstName, lastName: FkMT.lastName, url: require('./sophia.jpg'), program: 'MT', key: '12', longProgram: 'Medicinsk teknik', text: FkMT.text, quote: FkMT.quote, pic: require('./sophia.jpg') },
{ name: FkQ.firstName, lastName: FkQ.lastName, url: require('./alma.jpg'), program: 'Q', key: '13', longProgram: 'Teknisk fysik med materialvetenskap', text: FkQ.text, quote: FkQ.quote, pic: require('./alma.jpg') },
{ name: FkSTS.firstName, lastName: FkSTS.lastName, url: require('./linnea.jpg'), program: 'STS', key: '14', longProgram: 'System i teknik och samhälle', text: FkSTS.text, quote: FkSTS.quote, pic: require('./linnea.jpg') },
{ name: FkW.firstName, lastName: FkW.lastName, url: require('./daniel.jpg'), program: 'W', key: '15', longProgram: 'Miljö- och vattenteknik', text: FkW.text, quote: FkW.quote, pic: require('./daniel.jpg') },
{ name: FkX.firstName, lastName: FkX.lastName, url: require('./joel.jpg'), program: 'X', key: '16', longProgram: 'Molekylär bioteknik', text: FkX.text, quote: FkX.quote, pic: require('./joel.jpg') }]

export const FadderkaImages = {
    "gl2": require("./gl2.jpg"),
    "albin": require("./albin.jpg"),
    "alma": require("./alma.jpg"),
    "aria": require("./aria.jpg"),
    "daniel": require("./daniel.jpg"),
    "elina": require("./elina.jpg"),
    "erik": require("./erik.jpg"),
    "hampus": require("./hampus.jpg"),
    "joel": require("./joel.jpg"),
    "linnea": require("./linnea.jpg"),
    "fkb": require("./fkb.jpg"),
    "maja": require("./maja.jpg"),
    "simon": require("./simon.jpg"),
    "sophia": require("./sophia.jpg"),
    "vendela": require("./vendela.jpg"),
};

export default FadderKaiter;
