// Lenguajes 
const languages = {
    spanish: {
        id: "es",
        units: ["CERO", "UN", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE"],
        tens: ["DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISEIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE", "VEINTE", "VEINTI", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA"],
        hundreds: ["CIEN", "CIENTO ", "DOSCIENTOS ", "TRESCIENTOS ", "CUATROCIENTOS ", "QUINIENTOS ", "SEISCIENTOS ", "SETECIENTOS ", "OCHOCIENTOS ", "NOVECIENTOS "],
        thousands: ["MIL", "MIL"],
        millions: ["UN MILLON", "MILLONES"],
        and: " Y ",
        with: "CON",
        point: "PUNTO",
        pennies: {
            singular: "CENTAVO",
            plural: "CENTAVOS"
        },
        coins: {
            singular: {
                dollar: "DOLAR",
                euro: "EURO",
                pound: "LIBRA",
                yuan: "YUAN/YEN"
            },
            plural: {
                dollar: "DOLARES",
                euro: "EUROS",
                pound: "LIBRAS",
                yuan: "YUANES/YENES"
            }
        }
    },
    english: {
        id: "en",
        units: ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN" , "EIGTH", "NINE"],
        tens: ["TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"],
        hundreds: ["ONE HUNDRED", "ONE HUNDRED ", "TWO HUNDRED ", "THREE HUNDRED ", "FOUR HUNDRED ", "FIVE HUNDRED ", "SIX HUNDRED ", "SEVEN HUNDRED ", "EIGTH HUNDRED ", "NINE HUNDRED "],
        thousands: ["ONE THOUSAND", "THOUSAND"],
        millions: ["ONE MILLION", "MILLIONS"],
        and: " ",
        with: "AND",
        point: "POINT",
        pennies: {
            singular: "PENNY",
            plural: "PENNIES"
        },
        coins: {
            singular: {
                dollar: "DOLLAR",
                euro: "EURO",
                pound: "POUND",
                yuan: "YUAN/YEN"
            },
            plural: {
                dollar: "DOLLARS",
                euro: "EUROS",
                pound: "POUNDS",
                yuan: "YUANES/YEN"
            }
        }
    },
    portuguese: {
        id: "pt",
        units: ["ZERO", "UM", "DOIS", "TRÊS", "QUATRO", "CINCO", "SEIS", "SETE", "OITO", "NOVE"],
        tens: ["DEZ", "ONZE", "DOZE", "TREZE", "QUATORZE", "QUINZE", "DEZESSEIS", "DEZESSETE", "DEZOITO", "DEZENOVE", "VINTE", "VINTE E", "TRINTA", "QUARENTA", "CINQUENTA", "SESSENTA", "SETENTA", "OIENTA", "NOVENTA"],
        hundreds: ["CEM", "CENTO ", "DUZENTOS ", "TREZENTOS ", "QUATROCENTOS ", "QUINHENTOS ", "SEISCENTOS ", "SETECENTOS ", "OITOCENTOS ", "NOVECENTOS "],
        thousands: ["MIL", "MIL"],
        millions: ["UM MILHÃO", "MILHÕES"],
        and: " E ",
        with: "E",
        point: "PONTO",
        pennies: {
            singular: "CENTO",
            plural: "CENTAVOS"
        },
        coins: {
            singular: {
                dollar: "DOLAR",
                euro: "EURO",
                pound: "LIBRA",
                yuan: "YUAN/YEN"
            },
            plural: {
                dollar: "DOLARES",
                euro: "EUROS",
                pound: "LIBRAS",
                yuan: "YUANES/YENES"
            }
        }
    },
    italian: {
        id: "it",
        units: ["ZERO", "UNO", "DUE", "TRE", "QUATTRO", "CINQUE", "SEI", "SETTE", "OTTO", "NOVE"],
        tens: ["DIECI", "UNDICI", "DODICI", "TREDICI", "QUATTORDICI", "QUINDICI", "SEDICI", "DICIASSETTE", "DICIOTTO", "DICIANNOVE", "VENTI", "VENTI", "TRENTA", "QUARANTA", "CINQUANTA", "SESSANTA", "SETTANTA", "OTTANTA", "NOVANTA"],
        hundreds: ["CENTO", "CENTO ", "DUECENTO ", "TRECENTO ", "QUATTROCENTO ", "CINQUECENTO ", "SEICENTO ", "SETTECENTO ", "OTTOCENTO ", "NOVECENTO "],
        thousands: ["MILLE", "MILLE"],
        millions: ["UN MILIONE", "MILIONI"],
        and: " E ",
        with: "E",
        point: "PUNTO",
        pennies: {
            singular: "CENTESIMO",
            plural: "CENTESIMI"
        },
        coins: {
            singular: {
                dollar: "DOLLARO",
                euro: "EURO",
                pound: "LIBBRA",
                yuan: "YUAN/YEN"
            },
            plural: {
                dollar: "DOLLARI",
                euro: "EURO",
                pound: "LIBBRE",
                yuan: "YUANES/YEN"
            }
        }
    },
    default_lang: { 
        id: "en",
        units: ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN" , "EIGTH", "NINE"],
        tens: ["TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"],
        hundreds: ["ONE HUNDRED", "ONE HUNDRED ", "TWO HUNDRED ", "THREE HUNDRED ", "FOUR HUNDRED ", "FIVE HUNDRED ", "SIX HUNDRED ", "SEVEN HUNDRED ", "EIGTH HUNDRED ", "NINE HUNDRED "],
        thousands: ["ONE THOUSAND", "THOUSAND"],
        millions: ["ONE MILLION", "MILLIONS"],
        and: " ",
        with: "AND",
        point: "POINT",
        pennies: {
            singular: "PENNY",
            plural: "PENNIES"
        },
        coins: {
            singular: {
                dollar: "DOLLAR",
                euro: "EURO",
                pound: "POUND",
                yuan: "YUAN/YEN"
            },
            plural: {
                dollar: "DOLLARS",
                euro: "EUROS",
                pound: "POUNDS",
                yuan: "YUANES/YEN"
            }
        }
    }
}
// Unidades
const getUnitsTranslation = (num, language) => {
    return language.units[num]; 
}
// Decenas
const getTensTranslation = (num, language) => {
    let tens = Math.floor(num/10);
    let units = num - (tens * 10);
    const getTensAnd = (tensTranslation, numUnits, language) => {
        if (numUnits > 0)
            return tensTranslation + language.and + getUnitsTranslation(numUnits, language);
    
        return tensTranslation;
    }
    switch(tens){
        case 0: return getUnitsTranslation(units, language); // 01 02 03 ...
        case 1:
            for(let i = 0; i <= units; i++){
                if(units === i)
                return language.tens[i]; // Diez, once, doce, trece ... diecinueve
            };
        case 2:
            switch(units){
                case 0: return language.tens[10]; // Veinte
                default: return language.tens[11] + getUnitsTranslation(units, language); // Veinti...
            }
        default: return getTensAnd(language.tens[tens + 9], units, language); // Treinta, cuarenta ... noventa
    }
}
// Centenas
const getHundredsTranslation = (num, language) => {
    let hundreds = Math.floor(num / 100);
    let tens = num - (hundreds * 100);

    switch(hundreds){
        case 0: return getTensTranslation(tens, language);
        case 1:
            if (tens > 0)
                return language.hundreds[1] + getTensTranslation(tens, language); // Cientoun, cientodos ...
            return language.hundreds[0]; // Cien
        default: return language.hundreds[hundreds] + getTensTranslation(tens, language);
    }
}
const getThreeDigitsTranslation = (language, hundreds, rest, singularTranslation, pluralTranslation) => {
    const isPlural = hundreds > 1;
    if (hundreds > 0) 
        return isPlural ? getHundredsTranslation(hundreds, language) + " " + pluralTranslation : singularTranslation;
    if (rest >= 0)
        return "";
}
// Milesimas
const getThousandsTranslation = (num, language) => {
    const divider = 1000;
    let hundreds = Math.floor(num / divider);
    let rest = num - (hundreds * divider);

    const thousandsTranslation = getThreeDigitsTranslation(language, hundreds, rest, language.thousands[0], language.thousands[1]);
    const hundredsTranslation = getHundredsTranslation(rest, language);

    if(thousandsTranslation == "")
        return hundredsTranslation;

    return thousandsTranslation + " " + hundredsTranslation;
}
// Millonesimas
const getMillionsTranslation = (num, language) => {
    const divider = 1000000;
    let hundreds = Math.floor(num / divider);
    let rest = num - (hundreds * divider);

    const millionsTranslation = getThreeDigitsTranslation(language, hundreds, rest, language.millions[0], language.millions[1]);
    const thousandsTranslation = getThousandsTranslation(rest, language);

    if(millionsTranslation == "")
        return thousandsTranslation;

    return millionsTranslation + " " + thousandsTranslation;
}
// Milesimas de millonesimas
const getThousandsMillionsTranslation = (num, language) => {
        const divider = 1000000000;
        let hundreds = Math.floor(num / divider);
        let rest = num - (hundreds * divider);

        const thousandsMillionsTranslation = getThreeDigitsTranslation(language, hundreds, rest, language.thousands[0], language.thousands[1]);
        const millionsTranslation = getMillionsTranslation(rest, language);

        if(thousandsMillionsTranslation == "")
            return millionsTranslation;

        return thousandsMillionsTranslation + " " + millionsTranslation;
}
// Centavos
const getPenniesTranslation = (numPenny, language) => {
    const isPlural = numPenny != 1;
    return isPlural ? language.pennies.plural : language.pennies.singular;
}
// Divisas
const getCoinTranslation = (num, language, coin) => {
    const returnCoin = (coinText, coin) => {
        switch(coin){
            case "$": return coinText.dollar;
            case "€": return coinText.euro;
            case "£": return coinText.pound;
            case "¥": return coinText.yuan;
            default: return "";
        }
    }
    if (num != 1) 
        return returnCoin(language.coins.plural, coin); // Operador ternario
    else
        return returnCoin(language.coins.singular, coin);
}
// Numero a texto multilenguaje
const NumberToText = (num, coin, idLang) => {
    if (num >= 0) {
        const integers = Math.floor(num);
        const pennies = (((Math.round(num * 100)) - (Math.floor(num) * 100))); 
        const PrinText = (integers, pennies, language, coin) => {
            if (pennies > 0) 
                if (getCoinTranslation(integers, language, coin) == "")
                    return `${getThousandsMillionsTranslation(integers, language)} ${language.point} ${getThousandsMillionsTranslation(pennies, language)}`;
                else
                    return `${getThousandsMillionsTranslation(integers, language)} ${getCoinTranslation(integers, language, coin)} ${language.with} ${getThousandsMillionsTranslation(pennies, language)} ${getPenniesTranslation(pennies, language)}`;
            else
                return `${getThousandsMillionsTranslation(integers, language)} ${getCoinTranslation(integers, language, coin)}`;
        }
        switch(idLang){
            case "es":  
                const { spanish } = languages;
                return PrinText(integers, pennies, spanish, coin);
            case "en":  
                const { english } = languages;
                return PrinText(integers, pennies, english, coin);
            case "pt": 
                const { portuguese } = languages;
                return PrinText(integers, pennies, portuguese, coin);
            case "it":
                const { italian } = languages;
                return PrinText(integers, pennies, italian, coin);
            default: 
                const { default_lang } = languages;
                return PrinText(integers, pennies, default_lang, coin);
        }
    }
    else
        return "Invalid number";
}
//                       Numero   Divisa   Idioma
console.log(NumberToText(1997.37, "",      "es")); // Sin divisa
console.log(NumberToText(1997.37, "$",     "es")); // Español
console.log(NumberToText(1997.37, "$",     "en")); // Ingles
console.log(NumberToText(1997.37, "$",     "pt")); // Portugues
console.log(NumberToText(1997.37, "$",     "it")); // Italiano
console.log(NumberToText(1997.37, "$"          )); // Sin paremetro de idioma se ejecuta el lenguaje por defecto (ingles)