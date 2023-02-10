const timeOut = '60000';

export default class tablePage {
    grabTableData(xpath, arrayData, tableCountArray, paginationData) {
        var finalData = [];
        var count = 0;
        return cy.get(paginationData.xpath.container, { setTimeout: timeOut }).then(paginationStatus => {
            if (paginationStatus.find(paginationData.xpath.paginationCount).length > 0) {
                cy.get(paginationData.xpath.paginationCount, { setTimeout: timeOut }).then(paginationCount => {
                    let loopCount = (paginationData.xpath.paginationCount).length;
                    for (let index = 0; index < loopCount; index++) {
                        var status = false;
                        if(index < loopCount){
                            cy.get(xpath, { setTimeout: timeOut }).then(response => {
                                var increment = 0;
                                for (let i = 1; i <= response.find('tr').length; i++) {
                                    increment++;
                                    var tempDatas = [];
                                    var rowDatas = [];
                                    for (let j = 0; j < tableCountArray.length; j++) {
                                        rowDatas.push(response.find('tr:nth-child(' + i + ') > td:nth-child(' + tableCountArray[j] + ')').text().trim())
                                    }
                                    for (let k = 0; k < rowDatas.length; k++) {
                                        tempDatas.push(rowDatas[k].trim())
                                    }
                                    if (JSON.stringify(tempDatas.sort()) == JSON.stringify(arrayData.sort())) {
                                        finalData = tempDatas;
                                        count = increment;
                                        status = true;
                                    }
                                }
                                if(status){
                                    index = index + loopCount;

                                }else{
                                    cy.get(paginationData.xpath.next, { setTimeout: timeOut }).then(paginationDisabled => {
                                        if (paginationData.disabled == "tag") {
                                            if (paginationDisabled.is(":disabled") == false) {
                                                if (paginationData.value.next == null) {
                                                    cy.get(paginationData.xpath.next, { setTimeout: timeOut }).click({ force: true }).wait(5000);
                                                } else {
                                                    cy.get(paginationData.xpath.next, { setTimeout: timeOut }).contains(paginationData.value.next).click({ force: true }).wait(5000);
                                                }
                                            }
                                        }
                                        if (paginationData.disabled == "class") {
                                            if (paginationDisabled.hasClass("disabled").length == 0) {
                                                if (paginationData.value.next == null) {
                                                    cy.get(paginationData.xpath.next, { setTimeout: timeOut }).click({ force: true }).wait(5000);
                                                } else {
                                                    cy.get(paginationData.xpath.next, { setTimeout: timeOut }).contains(paginationData.value.next).click({ force: true }).wait(5000);
                                                }
                                            }
    
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
            } 
            
            if (paginationStatus.find(paginationData.xpath.paginationCount).length == 0) {
                cy.get(xpath, { setTimeout: timeOut }).then(response => {
                    var increment = 0;
                    for (let i = 1; i <= response.find('tr').length; i++) {
                        increment++;
                        var tempDatas = [];
                        var rowDatas = [];
                        for (let j = 0; j < tableCountArray.length; j++) {
                            rowDatas.push(response.find('tr:nth-child(' + i + ') > td:nth-child(' + tableCountArray[j] + ')').text().trim())
                        }
                        for (let k = 0; k < rowDatas.length; k++) {
                            tempDatas.push(rowDatas[k].trim())
                        }
                        if (JSON.stringify(tempDatas.sort()) == JSON.stringify(arrayData.sort())) {
                            finalData = tempDatas;
                            count = increment;
                        }
                    }
                })
            }
        }).then(() => {
            return {
                count: count,
                data: finalData
            }
        })
    }
}