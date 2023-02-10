export function pageTitle() {
  return {
    xpath: {
      mainPage: "div.page-breadcrumb h3",
      createPage: "div.page-breadcrumb h3",
      editPage: "div.page-breadcrumb h3",
    },
    value: {
      mainPage: "Timer Sound Management",
      createPage: "Add Timer Sound",
      editPage: "Edit Timer Sound",
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
      createPage: ["Timer Sounds", "Add Timer Sound"],
      editPage: ["Timer Sounds", "Edit Timer Sound"],
    },
  };
}

export function alertMessage() {
  return {
    xpath: {
      createTimeSound: [".alert.alert-success", "button[class='close'] span"],
      deleteAlert: [".alert.alert-success", "button[class='close'] span"],
      editAlert: [".alert.alert-success", "button[class='close'] span"],
    },
    value: {
      createTimeSound: ["Timer Sound added successfully", "×"],
      deleteAlert: ["Timer Sound deleted successfully", "×"],
      editAlert: ["Timer Sound Updated successfully", "×"],
    },
  };
}

export function urls() {
  return {
    mainPage: "/timer-sounds",
    createPage: "/create",
  };
}

export function button() {
  return {
    xpath: {
      mainTab: "ul#sidebarnav li a span",
      addNew: "div.customize-input a",
      save: "form div button#addTimerSoundBtn",
      cancel: "form  a.btn",
      delete: "tbody tr td button",
      update: "form div.position-relative button.btn",
      cancelReplace: "form div.position-relative button.btn",
      replaceThisTimerSoundBtn: "form div.position-relative button.btn",
      confirm: "div.modal-footer button:first-child",
      close: "div.modal-footer button:last-child",
    },
    value: {
      mainTab: "Timer Sounds",
      addNew: "Add New",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      update: "Update",
      cancelReplace: "Cancel Replace",
      replaceThisTimerSoundBtn: "Replace this timer sound",
      confirm: "Confirm",
      close: "Close",
    },
  };
}

export function createTimerSoundPageForm() {
  return {
    field: {
      title: "input",
      position: "inputfileUpload",
      uploadTimerVideo: "fileUpload",
    },
    status: {
      title: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      position: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      uploadTimerVideo: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      title: "input[name='title']",
      position: "input[name='sort_order']",
      uploadTimerVideo: "input[name='file']",
    },
    validation: {
      title: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Title is Required",
          requiresSubmit: true,
        },
      ],
      position: [{}],
      uploadTimerVideo: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Timer Sound is Required",
          requiresSubmit: true,
        },
      ],
    },
  };
}

export function editTimerSoundPageForm() {
  return {
    field: {
      title: "input",
      position: "inputfileUpload",
      uploadTimerVideo: "fileUpload",
    },
    status: {
      title: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      position: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      uploadTimerVideo: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      title: "input[name='title']",
      position: "input[name='sort_order']",
      uploadTimerVideo: "input[name='file']",
    },
    validation: {
      title: [{}],
      position: [{}],
      uploadTimerVideo: [{}],
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
      modalLable: "Confirm Delete Timer Sound",
      modalDesc: "Are you sure?",
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      timerSoundsTable: "thead tr th",
    },
    value: {
      timerSoundsTable: ["SN", "Title", "File", "Action"],
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
      2: "Title",
      3: "File",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: ".card-body",
        paginationCount: "div.custom-pagination ul li",
        preview: "div.custom-pagination:last-child ul li:nth-child(2) a",
        next: "div.custom-pagination:last-child ul li:nth-last-child(2) a",
      },
      value: {
        container: null,
        preview: "«",
        next: "»",
      },
    },
  };
}
