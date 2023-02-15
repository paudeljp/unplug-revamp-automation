export function createForm() {
  return {
    field: {
      year: "input",
      month: "dropDownWithSearch",
      playlist: "dropDownWithSearch",
    },
    status: {
      year: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      month: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      playlist: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      year: "input[name='year']",
      month: [
        "#select2-month-container",
        "input.select2-search__field",
        "ul.select2-results__options li",
      ],
      playlist: [
        "#select2-playlist_id-container",
        "input.select2-search__field",
        "ul.select2-results__options li",
      ],
    },
    validation: {
      year: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Something went wrong",
          requiresSubmit: true,
        },
      ],
      month: [{}],
      playlist: [{}],
    },
  };
}

export function editForm() {
  return {
    field: {
      year: "input",
      month: "dropDownWithSearch",
      playlist: "dropDownWithSearch",
    },
    status: {
      year: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      month: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      playlist: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      year: "input[name='year']",
      month: [
        "#select2-month-container",
        "input.select2-search__field",
        "ul.select2-results__options li",
      ],
      playlist: [
        "#select2-playlist_id-container",
        "input.select2-search__field",
        "ul.select2-results__options li",
      ],
    },
    validation: {
      year: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Something went wrong",
          requiresSubmit: true,
        },
      ],
      month: [{}],
      playlist: [{}],
    },
  };
}

export function button() {
  return {
    xpath: {
      mainTab: "ul#sidebarnav li a span",
      addNew: "div.customize-input.float-right a",
      edit: "tbody tr td a.btn",
      delete: "tbody tr td button.btn",
      save: "div.card-body form button",
      cancel: "div.card-body form a",
      confirm: "div.modal-footer button:first-child",
      close: "div.modal-footer button:last-child",
      update: "form div.form-group button",
    },
    value: {
      mainTab: "Monthly Challenge",
      addNew: "Add New",
      edit: "Edit",
      delete: "Delete",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      close: "Close",
      update: "Update",
    },
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: ".page-breadcrumb h3",
      editPage: ".page-breadcrumb h3",
      createPage: ".page-breadcrumb h3",
    },
    value: {
      mainPage: "Monthly Challenge",
      editPage: "Edit Monthly Challenge",
      createPage: "Add Monthly Challenge",
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      mainPage: "table thead tr th",
    },
    value: {
      mainPage: ["SN", "Playlist", "Featured Month", "Action"],
    },
  };
}

export function tableBody() {
  return {
    xpath: ".table-responsive >table >tbody",
    emptyTable: [
      ".table-responsive >table >tbody > tr > td",
      "No Records found.",
    ],
    columns: {
      2: "playlist",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: ".card-body",
        paginationCount: ".custom-pagination:last-child ul li",
        preview: "div.custom-pagination:last-child ul li:nth-last-child(2) a",
        next: "div.custom-pagination:last-child ul li:nth-child(2) a",
      },
      value: {
        container: null,
        preview: "«",
        next: "»",
      },
    },
  };
}

export function confirmModal() {
  return {
    xpath: {
      modalLable: "#generalModalLabel",
      modalDesc: "#generalModalDescription",
    },
    value: {
      modalLable: "Confirm Delete Featured Video",
      modalDesc: "Are you sure?",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/featured-playlists",
    createPage: "/create",
  };
}
export function alertMessage() {
  return {
    xpath: {
      createAlert: [
        ".alert.alert-success",
        "button[data-dismiss='alert'] span",
      ],
      editAlert: [".alert.alert-success", "button[data-dismiss='alert'] span"],
      deleteAlert: [
        ".alert.alert-success",
        "button[data-dismiss='alert'] span",
      ],
    },
    value: {
      createAlert: ["Monthly Challenge added successfully", "×"],
      editAlert: ["Monthly Challenge updated successfully", "×"],
      deleteAlert: ["Monthly Challenge deleted successfully", "×"],
    },
  };
}

export function breadCrumbs() {
  return {
    xpath: {
      createPage: "ol.breadcrumb li a",
      editPage: "ol.breadcrumb li a",
    },
    value: {
      createPage: ["Monthly Challenge", "Add Monthly Challenge"],
      editPage: ["Monthly Challenge", "Edit Monthly Challenge"],
    },
  };
}
