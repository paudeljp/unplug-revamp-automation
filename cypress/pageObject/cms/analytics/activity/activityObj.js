import * as filterModule from "./layout/filterModule";

class activityModule {
  init() {
    if (0 == 0) {
      context("Main Filter", () => {
        filterModule.mainFilterObj();
      });
    }

    if (0 == 0) {
      context("Search Terms Filter", () => {
        filterModule.searchTermsFilterObj();
      });
    }

    if (0 == 0) {
      context("Most Viewed Filter", () => {
        filterModule.mostViewedFilterObj();
      });
    }

    if (0 == 0) {
      context("Top Content Filter", () => {
        filterModule.topContentFilterObj();
      });
    }
  }
}

export default activityModule;
