export function buttons() {
  return {
    xpath: {
      mainTab: "#sidebarnav li  a.sidebar-link",
      subTab: "#sidebarnav li  a.sidebar-link",
      iosView: "a.btn-blue",
      androidView: "a.btn-warning",
      webView: "a.btns-success",
      last30DaysBtn: ".btn.dropdown-toggle",
      applyFilterBtn: "#applyDateFilterBtn",
    },
    value: {
      mainTab: "Analytics ",
      subTab: " Financial Reports",
      iosView: "View",
      androidView: "View",
      webView: "View",
      last30DaysBtn: "Last 30 Days",
      applyFilterBtn: "Apply",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/financial-report",
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: "h3.page-title",
    },
    value: {
      mainPage: "Payment / Financial Reports",
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
      mainPage: ".billing-table thead th",
    },
    value: {
      mainPage: ["All", "Gross", "Fees", "Net"],
    },
  };
}

export function tableBody() {
  return {
    xpath: ".billing-table tbody",
    columns: {
      2: "gross",
      3: "fees",
      4: "net",
    },
  };
}
