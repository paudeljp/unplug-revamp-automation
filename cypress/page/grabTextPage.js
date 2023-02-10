const timeOut = '60000';

export default class grabTextPage {
    //Grab single text
    grabSingleText(xpath) {
        var array = [];
        return cy.get(xpath, { setTimeout: timeOut }).each(response => {
            const text = response.text().trim().replace('×', '');
            if (text != "" && text != "  ") {
                array.push(text);
            }
        }).then(() => {
            return array[array.length - 1];
        })
    }

    //Grab multiple text
    grabMulitipleText(xpath) {
        var array = [];
        return cy.get(xpath, { setTimeout: timeOut }).each(response => {
            const text = response.text().trim().replace('×', '');
            if (text != "" && text != "  ") {
                array.push(text);
            }
        }).then(() => {
            return array;
        })
    }

    grabTextFromJson(filePath, string, value) {
        let data = null;
        return cy.readFile(filePath).then(response => {
            for (let index = 0; index < response.data.length; index++) {
                if (response.data[index].environment == string) {
                    data = response.data[index][value]
                }
            }
            return { data: data }
        })
    }
}