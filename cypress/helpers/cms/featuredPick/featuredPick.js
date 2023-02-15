export function createForm() {
  return {
    field: {
      select_category: "selectOption",
      select_featured_item: "dropDownWithSearch",
      start_date: "input",
      end_date: "input",
    },
    status: {
      select_category: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      select_featured_item: {
        isPresent: false,
        visibility: false,
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
    },
    xpath: {
      select_category: "select[id='category_select']",
      select_featured_item: [
        ".teacher > .select2-container > .selection > .select2-selection > #select2--container",
        "input[type='search']",
        "#select2--results li",
      ],
      start_date: "input[name='start_date']",
      end_date: "input[name='end_date']",
    },
    validation: {
      select_category: [
        {
          xpath: ".alert.alert-danger",
          value: "None",
          message: "Category is required",
          requiresSubmit: true,
        },
      ],
      select_featured_item: [{}],
      start_date: [{}],
      end_date: [{}],
    },
  };
}

export function editForm() {
  return {
    field: {
      select_category: "selectOption",
      select_featured_item: "dropDownWithSearch",
      start_date: "input",
      end_date: "input",
    },
    status: {
      select_category: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      select_featured_item: {
        isPresent: false,
        visibility: false,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      start_date: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: true,
      },
      end_date: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: true,
      },
    },
    xpath: {
      select_category: "select[id='category_select']",
      select_featured_item: [
        ".teacher > .select2-container > .selection > .select2-selection > .select2-selection__arrow",
        "input[type='search']",
        "ul.select2-results__options li",
      ],
      start_date: "input[name='start_date']",
      end_date: "input[name='end_date']",
    },
    validation: {
      select_category: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Category is required",
          requiresSubmit: true,
        },
      ],
      select_featured_item: [{}],
      start_date: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Something went wrong",
          requiresSubmit: true,
        },
      ],
      end_date: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Something went wrong",
          requiresSubmit: true,
        },
      ],
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
      update: "div.card-body form button",
      cancel: "div.card-body form a",
      confirm: "div.modal-footer button:first-child",
      close: "div.modal-footer button:last-child",
    },
    value: {
      mainTab: "Featured Pick",
      addNew: "Add New",
      edit: "Edit",
      delete: "Delete",
      save: "Save",
      update: "Update",
      cancel: "Cancel",
      confirm: "Confirm",
      close: "Close",
    },
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: ".page-breadcrumb h3",
      createPage: ".page-breadcrumb h3",
      editPage: ".page-breadcrumb h3",
    },
    value: {
      mainPage: "Featured Pick",
      createPage: "Add Featured Pick",
      editPage: "Edit Featured Pick",
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      mainPage: "table thead tr th",
    },
    value: {
      mainPage: [
        "SN",
        "Category",
        "Featured Item",
        "Start Date",
        "End Date",
        "Action",
      ],
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
      2: "select_category",
      3: "select_featured_item",
      4: "start_date",
      5: "end_date",
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
      modalLable: "Confirm Delete featured-pick",
      modalDesc: "Are you sure?",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/featured-pick",
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
      createAlert: ["The featured pick has been added successfully.", "×"],
      editAlert: ["The featured pick has been updated successfully", "×"],
      deleteAlert: ["The featured pick has been deleted successfully", "×"],
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
      createPage: ["Featured Pick", "Add Featured Pick"],
      editPage: ["Featured Pick", "Edit Featured Pick"],
    },
  };
}
