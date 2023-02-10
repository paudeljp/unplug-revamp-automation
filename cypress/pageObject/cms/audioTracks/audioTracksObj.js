import * as createModule from "./layout/createModule";
import * as editMdule from "./layout/editModule";

class audioTracksModule {
  init() {
    if (0 == 0) {
      context("Create", () => {
        createModule.createObj();
      });
    }
    if (0 == 0) {
      context("Edit", () => {
        editMdule.editObj();
      });
    }
  }
}

export default audioTracksModule;
