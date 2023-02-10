import { faker } from "@faker-js/faker";

export function mainFilterStoreObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.data.length; index++) {
        if (datas.data[index].environment == string) {
          let date1 = new Date();
          let date2 = new Date(date1 - 7 * 24 * 60 * 60 * 1000);

          let prevDay = String(date2.getDate()).padStart(2, "0");
          let prevMonth = String(date2.getMonth() + 1).padStart(2, "0");
          let prevYear = String(date2.getFullYear());
          var previousDate = `${prevMonth}/${prevDay}/${prevYear}`;

          let currDay = String(date1.getDate()).padStart(2, "0");
          let currMonth = String(date1.getMonth() + 1).padStart(2, "0");
          let currYear = String(date1.getFullYear());
          var currentDate = `${currMonth}/${currDay}/${currYear}`;

          datas.data[index].platform = "Apple";
          datas.data[index].last30DaysFrom = previousDate;
          datas.data[index].last30DaysTo = currentDate;
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}

export function searchTermsFilterStoreObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.data.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].show = "10";
          datas.data[index].search = "sound";
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}

export function mostViewedFilterStoreObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.data.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].show = "10";
          datas.data[index].search = "Ben Decker";
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}

export function topContentFilterStoreObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.data.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].show = "10";
          datas.data[index].search = "The Anxiety Eraser";
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}
