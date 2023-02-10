export function buttons() {
  return {
    xpath: {
      mainTab: "#sidebarnav li  a.sidebar-link",
      subTab: "#sidebarnav li  a.sidebar-link",
    },
    value: {
      mainTab: "Analytics ",
      subTab: " Companies",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/companies",
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: "h3.page-title",
    },
    value: {
      mainPage: "Companies",
    },
  };
}

export function filterForm() {
  return {
    field: {
      showEntries: "selectOption",
      search: "input",
    },
    status: {
      showEntries: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      search: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      showEntries: "select[name='companiesTbl_length']",
      search: "input[type='search']",
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      companies: "table#companiesTbl th",
    },
    value: {
      companies: [
        "Company",
        "Code",
        "Subscriptions",
        "Redemptions",
        "Status",
        "Date",
        "Revenue",
        "Team Link",
      ],
    },
  };
}

export function tableBodyCompanies() {
  return {
    xpath: "table#companiesTbl tbody",
    emptyTable: ["td.dataTables_empty", "No matching records found"],
    columns: {
      1: "company",
      2: "code",
      3: "subscriptions",
      4: "redemptions",
      5: "status",
      6: "date",
      7: "revenue",
      8: "teamLink",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: "#companiesTbl_paginate",
        paginationCount: "#companiesTbl_paginate ul li.page-item",
        previous: "#companiesTbl_previous",
        next: "#companiesTbl_next",
      },
      value: {
        container: null,
        previous: "Previous",
        next: "Next",
      },
    },
  };
}
