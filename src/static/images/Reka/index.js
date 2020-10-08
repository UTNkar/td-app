import {Aktoren,
        Markoren,
        Generalen,
        Spann,
        SponsX,
        SponsY,
        Kalaspinglan,
        Kox,
        Skum,
        Fix,
        Krims,
        Krams,
        Black,
        Binar,
        Fi,
        Taesk,
        Sting,
        Koll,
        BusX,
        BusY } from '../../texts/reka/rkTexts';

const Rekåiter = [
    {name: 'Aktören', url:require('./aktören.jpg'), program: Aktoren.program, key:'1',  longProgram: Aktoren.longProgram, text: Aktoren.text, quote: Aktoren.quote, give: Aktoren.give, pic: require('./aktören.jpg')},
    {name: 'Markören', url:require('./markören.jpg'), program: Markoren.program, key:'2',  longProgram: Markoren.longProgram, text: Markoren.text, quote: Markoren.quote, give: Markoren.give, pic: require('./markören.jpg')},
    {name: 'Generalen', url:require('./generalen.jpg'), program: Generalen.program, key:'3',  longProgram: Generalen.longProgram, text: Generalen.text, quote: Generalen.quote, give:Generalen.give, pic: require('./generalen.jpg')},
    {name: 'Spänn', url:require('./spänn.jpg'), program: Spann.program, key:'4',  longProgram: Spann.longProgram, text: Spann.text, quote: Spann.quote, give:Spann.give, pic: require('./spänn.jpg')},
    {name: 'Farbror Spons', url:require('./sponsF.jpg'), program: SponsX.program, key:'5',  longProgram: SponsX.longProgram, text: SponsX.text, quote: SponsX.quote, give:SponsX.give, pic: require('./sponsF.jpg')},
    {name: 'Tant Spons', url:require('./sponsT.jpg'), program: SponsY.program, key:'6',  longProgram: SponsY.longProgram, text: SponsY.text, quote: SponsY.quote, give:SponsY.give, pic: require('./sponsT.jpg')},
    {name: 'Kalaspinglan', url:require('./kalaspinglan.jpg'), program: Kalaspinglan.program, key:'7',  longProgram: Kalaspinglan.longProgram, text: Kalaspinglan.text, quote: Kalaspinglan.quote, give:Kalaspinglan.give, pic: require('./kalaspinglan.jpg')},
    {name: 'Köx', url:require('./köx.jpg'), program: Kox.program, key:'8',  longProgram: Kox.longProgram, text: Kox.text, quote: Kox.quote, give:Kox.give, pic: require('./köx.jpg')},
    {name: 'Skum', url:require('./skum.jpg'), program: Skum.program, key:'9',  longProgram: Skum.longProgram, text: Skum.text, quote:Skum.quote, give:Skum.give, pic: require('./skum.jpg')},
    {name: 'Fix', url:require('./fix.jpg'), program: Fix.program, key:'10',  longProgram: Fix.longProgram, text: Fix.text, quote:Fix.quote, give: Fix.give, pic: require('./fix.jpg')},
    {name: 'Krims', url:require('./krims.jpg'), program: Krims.program, key:'11',  longProgram: Krims.longProgram, text: Krims.text, quote:Krims.quote, give: Krims.give, pic: require('./krims.jpg')},
    {name: 'Krams', url:require('./krams.jpg'), program: Krams.program, key:'12',  longProgram: Krams.longProgram, text: Krams.text, quote:Krams.quote, give:Krams.give, pic: require('./krams.jpg')},
    {name: 'Bläck', url:require('./bläck.jpg'), program: Black.program, key:'13',  longProgram: Black.longProgram, text: Black.text, quote:Black.quote, give: Black.give, pic: require('./bläck.jpg')},
    {name: 'Binär', url:require('./binär.jpg'), program: Binar.program, key:'14',  longProgram: Binar.longProgram, text: Binar.text, quote:Binar.quote, give: Binar.give, pic: require('./binär.jpg')},
    {name: 'Fi', url:require('./fi.jpg'), program: Fi.program, key:'15',  longProgram: Fi.longProgram, text: Fi.text, quote:Fi.quote, give:Fi.give, pic: require('./fi.jpg')},
    {name: '[tæ:sk]', url:require('./taesk.jpg'), program: Taesk.program, key:'16',  longProgram: Taesk.longProgram, text: Taesk.text, quote:Taesk.quote, give:Taesk.give, pic: require('./taesk.jpg')},
    {name: 'Sting', url:require('./sting.jpg'), program: Sting.program, key:'17',  longProgram: Sting.longProgram, text: Sting.text, quote:Sting.quote, give:Sting.give, pic: require('./sting.jpg')},
    {name: 'Koll', url:require('./koll.jpg'), program: Koll.program, key:'18',  longProgram: Koll.longProgram, text: Koll.text, quote:Koll.quote, give:Koll.give, pic: require('./koll.jpg')},
    {name: 'Farbror Bus', url:require('./busF.jpg'), program: BusX.program, key:'19',  longProgram: BusX.longProgram, text: BusX.text, quote: BusX.quote, give:BusX.give, pic: require('./busF.jpg')},
    {name: 'Tant Bus', url:require('./busT.jpg'), program: BusY.program, key:'20',  longProgram: BusY.longProgram, text: BusY.text, quote:BusY.quote, give:BusY.give, pic: require('./busT.jpg')},
];


export const RekaImages = {
    "aktören": require("./aktören.jpg"),
    "binär": require("./binär.jpg"),
    "bläck": require("./bläck.jpg"),
    "busF": require("./busF.jpg"),
    "busT": require("./busT.jpg"),
    "fi": require("./fi.jpg"),
    "fix": require("./fix.jpg"),
    "generalen": require("./generalen.jpg"),
    "kalaspinglan": require("./kalaspinglan.jpg"),
    "koll": require("./koll.jpg"),
    "krams": require("./krams.jpg"),
    "krims": require("./krims.jpg"),
    "köx": require("./köx.jpg"),
    "markören": require("./markören.jpg"),
    "skum": require("./skum.jpg"),
    "sponsF": require("./sponsF.jpg"),
    "sponsT": require("./sponsT.jpg"),
    "spänn": require("./spänn.jpg"),
    "sting": require("./sting.jpg"),
    "taesk": require("./taesk.jpg")
};

export default Rekåiter