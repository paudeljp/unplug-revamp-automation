export function buttons() {
  return {
    xpath: {
      mainTab: "#sidebarnav li  a.sidebar-link",
      addNewBtn: "a.btn-success",
      confirmDelete: ".modal-footer button[type='submit']",
      cancelDelete: ".modal-footer button[type='button']",
      generateBtn: "#generateFeaturedSectionBtn",
      saveBtn: "#createFeatureBtn",
      cancelBtn: "a[role='button']",
      updateBtn: "button[class='mt-1 btn btn-primary']",
      modalCloseBtn: ".modal-dialog button[class='close']",
    },
    value: {
      mainTab: "Featured Videos",
      addNewBtn: "Add New",
      confirmDelete: "Confirm",
      cancelDelete: "Close",
      generateBtn: "Generate",
      saveBtn: "Save",
      cancelBtn: "Cancel",
      updateBtn: "Update",
      modalCloseBtn: "×",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/features",
    createPage: "/features/create",
    editPage: "/features/",
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: "h3.page-title",
      createPage: "h3.page-title",
      editPage: "h3.page-title",
    },
    value: {
      mainPage: "Featured Videos",
      createPage: "Add Featured Video",
      editPage: "Edit Featured Video",
    },
  };
}

export function breadCrumbs() {
  return {
    xpath: {
      createPage: "li.breadcrumb-item a",
      editPage: "li.breadcrumb-item a",
    },
    value: {
      createPage: ["Featured Videos", "Add Featured Video"],
      editPage: ["Featured Videos", "Edit Featured Video"],
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      mainPage: "table#mytableofrows th",
    },
    value: {
      mainPage: [
        "SN",
        "Date",
        "Featured Teacher",
        "Featured Home Video",
        "Action",
      ],
    },
  };
}

export function tableBody() {
  return {
    xpath: "table#mytableofrows tbody",
    columns: {
      2: "date",
      3: "featuredTeacher",
      4: "featuredHomeVideo",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: "div.custom-pagination:first-child",
        paginationCount: "div.custom-pagination:first-child ul li",
        previous: "div.custom-pagination:first-child ul li:nth-child(2)",
        next: "div.custom-pagination:first-child ul li:nth-last-child(2)",
      },
      value: {
        container: null,
        previous: "«",
        next: "»",
      },
    },
  };
}

export function alertMessage(date) {
  return {
    xpath: {
      createAlert: ["div.alert", "button[aria-label='Close']"],
      editAlert: ["div.alert", "button[aria-label='Close']"],
      deleteAlert: ["div.alert", "button[aria-label='Close']"],
    },
    value: {
      createAlert: ["Feature added for date " + date, null],
      editAlert: ["Feature updated successfully", null],
      deleteAlert: ["Feature deleted successfully", null],
    },
  };
}

export function createForm() {
  return {
    field: {
      rangeDate: "inputWithEnterOption",
      featuredDate: "input",
      featuredTeacher: "dropDownWithSearch",
      featuredVideo: "dropDownWithSearch",
    },
    status: {
      rangeDate: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      featuredDate: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: true,
      },
      featuredTeacher: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      featuredVideo: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      rangeDate: "input[class='form-control rangeDateInput']",
      featuredDate:
        "div[class='addFeatureDiv'] input[placeholder='Featured Date']",
      featuredTeacher: [
        ".col-sm-4:nth-child(2) span[role='combobox']",
        "input[type='search']",
        ".select2-results ul li",
      ],
      featuredVideo: [
        ".col-sm-4:last-child span[role='combobox']",
        "input[type='search']",
        ".select2-results ul li",
      ],
    },
  };
}

export function editForm() {
  return {
    field: {
      featuredDate: "input",
      featuredTeacher: "dropDownWithSearch",
      featuredVideo: "dropDownWithSearch",
      tenMinsOrLess: "dropDownWithSearch",
      twentyMinsOrLess: "dropDownWithSearch",
      fiveMinsOrLess: "dropDownWithSearch",
      overThirtyMins: "dropDownWithSearch",
      fifteenMinsOrLess: "dropDownWithSearch",
      thirtyMinsOrLess: "dropDownWithSearch",
      topicFeatured: "dropDownWithClickOption",
    },
    status: {
      featuredDate: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: true,
      },
      featuredTeacher: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      featuredVideo: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      tenMinsOrLess: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      twentyMinsOrLess: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      fiveMinsOrLess: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      overThirtyMins: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      fifteenMinsOrLess: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      thirtyMinsOrLess: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      topicFeatured: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      featuredDate: ".col-sm-4:nth-child(1) input",
      featuredTeacher: [
        ".col-sm-4:nth-child(2) span[role='combobox']",
        "input[type='search']",
        ".select2-results ul li",
      ],
      featuredVideo: [
        ".col-sm-4:nth-child(3) span[role='combobox']",
        "input[type='search']",
        ".select2-results ul li",
      ],
      tenMinsOrLess: [
        ".categoryList:nth-child(3) span[role='combobox']",
        "input[type='search']",
        ".select2-results ul li",
      ],
      twentyMinsOrLess: [
        ".categoryList:nth-child(4) span[role='combobox']",
        "input[type='search']",
        ".select2-results ul li",
      ],
      fiveMinsOrLess: [
        ".categoryList:nth-child(5) span[role='combobox']",
        "input[type='search']",
        ".select2-results ul li",
      ],
      overThirtyMins: [
        ".categoryList:nth-child(6) span[role='combobox']",
        "input[type='search']",
        ".select2-results ul li",
      ],
      fifteenMinsOrLess: [
        ".categoryList:nth-child(7) span[role='combobox']",
        "input[type='search']",
        ".select2-results ul li",
      ],
      thirtyMinsOrLess: [
        ".categoryList:nth-child(8) span[role='combobox']",
        "input[type='search']",
        ".select2-results ul li",
      ],
      topicFeatured: [
        ".card:nth-child(4) .row span[role='combobox']",
        ".select2-results ul li:first-child",
      ],
    },
  };
}
