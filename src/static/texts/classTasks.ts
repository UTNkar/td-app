const classTasks = [
    /* We currently have only received tasks for tuesday to saturday of week one.
    Rekå is thinking about adding more (Monday, and a few more in week 2) so I have
    left the remaining days as a placeholder for efficiency should we need them! */

    // {
    //     date: "24/8",
    //     day: "Måndag",
    //     title: "",
    //     text: "",
    //     extratext: ""
    // },
    {
        date: "25/8",
        day: "Tisdag",
        title: "Spexig groupie",
        text: "Selfien har spridits snabbt över världen likt när Code Red-masken släpptes lös på internet år 2001. "+
                "[tæ:sk] vet dock, precis som PH-Samir och blogg-Viktor, att allt blir roligare när man är många! "+
                "Därför får klassen i uppdrag att ta en spexig groupie, eller så kallad gruppbild, där MINST 15 stycken av klassens reccar deltar.\n\n"+
                "Uppdraget redovisas genom att Reccarna visar bilden för valfri Rekåit, Mediakåit eller Fadderkåit senast klockan 17. "+
                "För extrapoäng i [tæ:sk]s hjärta kan klassen skapa ett snajjdigt instagramkonto som såklart ska ha namnet fotomullrande_klassnamn, och inget annat. "+
                "Bilden kan sedan med fördel läggas upp på det nyskapade kontot och förses med Mediakås fenomenæla hashtag #fotomullrande. "+
                "Väl utfört uppdrag ger klassen bonuspoäng till Klassolympiaden. OBS! Klassen kan även få så kallade spexpoäng om bilden innehåller något strålande spexigt!",
        extratext: "[tæ:sk] tipsar: Är klassen sugen på mer uppdrag? Missa inte Ulla MullvadsSkattjakt som pågår hela mottagningen! Matrixade ledtrådar finns att finna på Binärs hemsida och app!"
    },
    {
        date: "26/8",
        day: "Onsdag",
        title: "Lattjo Lajban ordvitsbattle",
        text: "Som reccarna vet så är en demolerande ordvits något som får [tæ:sk]s hjärta att slå ungefär 3.14 extra slag. "+
                "Dagens uppdrag blir såklart därför att reccarnas klass ska planera, regissera och producera en strålande ordvitsbattle, också känt under namnet “den som skrattar förlorar”. "+
                "Det behöver såklart inte vara en ripoff på detta utan kreativitet är något som [tæ:sk] tycker är underjordligt matrixat!\n\n"+
                "Detta görs med fördel inuti eller i närheten av den snajjdiga Reccentralen och redovisas senast klockan 17.00 för valfri Rekåit, Fadderkåit eller Mediakåit. "+
                "Det går såklart bra att spela upp reccarnas alster live, men [tæ:sk] och Mediakå blir extra imponerade om allt laddas upp på klassens instagram med den fenomenæla hashtagen #fotomullrande. "+
                "Efter avklarat uppdrag belönas klassen med extra poäng till måndagens Klassolympiad. Må torraste skämt vinna!",
        extratext: "[tæ:sk] tipsar: Är klassen sugen på mer uppdrag? Isåfall Rekåmmenderas reccarna att svänga förbi Reccentralen och anmäla sig till något av de specialuppdrag som finns!"
    },
    {
        date: "27/8",
        day: "Torsdag",
        title: "Hatt-verkstad",
        text: "På dagens inte-nationella hattdag ger [tæ:sk] klassen i uppdrag att tillverka en fenomenalt strålande, mullefräck hatt till sin(a) välkompilerade programidol(er). "+
                "[tæ:sk] tipsar om att samvetsfärgen är knasigt inne i år. Reccarna kan även med stor fördel införskaffa eller tillverka hattar till sig själva att bära under kvällens tematiska tältsläpp!\n\n"+
                "Uppdraget redovisas genom att klassen ger en hatt till sin(a) programidol(er) innan klockan 17.00 på torsdagen. Ett väl genomfört Klassuppdrag ger, lika självklart som att mullvaden aldrig missar en smarrig daggmask, extra poäng till Klassolympiaden.",
        extratext: "[tæ:sk] tipsar: Är klassen sugen på mer uppdrag? Isåfall Rekåmmenderas reccarna att svänga förbi Reccentralen och anmäla sig till något av de specialuppdrag som finns!"
    },
    {
        date: "28/8",
        day: "Fredag",
        title: "Hejaramsa till reccarnas program",
        text: "Klassen ska tillsammans komma på en ny snajjdig hurraramsa till reccarnas program. [tæ:sk] tycker att de gamla godingarna börjar bli lite väl utslitna och vet att reccarna har alla vitlökar i frysdisken och därför kan komma på en mer mull[tæ:sk]tisk trudelutt än de som redan finns.\n\n"+
                "Uppdraget redovisas för valfri Rekåit, Fadderkåit eller Mediakåit senast klockan 17.00, antingen live eller med filmbevis. Efter avklarat uppdrag belönas klassen med extra poäng till måndagens Klassolympiad. [tæ:sk] och Mediakå blir såklart extra glada om reccarna också lägger upp hejarramsan "+
                "i form av en liten filmsnutt på klassens instagram med den demolerande hashtagen #fotomullrande",
        extratext: "[tæ:sk] tipsar: Pricka in morgondagens Klassuppdrag under Stingfestivalen för sista chansen att samla poäng inför den kommande Klassolympiaden!"
    },
    {
        date: "29/8",
        day: "Lördag",
        title: "Klassflagga till Klassolympiaden",
        text: "På måndag går Busarnas välkompilerade Klassolympiad av stapeln, där klassen kommer att få tävla mot alla andra klasser i världens viktigaste olympiska spel! "+
            "För större chans att vinna är det ypperligt Rekåmmenderat att ha en mull[tæ:sk]tisk KLASSFLAGGA att använda för att heja fram sin klass. "+
            "Flaggan kommer såklart även att betygsättas.\n\nSting och [tæ:sk] har fenomenalt nog fixat så att reccarna kan tillverka sin klassflagga under den matrixade Stingfestivalen. "+
            "Färg, penslar och materiel kan reccarna hämta i Stingcentralen från kl 11 [tæ:sk] tipsar om att späcka flaggan med klassens mulleluriga sektionsfärg, logga och maskot. "+
            "Även typiskt snajjdigt att ha med sin programidol/fadderkåit/mediakåit. Busarna vill även tipsa om att det väger extra TUNGT att klassen har enhetlig klädsel på Klassolympiaden då även detta kommer betygsättas!"
    },
    // {
    //     date: "30/8",
    //     day: "Söndag",
    //     title: "",
    //     text: "",
    //     extratext: ""
    // },
    // {
    //     date: "31/8",
    //     day: "Måndag",
    //     title: "",
    //     text: "",
    //     extratext: ""
    // },
    // {
    //     date: "1/9",
    //     day: "Tisdag",
    //     title: "",
    //     text: "",
    //     extratext: ""
    // },
    // {
    //     date: "2/9",
    //     day: "Onsdag",
    //     title: "",
    //     text: "",
    //     extratext: ""
    // },
    // {
    //     date: "3/9",
    //     day: "Torsdag",
    //     title: "",
    //     text: "",
    //     extratext: ""
    // },
    // {
    //     date: "4/9",
    //     day: "Fredag",
    //     title: "",
    //     text: "",
    //     extratext: ""
    // },
    // {
    //     date: "5/9",
    //     day: "Lördag",
    //     title: "",
    //     text: "",
    //     extratext: ""
    // },
    // {
    //     date: "6/9",
    //     day: "Söndag",
    //     title: "",
    //     text: "",
    //     extratext: ""
    // }
];
export default classTasks;
