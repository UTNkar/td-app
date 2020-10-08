import { classPeople } from './static/texts/classInformation';
import rkTexts from './static/texts/reka/rkTexts';
import fkTexts from './static/texts/fadderka/fkTexts';
import mkTexts from './static/texts/mediaka/mkTexts';

export function getClassPeople(className: string) {
    /* This function returns the class people (Rekå, FadderKå, MediaKå and Propp) for the selected class.
    It defaults to "Ingen" for all, unless overwritten by the spread info from the file. */
    return {
        rk: 'Ingen',
        rk2: 'Ingen',
        fadderk: 'Ingen',
        mediak: 'Ingen',
        propp: 'Ingen',
        ...classPeople[className.toLowerCase()]
    };
}

export function getClassPeopleInformation(rk: string, rk2: string, fk: string, mk: string, prp: string) {
    /* This function gets the information related to each of the people of the class. The info
    is retreived by calling the individual functions, getting the information from the respective
    static text file. */
    function getRkInfo(rk: string) {
        return rkTexts[rk];
    }
    function getRk2Info(rk2: string) {
        if (rk2 != "Ingen")
            return rkTexts[rk2]
        else
            return rk2;
    }
    function getFkInfo(fk: string) {
        return fkTexts[fk];
    }
    function getMkInfo(mk: string) {
        return mkTexts[mk];
    }
    // function getProppInfo(prp: any) {
    //     return proppTexts[prp];
    // }

    var rek: Object = "";
    var rek2: Object = "";
    var fadderk: Object = "";
    var mediak: Object = "";
    // var propp: Object = "";
    var res = { rek, rek2, fadderk, mediak } //, propp};
    res.rek = getRkInfo(rk);
    res.rek2 = getRk2Info(rk2);
    res.fadderk = getFkInfo(fk);
    res.mediak = getMkInfo(mk);
    // res.propp = getProppInfo(prp);
    return res;
}


export function getSectionFullName(className: string) {
    /* This function returns the full length name of the program, by analyzing
    the name of the selected class. It selects the programme by looking at
    the letters before the number (1) in the class. Example: dv1a --> program = dv */
    if (className == null || className == undefined || className == "")
        return "No class received in getSectionFullName() !";

    var sectionStr: string = className.substring(0, className.indexOf("1"));
    var fullName: string = "";
    switch (sectionStr.toLowerCase()) {
        case ("b"):
            fullName = "Bygg\u00ADteknik"; break;
        case ("dv"):
        fullName = "Data\u00ADvetenskap"; break;
        case ("ei"):
        case ("e"):
            fullName = "Elektro\u00ADteknik"; break;
        case ("es"):
            fullName = "Energi\u00ADsystem"; break;
        case ("f"):
            fullName = "Teknisk fysik"; break;
        case ("h"):
            fullName = "Maskin\u00ADteknik"; break;
        case ("i"):
            fullName = "Industriell ekonomi"; break;
        case ("it"):
            fullName = "Informations\u00ADteknologi"; break;
        case ("k"):
            fullName = "Kemiteknik"; break;
        case ("mt"):
            fullName = "Medicinsk teknik"; break;
        case ("q"):
            fullName = "Teknisk fysik med \n materialvetenskap"; break;
        case ("sts"):
            fullName = "System i teknik och samhälle"; break;
        case ("w"):
            fullName = "Miljö- och vattenteknik"; break;
        case ("x"):
            fullName = "Molekylär bioteknik"; break;
        default:
            console.log("The class name matches no programme! In getSectionFullName()");
    }
    return fullName;
}
