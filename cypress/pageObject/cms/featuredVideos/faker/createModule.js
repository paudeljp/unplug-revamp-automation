import { faker } from "@faker-js/faker";

export function fakerObj(dataPath, filePath, string) {
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
          var currentDate = `${currMonth}-${currDay}-${currYear}`;

          datas.data[index].rangeDate = `${previousDate} - ${currentDate}`;
          datas.data[index].featuredDate = "";
          datas.data[index].featuredTeacher = "";
          datas.data[index].featuredVideo = "";
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}

export function storeObj(dataPath, string, string2) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  }).then((datas) => {
    let count = null;
    for (let index = 0; index < datas.data.length; index++) {
      if (datas.data[index].environment == string) {
        datas.data[index].rangeDate = datas.data[0].rangeDate;
        datas.data[index].featuredDate = datas.data[0].featuredDate;
        datas.data[index].featuredTeacher = datas.data[0].featuredTeacher;
        datas.data[index].featuredVideo = datas.data[0].featuredVideo;
        cy.writeFile(dataPath, datas);
        count = index;
      }
    }
  });
}
