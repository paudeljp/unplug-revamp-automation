import * as createModule from "./layout/createModule";
import * as editModule from "./layout/editModule";

class adminsModule {
  init() {
    if (0 == 0) {
      context("Create", () => {
        createModule.createObj();
      });
    }

    if (0 == 0) {
      context("Edit", () => {
        editModule.editObj();
      });
    }
  }
}

export default adminsModule;
