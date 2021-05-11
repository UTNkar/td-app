import {
    FkB, FkDV, FkE, FkES,
    FkF, FkI, FkIT,
    FkK, FkM, FkMT,
    FkQ, FkSTS, FkW,
    FkX, FkGl2
} from '../../texts/Fadderka';

const FkB_image = './FKB.jpg';
const FkDV_image = './FKDV.jpg';
const FkE_image = './FKE.jpg';
const FkES_image = './FKES.jpg';
const FkF_image = './FKF.jpg';
const FkI_image = './FKI.jpg';
const FkIT_image = './FKIT.jpg';
const FkK_image = './FKK.jpg';
const FkM_image = './FKM.jpg';
const FkMT_image = './FKMT.jpg';
const FkQ_image = './FKQ.jpg';
const FkSTS_image = './FKSTS.jpg';
const FkW_image = './FKW.jpg';
const FkX_image = './FKX.jpg';
const FkGL1_image = './FKGL1.jpg';
const FkGL2_image = './FKGL2.jpg';

const FadderKaiter = [{ name: FkGl2.firstName, lastName: FkGl2.lastName, url: require(FkGL2_image), program: 'Gruppledare', key: '2', longProgram: 'Gruppledare', text: FkGl2.text, quote: FkGl2.quote, pic: require(FkGL2_image) },
{ name: FkB.firstName, lastName: FkB.lastName, url: require(FkB_image), program: 'B', key: '3', longProgram: 'Byggteknik', text: FkB.text, quote: FkB.quote, pic: require(FkB_image) },
{ name: FkDV.firstName, lastName: FkDV.lastName, url: require(FkDV_image), program: 'DV', key: '4', longProgram: 'Datavetenskap', text: FkDV.text, quote: FkDV.quote, pic: require(FkDV_image) },
{ name: FkE.firstName, lastName: FkE.lastName, url: require(FkE_image), program: 'E/Ei', key: '5', longProgram: 'Elektroteknik', text: FkE.text, quote: FkE.quote, pic: require(FkE_image) },
{ name: FkES.firstName, lastName: FkES.lastName, url: require(FkES_image), program: 'ES', key: '6', longProgram: 'Energisystem', text: FkES.text, quote: FkES.quote, pic: require(FkES_image) },
{ name: FkF.firstName, lastName: FkF.lastName, url: require(FkF_image), program: 'F', key: '7', longProgram: 'Teknisk fysik', text: FkF.text, quote: FkF.quote, pic: require(FkF_image) },
{ name: FkI.firstName, lastName: FkI.lastName, url: require(FkI_image), program: 'I', key: '8', longProgram: 'Industriell ekonomi', text: FkI.text, quote: FkI.quote, pic: require(FkI_image) },
{ name: FkIT.firstName, lastName: FkIT.lastName, url: require(FkIT_image), program: 'IT', key: '9', longProgram: 'Informationsteknologi', text: FkIT.text, quote: FkIT.quote, pic: require(FkIT_image) },
{ name: FkK.firstName, lastName: FkK.lastName, url: require(FkK_image), program: 'K', key: '10', longProgram: 'Kemiteknik', text: FkK.text, quote: FkK.quote, pic: require(FkK_image) },
{ name: FkM.firstName, lastName: FkM.lastName, url: require(FkM_image), program: 'M', key: '11', longProgram: 'Maskinteknik', text: FkM.text, quote: FkM.quote, pic: require(FkM_image) },
{ name: FkMT.firstName, lastName: FkMT.lastName, url: require(FkMT_image), program: 'MT', key: '12', longProgram: 'Medicinsk teknik', text: FkMT.text, quote: FkMT.quote, pic: require(FkMT_image) },
{ name: FkQ.firstName, lastName: FkQ.lastName, url: require(FkQ_image), program: 'Q', key: '13', longProgram: 'Teknisk fysik med materialvetenskap', text: FkQ.text, quote: FkQ.quote, pic: require(FkQ_image) },
{ name: FkSTS.firstName, lastName: FkSTS.lastName, url: require(FkSTS_image), program: 'STS', key: '14', longProgram: 'System i teknik och samhälle', text: FkSTS.text, quote: FkSTS.quote, pic: require(FkSTS_image) },
{ name: FkW.firstName, lastName: FkW.lastName, url: require(FkW_image), program: 'W', key: '15', longProgram: 'Miljö- och vattenteknik', text: FkW.text, quote: FkW.quote, pic: require(FkW_image) },
{ name: FkX.firstName, lastName: FkX.lastName, url: require(FkX_image), program: 'X', key: '16', longProgram: 'Molekylär bioteknik', text: FkX.text, quote: FkX.quote, pic: require(FkX_image) }]

export const FadderkaImages = {
    "FkGl1": require(FkGL1_image),
    "FkGl2": require(FkGL2_image),
    "FkI": require(FkI_image),
    "FkQ": require(FkQ_image),
    "FkM": require(FkM_image),
    "FkW": require(FkW_image),
    "FkK": require(FkK_image),
    "FkES": require(FkES_image),
    "FkDV": require(FkDV_image),
    "FkX": require(FkX_image),
    "FkSTS": require(FkSTS_image),
    "FkB": require(FkB_image),
    "FkIT": require(FkIT_image),
    "FkF": require(FkF_image),
    "FkMT": require(FkMT_image),
    "FkE": require(FkE_image),
};

export default FadderKaiter;
