import { faker } from "@faker-js/faker";

export function storeObj(dataPath, string) {
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

          datas.data[index].email = "anil@gmail.com";
          datas.data[index].username = "anil";
          datas.data[index].joinDate = `${previousDate} - ${currentDate}`;
          datas.data[index].status = "Active";
          datas.data[index].VIP_status = "VIP";
          datas.data[index].company = "admin";
          datas.data[index].platform = "Apple";
          datas.data[index].subscription_status = "Active";
          datas.data[index].sessions_count.minimum = "1";
          datas.data[index].sessions_count.maximun = "10";
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}
