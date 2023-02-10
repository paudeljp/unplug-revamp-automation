export function filterForm() {
  return {
    field: {
      searchByEmail: "inputWithEnterOption",
    },
    status: {
      searchByEmail: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      searchByEmail: "input[placeholder='Search By Email']",
    },
  };
}

export function buttons() {
  return {
    xpath: {
      mainTab: "#sidebarnav li  a.sidebar-link",
      searchClear: "a.btn",
      searchGo: "#filterUserBtn",
      editSaveBtn: "button.submit",
      cancelBtn: "a[role='button']",
      confirmDelete: ".modal-footer button[type='submit']",
      cancelDelete: ".modal-footer button[type='button']",
      modalCloseBtn: ".modal-dialog button[class='close']",
    },
    value: {
      mainTab: "Journals",
      searchClear: "Clear",
      searchGo: "Go",
      editSaveBtn: "Save",
      cancelBtn: "Cancel",
      confirmDelete: "Confirm",
      cancelDelete: "Close",
      modalCloseBtn: "×",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/journals",
    editPage: "/journals/",
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: "h3.page-title",
      editPage: "h3.page-title",
    },
    value: {
      mainPage: "Journals",
      editPage: "Edit Journal",
    },
  };
}

export function breadCrumbs() {
  return {
    xpath: {
      editPage: "li.breadcrumb-item a",
    },
    value: {
      editPage: ["Journals", "Edit Journal"],
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      mainPage: "#mytableofrows th",
    },
    value: {
      mainPage: [
        "SN",
        "User",
        "Grateful For",
        "Notes",
        "Journal Date",
        "Created At",
        "Action",
      ],
    },
  };
}

export function tableBody() {
  return {
    xpath: "#mytableofrows tbody",
    emptyTable: ["tbody td", "No Records found."],
    columns: {
      2: "user",
      3: "gratefulFor",
      4: "notes",
      5: "journalDate",
      6: "createdAt",
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

export function editForm() {
  return {
    field: {
      user: "input",
      gratefulForFirst: "input",
      gratefulForSecond: "input",
      gratefulForThird: "input",
      notes: "textarea",
    },
    status: {
      user: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: true,
      },
      gratefulForFirst: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      gratefulForSecond: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      gratefulForThird: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      notes: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      user: ".form-group:nth-child(3) input",
      gratefulForFirst:
        ".form-group:nth-child(4) div.input-group:nth-child(2) input",
      gratefulForSecond:
        ".form-group:nth-child(4) div.input-group:nth-child(3) input",
      gratefulForThird:
        ".form-group:nth-child(4) div.input-group:nth-child(4) input",
      notes: "textarea[name='text']",
    },
    // validation: {
    //   user: [
    //     {
    //       xpath: "",
    //       value: "",
    //       message: "",
    //       requiresSubmit: false,
    //     },
    //     {
    //       xpath: "",
    //       value: null,
    //       message: "",
    //       requiresSubmit: false,
    //     },
    //   ],
    // },
  };
}

export function alertMessage() {
  return {
    xpath: {
      editAlert: ["div.alert", "button[aria-label='Close']"],
      deleteAlert: ["div.alert", "button[aria-label='Close']"],
    },
    value: {
      editAlert: ["Journal updated successfully", null],
      deleteAlert: ["Journal deleted successfully", null],
    },
  };
}
