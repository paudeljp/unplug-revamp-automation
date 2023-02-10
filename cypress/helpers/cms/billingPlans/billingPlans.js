export function buttons() {
  return {
    xpath: {
      mainTab: "#sidebarnav li  a.sidebar-link",
      addNewBtn: ".btn-success",
      saveBtn: "button.save",
      cancelBtn: "a[role='button']",
      confirmDelete: ".modal-footer button[type='submit']",
      cancelDelete: ".modal-footer button[type='button']",
      modalCloseBtn: ".modal-dialog button[class='close']",
    },
    value: {
      mainTab: "Billing Plans",
      addNewBtn: "Add New",
      saveBtn: "Save",
      cancelBtn: "Cancel",
      confirmDelete: "Confirm",
      cancelDelete: "Close",
      modalCloseBtn: "×",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/billing-plans",
    createPage: "/billing-plans/create",
    editPage: "/billing-plans/",
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: "h3.page-title",
      createPage: "h3.page-title",
      editPage: "h3.page-title",
    },
    value: {
      mainPage: "Billing Plans",
      createPage: "Add Billing Plan",
      editPage: "Edit Billing Plan",
    },
  };
}

export function breadCrumbs() {
  return {
    xpath: {
      createPage: "li.breadcrumb-item a",
      editPage: "li.breadcrumb-item a",
    },
    value: {
      createPage: ["Billing Plan", "Add Billing Plan"],
      editPage: ["Edit Billing Plan", "Edit Billing Plan"],
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      billingPlans: ".row:nth-child(1) table th",
      giftRate: ".row:nth-child(2) table th",
      teamRate: ".row:nth-child(3) table th",
    },
    value: {
      billingPlans: [
        "SN",
        "Plan Name",
        "Amount",
        "Interval",
        "Trial Period",
        "Active For",
        "Created Date",
        "Updated Date",
        "Status",
        "Action",
      ],
      giftRate: ["SN", "Old Rate", "New Rate", "Action"],
      teamRate: ["SN", "Old Rate", "New Rate", "Action"],
    },
  };
}

export function billingPlansTableBody() {
  return {
    xpath: ".row:nth-child(1) table tbody",
    columns: {
      2: "planName",
      3: "amount",
      4: "interval",
      5: "trialPeriod",
      6: "activeFor",
      7: "createdDate",
      8: "updatedDate",
      9: "status",
    },
  };
}

export function giftRateTableBody() {
  return {
    xpath: ".row:nth-child(2) table tbody",
    columns: {
      2: "oldRate",
      3: "newRate",
    },
  };
}

export function teamRateTableBody() {
  return {
    xpath: ".row:nth-child(3) table tbody",
    columns: {
      2: "oldRate",
      3: "newRate",
    },
  };
}

export function createForm() {
  return {
    field: {
      planeName: "input",
      stripeId: "input",
      amount: "input",
      currency: "input",
      billingPeriod: "selectOption",
      freeTrial: "input",
      status: "radioOption",
    },
    status: {
      planeName: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      stripeId: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      amount: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: true,
      },
      currency: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: true,
      },
      billingPeriod: {
        isPresent: true,
        visibility: true,
        disabled: true,
        compare: false,
        readOnly: false,
      },
      freeTrial: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: true,
      },
      status: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      planeName: "input[name='name']",
      stripeId: "input[name='stripe_id']",
      amount: "div.amount",
      currency: "input[value='USD']",
      billingPeriod: "select[name='interval']",
      freeTrial: "div.free-trial",
      status: "input[name='status']",
    },
    validation: {
      status: [
        {
          xpath: "div.alert",
          value: null,
          message: "Status id is required",
          requiresSubmit: true,
        },
        {
          xpath: "div.alert",
          value: "",
          message: "Something went wrong",
          requiresSubmit: true,
        },
      ],
    },
  };
}

export function editForm() {
  return {
    field: {
      planeName: "input",
      stripeId: "input",
      amount: "input",
      currency: "input",
      billingPeriod: "selectOption",
      freeTrial: "input",
      status: "radioOption",
    },
    status: {
      planeName: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      stripeId: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      amount: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: true,
      },
      currency: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: true,
      },
      billingPeriod: {
        isPresent: true,
        visibility: true,
        disabled: true,
        compare: true,
        readOnly: false,
      },
      freeTrial: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: true,
      },
      status: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      planeName: "input[name='name']",
      stripeId: "input[name='stripe_id']",
      amount: "div.amount",
      currency: "input[value='USD']",
      billingPeriod: "select[name='interval']",
      freeTrial: "div.free-trial",
      status: "input[name='status']",
    },
    validation: {
      status: [
        {
          xpath: "div.alert",
          value: "",
          message: "Something went wrong",
          requiresSubmit: true,
        },
      ],
    },
  };
}

export function alertMessage() {
  return {
    xpath: {
      createAlert: ["div.alert", "button[aria-label='Close']"],
      editAlert: ["div.alert", "button[aria-label='Close']"],
      deleteAlert: ["div.alert", "button[aria-label='Close']"],
    },
    value: {
      createAlert: ["", null],
      editAlert: ["Billing plan updated successfully", null],
      deleteAlert: ["", null],
    },
  };
}
