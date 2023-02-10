export function filterForm() {
  return {
    field: {
      email: "input",
      username: "input",
      joinDate: "input",
      status: "selectOption",
      VIP_status: "selectOption",
      company: "selectOption",
      platform: "selectOption",
      subscription_status: "selectOption",
      sessions_count: {
        minimum: "input",
        maximun: "input",
      },
    },
    status: {
      email: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      password: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      joinDate: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      status: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      VIP_status: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      company: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      platform: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      subscription_status: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      sessions_count: {
        minimum: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        maximun: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
      },
    },
    xpath: {
      email: ".card form  input[name='email']",
      username: ".card form  input[name='name']",
      joinDate: ".card form  input[name='date_range']",
      status: ".card form select[name='status']",
      VIP_status: ".card form select[name='vip']",
      company: ".card form select[name='team_name']",
      platform: ".card form input[placeholder='Select Platform']",
      subscription_status:
        ".card form input[placeholder='Select Subscription Status']",
      sessions_count: {
        minimum: ".card form input[name='session_min']",
        maximun: ".card form input[name='session_max']",
      },
    },
  };
}

export function profilePage() {
  return {
    profile: {},
    settings: {
      field: {
        first_name: "input",
        last_name: "input",
        email: "input",
        contact_number: "input",
        image: "uploadFile",
        status: {
          active: "radio",
          inactive: "radio",
        },
        date_of_birth: "input",
        nickname: "input",
        vip_status: {
          yes: "radio",
          no: "radio",
        },
        vip_status_expiry: "input",
        billing_account: {
          VHX_ID: "input",
          Active_VHX_Product: "radio",
          Sync_to_VHX: "radio",
        },
        password: "input",
      },
      status: {
        first_name: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: false,
        },
        last_name: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: false,
        },
        email: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        contact_number: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        image: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        status: {
          active: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
          inactive: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
        },
        date_of_birth: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        nickname: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        vip_status: {
          yes: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
          no: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
        },
        vip_status_expiry: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        billing_account: {
          VHX_ID: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
          Active_VHX_Product: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
          Sync_to_VHX: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
        },
        password: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: true,
        },
      },
      xpath: {
        first_name: "input[name='first_name']",
        last_name: "input[name='last_name']",
        email: "input[name='email']",
        contact_number: "input[name='contactNumber']",
        image: "input[name='image']",
        status: {
          active:
            "form div:nth-child(4) div:nth-child(2) label:first-child input",
          inactive:
            "form div:nth-child(4) div:nth-child(2) label:last-child input",
        },
        date_of_birth: "input[name='dob']",
        nickname: "input[name='nickname']",
        vip_status: {
          yes: "form div:nth-child(6) div:first-child label:first-child input",
          no: "form div:nth-child(6) div:first-child label:last-child input",
        },
        vip_status_expiry: "input[name='vip_expire']",
        billing_account: {
          VHX_ID: "input[name='vhx_id']",
          Active_VHX_Product: "input[name='active_vhx_product']",
          Sync_to_VHX: "input[name='sync_to_vhx']",
        },
        password: "input[name='password']",
      },
      validation: {
        first_name: [{}],
        last_name: [{}],
        email: [{}],
        contact_number: [{}],
        image: [{}],
        status: {
          active: [{}],
          inactive: [{}],
        },
        date_of_birth: [{}],
        nickname: [{}],
        vip_status: {
          yes: [{}],
          no: [{}],
        },
        vip_status_expiry: [{}],
        billing_account: {
          VHX_ID: [{}],
          Active_VHX_Product: [{}],
          Sync_to_VHX: [{}],
        },
        password: [{}],
      },
    },
    sessions: {
      field: {
        second: "input",
        select_date_range: "input",
      },
      status: {
        second: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: true,
        },
        select_date_range: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: true,
        },
      },
      xpath: {
        second: "form input[name='duration']",
        select_date_range: "form input[name='date_range']",
      },
      validation: {
        second: [{}],
        select_date_range: [{}],
      },
    },
    journals: {},
    comments: {},
    logs: {
      field: {
        description: "textarea",
      },
      status: {
        description: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: true,
        },
      },
      xpath: {
        description: "textarea[name='description']",
      },
      validation: {
        description: [{}],
      },
    },
  };
}

export function button() {
  return {
    xpath: {
      mainTab: "ul#sidebarnav li a span",
      clear: ".card form a.btn",
      go: ".card form button[id='filterUserBtn']",
      export: ".customize-input a.btn.export",
      download: ".customize-input a.btn.btn.download",
      delete: "tbody tr td:last-child button",
      confirm: ".modal-footer button:first-child",
      close: ".modal-footer button:last-child",
      update: "div.card-body form div button",
      addSession: "div.card-body form div button",
      add: "div.card-body form div button",
      updateBio: "div.user-about button.btn",
      bulkDeleteButtonIcon: "#bulkDeleteButton",
      addBioIcon: "div.user-about small > i.fa",
      resetBillingSubscriptions: "button[data-toggle$='modal']",
      updateSessionBtn: "div.sessionsTable button.btn",
      removeSessionIcon: ".sessionsTable button.removeSessionBtn",
      profile: "ul.nav li a",
      settings: "ul.nav li a",
      sessions: "ul.nav li a",
      journals: "ul.nav li a",
      comments: "ul.nav li a",
      logs: "ul.nav li a",
    },
    value: {
      mainTab: "Users",
      clear: "Clear",
      go: "Go",
      export: "Export",
      download: "Download",
      delete: "Delete",
      confirm: "Confirm",
      close: "Close",
      update: "Update",
      addSession: "Add Session",
      add: "Add",
      updateBio: "Update Bio",
      resetBillingSubscriptions: "Reset Billing Subscriptions",
      profile: "Profile",
      settings: "Settings",
      sessions: "Sessions",
      journals: "Journals",
      comments: "Comments",
      logs: "Logs",
      updateSessionBtn: "Update",
    },
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: ".page-breadcrumb h3",
      profilePage: ".page-breadcrumb h3",
      sessionTabTitle: "#session-tab h4",
      logsTabTitle: "#logs-tab h4",
    },
    value: {
      mainPage: "Users",
      profilePage: "User Profile",
      sessionTabTitle: "Add Session",
      logsTabTitle: "Add User Log",
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      mainPage: "table thead tr th",
      sessionTable: "div strong",
      journalTable: "#journal-tab table> thead >tr> th",
      commentTable: "#comment-tab thead tr th",
      logsTable: "#logs-tab thead tr th",
    },
    value: {
      mainPage: [
        "SN",
        "Name",
        "Email",
        "VIP Status",
        "VIP Exprry Date",
        "Platform",
        "Subscription",
        "Sessions",
        "Streak",
        "Last Session Date",
        "Last Logged In Date",
        "Statys",
        "Joined Date",
        "Action",
      ],
      sessionTable: ["Video", "Duration", "Date and Time", "Action"],
      journalTable: ["SN", "Grateful", "For", "Notes", "Last", "Update Date"],
      commentTable: ["SN", "Video", "Comment", "Date", "Action"],
      logsTable: ["SN", "Description", "Created By", "Action"],
    },
  };
}

export function sessionTableBody() {
  return {
    xpath: ".sessionsTable  div div input.form-control",
    theadCheckbox: "#selectAllSession",
    tbodyCheckbox: "input.selectSession",
    columns: { 2: "Duration", 3: "Date and Time" },
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
      2: "Name",
      3: "Email",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: ".card-body",
        paginationCount: ".custom-pagination:last-child ul li",
        preview: ".custom-pagination:last-child ul li:nth-child(2) a",
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

export function confirmModal() {
  return {
    xpath: {
      modalLable: "#generalModalLabel",
      modalDesc: "#generalModalDescription",
    },
    value: {
      modalLable: "Confirm Delete User",
      modalDesc: "Are you sure?",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/users",
    profilePage: "/profile",
  };
}

export function userDetailsProfilePage() {
  return {
    image: "",
    name: "div.profile-info h4",
    eamil: "div.card-body.user-profile-info p",
    joinDate: "div.card-body.user-profile-info p",
    user_streak: "div.card-body.user-profile-info p",
    time_zome: "div.card-body.user-profile-info p",
    bio: "div.card-body.user-profile-info p",
  };
}

export function alertMessage() {
  return {
    xpath: {
      deleteAlert: ["", ""],
      editAlert: [".alert.alert-success", "button[data-dismiss='alert'] span"],
      billingSubscriptionResetAlert: [
        ".alert.alert-success",
        "button[data-dismiss='alert'] span",
      ],
      sessionDeleteAlert: [
        ".alert.alert-success",
        "button[data-dismiss='alert'] span",
      ],
      sessionAddAlert: [
        ".alert.alert-success",
        "button[data-dismiss='alert'] span",
      ],
    },
    value: {
      deleteAlert: ["User updated Successfully", ""],
      editAlert: ["User updated Successfully", "×"],

      billingSubscriptionResetAlert: [
        "User Billing Subscription Reset Successfully",
        "×",
      ],

      sessionAddAlert: ["  Session added Successfully", "×"],

      sessionDeleteAlert: ["Session deleted successfully", "×"],
    },
  };
}

export function breadCrumbs() {
  return {
    xpath: {
      profilePage: "ol.breadcrumb li a",
    },
    value: {
      profilePage: ["Users", "User Profile"],
    },
  };
}
