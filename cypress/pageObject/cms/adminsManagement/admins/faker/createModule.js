///<reference types="cypress"/>
import { faker } from "@faker-js/faker";

export function fakerObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.data.length; index++) {
        if (datas.data[index].environment == string) {
          let fname = faker.name.firstName();
          let lname = faker.name.lastName();
          datas.data[index].firstName = fname;
          datas.data[index].lastName = lname;

          datas.data[index].fullName = fname + " " + lname;

          datas.data[index].email =
            faker.name.lastName().toLowerCase() +
            faker.datatype.number({ min: 10, max: 99 }) +
            "@mailinator.com";
          datas.data[index].contact_number = faker.phone.number("9868######");
          datas.data[index].password = "Admin@12345";
          datas.data[index].image = "../file/cms/5144490.jpg";
          datas.data[index].about = faker.lorem.sentence();
          datas.data[index].role = "Customer Support";
          datas.data[index].status = "1";
          datas.data[index].staff_status = "1";
          datas.data[index].send_notification_by_email = "email";

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
      for (let index = 0; index < datas.data.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].firstName = datas.data[0].firstName;
          datas.data[index].lastName = datas.data[0].lastName;
          datas.data[index].email = datas.data[0].email;
          datas.data[index].fullName = datas.data[0].fullName;
          datas.data[index].contact_number = datas.data[0].contact_number;
          datas.data[index].password = datas.data[0].password;
          datas.data[index].image = datas.data[0].image;
          datas.data[index].about = datas.data[0].about;
          datas.data[index].role = datas.data[0].role;
          datas.data[index].status_active = datas.data[0].status;
          datas.data[index].staff_status = datas.data[0].staff_status;
          datas.data[index].send_notification_by =
            datas.data[0].send_notification_by;

          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}
