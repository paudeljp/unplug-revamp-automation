export function buttons() {
  return {
    xpath: {
      mainTab: "#sidebarnav li  a.sidebar-link",
      subTab: "#sidebarnav li  a.sidebar-link",
      last30DaysBtn: ".btn.dropdown-toggle",
      applyFilterBtn: "#applyDateFilterBtn",
    },
    value: {
      mainTab: "Analytics ",
      subTab: " Activity",
      last30DaysBtn: "Last 30 Days",
      applyFilterBtn: "Apply",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/activity",
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: "h3.page-title",
    },
    value: {
      mainPage: "Activity Analytics",
    },
  };
}

export function mainFilterForm() {
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

export function searchTermsFilterForm() {
  return {
    field: {
      show: "selectOption",
      search: "input",
    },
    status: {
      show: {
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
      show: "select[name='searchTermTbl_length']",
      search: "input[aria-controls='searchTermTbl']",
    },
  };
}

export function mostViewedFilterForm() {
  return {
    field: {
      show: "selectOption",
      search: "input",
    },
    status: {
      show: {
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
      show: "select[name='mostViewedTeacherTbl_length']",
      search: "input[aria-controls='mostViewedTeacherTbl']",
    },
  };
}

export function topContentFilterForm() {
  return {
    field: {
      show: "selectOption",
      search: "input",
    },
    status: {
      show: {
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
      show: "select[name='mostViewedVideoTbl_length']",
      search: "input[aria-controls='mostViewedVideoTbl']",
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      searchTerms: "table#searchTermTbl th",
      mostViewed: "table#mostViewedTeacherTbl th",
      topContent: "table#mostViewedVideoTbl thead td",
    },
    value: {
      searchTerms: ["Terms", "# of Searches"],
      mostViewed: ["Teacher", "Plays", "Finishes", "Min Watched"],
      topContent: ["Top Videos", "Teacher", "Plays", "Finishes", "Min Watched"],
    },
  };
}

export function tableBodySearchTerms() {
  return {
    xpath: "table#searchTermTbl tbody",
    emptyTable: ["td.dataTables_empty", "No matching records found"],
    columns: {
      1: "terms",
      2: "ofSearches",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: "#searchTermTbl_paginate",
        paginationCount: "#searchTermTbl_paginate ul li.page-item",
        previous: "#searchTermTbl_previous",
        next: "#searchTermTbl_next",
      },
      value: {
        container: null,
        previous: "Previous",
        next: "Next",
      },
    },
  };
}

export function tableBodySearchTerms() {
  return {
    xpath: "table#searchTermTbl tbody",
    emptyTable: ["td.dataTables_empty", "No matching records found"],
    columns: {
      1: "teacher",
      2: "play",
      3: "finishes",
      4: "minWatched",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: "#mostViewedTeacherTbl_paginate",
        paginationCount: "#mostViewedTeacherTbl_paginate ul li.page-item",
        previous: "#mostViewedTeacherTbl_previous",
        next: "#mostViewedTeacherTbl_next",
      },
      value: {
        container: null,
        previous: "Previous",
        next: "Next",
      },
    },
  };
}

export function tableBodyTopContent() {
  return {
    xpath: "table#mostViewedVideoTbl tbody",
    emptyTable: ["td.dataTables_empty", "No matching records found"],
    columns: {
      1: "topVideos",
      2: "ofSearches",
      3: "plays",
      4: "finishes",
      5: "minWatched",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: "#mostViewedVideoTbl_paginate",
        paginationCount: "#mostViewedVideoTbl_paginate ul li.page-item",
        previous: "#mostViewedVideoTbl_previous",
        next: "#mostViewedVideoTbl_next",
      },
      value: {
        container: null,
        previous: "Previous",
        next: "Next",
      },
    },
  };
}
