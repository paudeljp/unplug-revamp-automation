export function buttons() {
  return {
    xpath: {
      mainTab: "#sidebarnav li  a.sidebar-link",
      last30DaysBtn: ".btn.dropdown-toggle",
      applyFilterBtn: "#applyDateFilterBtn",
    },
    value: {
      mainTab: "Dashboard",
      last30DaysBtn: "Last 30 Days",
      applyFilterBtn: "Apply",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/home",
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: "div.content-header h1",
    },
    value: {
      mainPage: "Dashboard",
    },
  };
}

export function filterForm() {
  return {
    field: {
      platform: "selectOption",
      last30DaysFrom: "inputWithEnterOption",
      last30DaysTo: "inputWithEnterOption",
    },
    status: {
      platform: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
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
      platform: "select.selectPlatform",
      last30DaysFrom: "input[name='dateFrom']",
      last30DaysTo: "input[name='dateTo']",
    },
  };
}
