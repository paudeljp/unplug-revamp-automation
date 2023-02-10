export function buttons() {
  return {
    xpath: {
      mainTab: "#sidebarnav li  a.sidebar-link",
      addNewBtn: "a.btn-success",
      saveBtn: "button[class='mt-1 btn btn-primary']",
      cancelBtn: "a[role='button']",
      editSaveBtn: "button.submit",
      confirmDelete: ".modal-footer button[type='submit']",
      cancelDelete: ".modal-footer button[type='button']",
      modalCloseBtn: ".modal-dialog button[class='close']",
    },
    value: {
      mainTab: "Feelings",
      addNewBtn: "Add New",
      saveBtn: "Save",
      cancelBtn: "Cancel",
      editSaveBtn: "Save",
      confirmDelete: "Confirm",
      cancelDelete: "Close",
      modalCloseBtn: "×",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/feelings",
    createPage: "/feelings/create",
    editPage: "/feelings/",
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
      mainPage: "Feelings",
      createPage: "Add Feelings",
      editPage: "Edit Feelings",
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
      createPage: ["Feelings", "Add Feelings"],
      editPage: ["Feelings", "Edit Feelings"],
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      mainPage: "#mytableofrows th",
    },
    value: {
      mainPage: ["SN", "Title", "Action"],
    },
  };
}

export function tableBody() {
  return {
    xpath: "#mytableofrows tbody",
    columns: {
      2: "title",
    },
    // pagination: {
    //   disabled: "class",
    //   xpath: {
    //     container: "div.custom-pagination:first-child",
    //     paginationCount: "div.custom-pagination:first-child ul li",
    //     previous: "div.custom-pagination:first-child ul li:nth-child(2)",
    //     next: "div.custom-pagination:first-child ul li:nth-last-child(2)",
    //   },
    //   value: {
    //     container: null,
    //     previous: "«",
    //     next: "»",
    //   },
    // },
  };
}

export function createForm() {
  return {
    field: {
      title: "input",
    },
    status: {
      title: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      title: "#title",
    },
    validation: {
      title: [
        {
          xpath: "",
          value: "",
          message: "",
          requiresSubmit: false,
        },
        {
          xpath: "",
          value: null,
          message: "",
          requiresSubmit: false,
        },
      ],
    },
  };
}

export function editForm() {
  return {
    field: {
      title: "input",
    },
    status: {
      title: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
    },
    xpath: {
      title: "#title",
    },
    validation: {
      title: [
        {
          xpath: "",
          value: "",
          message: "",
          requiresSubmit: false,
        },
        {
          xpath: "",
          value: null,
          message: "",
          requiresSubmit: false,
        },
      ],
    },
  };
}

export function alertMessage() {
  return {
    xpath: {
      createAlert: ["div.alert", "button[aria-label='Close']"],
      editAlert: ["div.alert", "button[aria-label='Close']"],
      deleteAlert: ["div.alert", "button[aria-label='Close']"],
    },
    value: {
      createAlert: ["Feelings added successfully", null],
      editAlert: ["Feelings updated successfully", null],
      deleteAlert: ["Feelings deleted successfully", null],
    },
  };
}
