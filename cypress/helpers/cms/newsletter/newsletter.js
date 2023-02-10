export function pageTitle() {
  return {
    xpath: {
      mainPage: "div.page-breadcrumb h3",
      createPage: "div.page-breadcrumb h3",
      editPage: "div.page-breadcrumb h3",
    },
    value: {
      mainPage: "Newsletter",
      createPage: "Add Newsletter",
      editPage: "Edit Newsletter",
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
      createPage: ["Newsletter", "Add Newsletter"],
      editPage: ["Newsletter", "Edit Newsletter"],
    },
  };
}

export function urls() {
  return {
    mainPage: "/newsletter",
    createPage: "/create",
  };
}
export function button() {
  return {
    xpath: {
      mainTab: "ul#sidebarnav li a span",
      addNew: "div.customize-input a",
      edit: "tbody tr td:last-child a",
      delete: "tbody tr td:last-child button",
      save: "form div button#addNewsletterBtn",
      cancel: "form  a.btn",
      update: "form div:nth-child(7) button",
      confirm: "div.modal-footer button:first-child",
      close: "div.modal-footer button:last-child",
    },
    value: {
      mainTab: "Newsletter",
      addNew: "Add New",
      save: "Save",
      cancel: "Cancel",
      update: "Update",
      confirm: "Confirm",
      close: "Close",
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
      modalLable: "Confirm Delete Newsletter",
      modalDesc: "Are you sure?",
    },
  };
}

export function alertMessage() {
  return {
    xpath: {
      createNewsletter: [".alert.alert-success", "button[class='close'] span"],

      editAlert: [".alert.alert-success", "button[class='close'] span"],
    },
    value: {
      createNewsletter: ["The newsletter has been added successfully.", "×"],

      editAlert: ["The newsletter has been updated successfully", "×"],
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      newsletterTable: "thead tr th",
    },
    value: {
      newsletterTable: [
        "SN",
        "Title",
        "Start Date",
        "End Date",
        "Hide",
        "Action",
      ],
    },
  };
}

export function tableBody() {
  return {
    xpath: "table tbody",
    columns: {
      2: "Title",
      3: "Start Date",
      4: "End Date",
      5: "Hide",
    },
  };
}

export function createNewslettersPageForm() {
  return {
    field: {
      title: "input",
      start_date: "input",
      end_date: "input",
      thumbnailImage: "fileUpload",
      link: "input",
      description: "input",
      hide: "checkBox",
    },
    status: {
      title: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      start_date: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      end_date: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      thumbnailImage: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      link: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      description: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      hide: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      title: "input[name='title']",
      start_date: "input[name='start_date']",
      end_date: "input[name='stop_date']",
      thumbnailImage: "input[name='thumbnail_image']",
      link: "input[name='link']",
      description: "textarea[name='description']",
      hide: "input[name='is_hide']",
    },
    validation: {
      title: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Title is required",
          requiresSubmit: true,
        },
      ],
      start_date: [{}],
      end_date: [{}],
      thumbnailImage: [{}],
      link: [{}],
      description: [{}],
      hide: [{}],
    },
  };
}

export function editNewslettersPageForm() {
  return {
    field: {
      title: "input",
      start_date: "input",
      end_date: "input",
      thumbnailImage: "fileUpload",
      link: "input",
      description: "input",
      hide: "checkBox",
    },
    status: {
      title: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      start_date: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: true,
      },
      end_date: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: true,
      },
      thumbnailImage: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      link: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      description: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      hide: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      title: "input[name='title']",
      start_date: "input[name='start_date']",
      end_date: "input[name='stop_date']",
      thumbnailImage: "input[name='thumbnail_image']",
      link: "input[name='link']",
      description: "textarea[name='description']",
      hide: "input[name='is_hide']",
    },
    validation: {
      title: [{}],
      start_date: [{}],
      end_date: [{}],
      thumbnailImage: [{}],
      link: [{}],
      description: [{}],
      hide: [{}],
    },
  };
}
