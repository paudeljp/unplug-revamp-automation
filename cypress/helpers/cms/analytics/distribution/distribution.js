export function buttons() {
  return {
    xpath: {
      mainTab: "#sidebarnav li  a.sidebar-link",
      subTab: "#sidebarnav li  a.sidebar-link",
      appleSubscriptionsView: "a.btn-blue",
      googleSubscriptionsView: "a.btn-warning",
      webSubscriptionsView: "a.btns-success",
      last30DaysBtn: ".btn.dropdown-toggle",
      applyFilterBtn: "#applyDateFilterBtn",
    },
    value: {
      mainTab: "Analytics ",
      subTab: " Distribution",
      appleSubscriptionsView: "View",
      googleSubscriptionsView: "View",
      webSubscriptionsView: "View",
      last30DaysBtn: "Last 30 Days",
      applyFilterBtn: "Apply",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/distribution",
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: "h3.page-title",
    },
    value: {
      mainPage: "Distribution",
    },
  };
}

export function filterForm() {
  return {
    field: {
      last30DaysFrom: "inputWithEnterOption",
      last30DaysTo: "inputWithEnterOption",
    },
    status: {
      last30DaysFrom: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      last30DaysTo: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      last30DaysFrom: "input[name='dateFrom']",
      last30DaysTo: "input[name='dateTo']",
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      mainPage: ".top-promos-code table th",
    },
    value: {
      mainPage: ["Name", "$", "Code", "Discount", "Used", "Date"],
    },
  };
}

export function tableBody() {
  return {
    xpath: ".top-promos-code table tbody",
    columns: {
      1: "name",
      2: "dollar",
      3: "code",
      4: "discount",
      5: "used",
      6: "date",
    },
  };
}
