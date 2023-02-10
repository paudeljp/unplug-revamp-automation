const { faker } = require("@faker-js/faker");
export function fakerObj(dataPath, string) {
  const d = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].year = new Date().getFullYear();
          datas.data[index].month = monthNames[d.getMonth()];
          datas.data[index].playlist = "Get Inspired";
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}

export function storeObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].select_category = datas.data[0].select_category;

          datas.data[index].year = datas.data[0].year;
          datas.data[index].month = datas.data[0].month;
          datas.data[index].playlist = datas.data[0].playlist;
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}
