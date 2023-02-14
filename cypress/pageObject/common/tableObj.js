import tablePage from "../../page/tablePage";
import actionButton from "../../page/actionButton";

const tableP = new tablePage();
const buttonP = new actionButton();

function grabJsonDataObj(xpathObj, dataPath, environment) {
  return cy.checkAndReadFile(dataPath).then((res) => {
    const xpath = xpathObj.xpath;
    var datas = [];
    var values = [];
    var colunms = [];
    var paginationDatas = xpathObj.pagination;
    Object.keys(xpathObj.columns).forEach((element) => {
      values.push(xpathObj.columns[element]?.trim());
      colunms.push(element?.trim());
    });
    for (let index = 0; index < res.data.length; index++) {
      if (res.data[index].environment == environment) {
        values.forEach((response) => {
          datas.push(res.data[index][response]?.trim());
        });
      }
    }
    return {
      allData: xpathObj,
      tableXpath: xpath,
      tableColumns: colunms,
      tableDatas: datas,
      pagination: paginationDatas,
    };
  });
}

export function compareTableDataObj(xpathObj, dataPath, environment) {
  grabJsonDataObj(xpathObj, dataPath, environment).then((response) => {
    tableP
      .grabTableData(
        response.tableXpath,
        response.tableDatas,
        response.tableColumns,
        response.pagination
      )
      .then((res) => {
        expect(JSON.stringify(res.data?.sort())).to.deep.eq(
          JSON.stringify(response.tableDatas?.sort())
        );
      });
  });
}

export function clickTableButtonObj(xpathObj, dataPath, environment, string) {
  grabJsonDataObj(xpathObj, dataPath, environment).then((response) => {
    tableP
      .grabTableData(
        response.tableXpath,
        response.tableDatas,
        response.tableColumns,
        response.pagination
      )
      .then((res) => {
        if (string == "tbodyCheckbox") {
          buttonP.buttonWithoutContains(
            response.tableXpath +
              "> tr:nth-child(" +
              res.count +
              ") > td " +
              response.allData[string]
          );
        } else {
          buttonP.buttonWithContains(
            response.tableXpath + "> tr:nth-child(" + res.count + ") > td",
            string
          );
        }
      });
  });
}
