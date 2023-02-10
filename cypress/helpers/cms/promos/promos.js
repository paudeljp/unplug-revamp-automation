export function filterForm() {
  return {
    field: {
      search_by_name_email_company_name: "input",
      redemption_limit: "input",
      promo_code: "input",
      created_date_range: "input",
      type: "selectOption",
      duration: "selectOption",
    },
    status: {
      search_by_name_email_company_name: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      redemption_limit: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      promo_code: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      created_date_range: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      type: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      duration: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      search_by_name_email_company_name: "input[name='name']",
      redemption_limit: "input[name='redemption_limit']",
      promo_code: "input[name='coupon']",
      created_date_range: "input[name='date_range']",
      type: "select[name='type']",
      duration: "select[name='duration']",
    },
  };
}

export function createStripePromoForm() {
  return {
    singleTab: {
      field: {
        coupon_name: "input",
        coupon_code: "input",
        discount: {
          percentage_dicount: "radio",
          fixed_amount_discount: "radio",
        },
        percentage_off: "input",
        maximum_redemption: "input",
        coupon_expiry_date: "input",
        plan: "selectOption",
        duration: "selectOption",
      },
      status: {
        coupon_name: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        coupon_code: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        discount: {
          percentage_dicount: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
          fixed_amount_discount: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
        },
        percentage_off: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        maximum_redemption: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        coupon_expiry_date: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        plan: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        duration: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
      },
      xpath: {
        coupon_name: "div#single input[name='name']",
        coupon_code: "div#single input[name='code']",
        discount: {
          percentage_dicount: "div#single label input[value='percent']",
          fixed_amount_discount: "div#single label input[value='amount']",
        },
        percentage_off: "div#single input[name='percent_off']",
        maximum_redemption: "div#single input[name='max_redemptions']",
        coupon_expiry_date: "div#single input[name='redeem_by']",
        plan: "div#single select[name='plan']",
        duration: "div#single select[name='duration']",
      },
      validation: {
        coupon_name: [{}],
        coupon_code: [{}],
        discount: {
          percentage_dicount: "",
          fixed_amount_discount: "",
        },
        percentage_off: "",
        maximum_redemption: "",
        coupon_expiry_date: "",
        plan: "",
        duration: "",
      },
    },
    multipleTab: {
      field: {
        coupon_name: "input",
        number_of_coupon: "input",
        discount: {
          percentage_dicount: "radio",
          fixed_amount_discount: "radio",
        },
        percentage_off: "input",
        maximum_redemption: "input",
        coupon_expiry_date: "input",
        plan: "selectOption",
        duration: "selectOption",
      },
      status: {
        coupon_name: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        number_of_coupon: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        discount: {
          percentage_dicount: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
          fixed_amount_discount: {
            isPresent: true,
            visibility: true,
            disabled: false,
            compare: false,
            readOnly: false,
          },
        },
        percentage_off: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        maximum_redemption: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        coupon_expiry_date: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        plan: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        duration: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
      },
      xpath: {
        coupon_name: "div#multiple  input[name='name']",
        number_of_coupon: "div#multiple  input[name='number_of_coupon']",
        discount: {
          percentage_dicount: "div#multiple  label input[value='percent']",
          fixed_amount_discount: "div#multiple  label input[value='amount']",
        },
        percentage_off: "div#multiple  input[name='percent_off']",
        maximum_redemption: "div#multiple  input[name='max_redemptions']",
        coupon_expiry_date: "div#multiple  input[name='redeem_by']",
        plan: "div#multiple  select[name='plan']",
        duration: "div#multiple  select[name='duration']",
      },
      validation: {
        coupon_name: [{}],
        coupon_code: [{}],
        discount: {
          percentage_dicount: "",
          fixed_amount_discount: "",
        },
        percentage_off: "",
        maximum_redemption: "",
        coupon_expiry_date: "",
        plan: "",
        duration: "",
      },
    },
  };
}

export function CreateTeamPromoForm() {
  return {
    field: {
      company_name: "input",
      company_promo_code: "input",
      team_name: "input",
      team_email: "input",
      maximum_redemptions: "input",
      coupon_expiry_date: "input",
      plan: "selectOption",
      duration: "selectOption",
      total_payment_received: "input",
    },
    status: {
      company_name: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      company_promo_code: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      team_name: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      team_email: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      maximum_redemptions: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      coupon_expiry_date: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      plan: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      duration: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      total_payment_received: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      company_name: "div.card-body form input[name='company_name']",
      company_promo_code: "div.card-body form input[name='code']",
      team_name: "div.card-body form input[name='name']",
      team_email: "div.card-body form input[name='email']",
      maximum_redemptions: "div.card-body form input[name='maximum_users']",
      coupon_expiry_date: "div.card-body form input[name='redeem_by']",
      plan: "div.card-body form select[name='plan']",
      duration: "div.card-body form select[name='duration']",
      total_payment_received: "div.card-body form input[name='amount']",
    },
    validation: {
      company_name: [{}],
      company_promo_code: [{}],
      team_name: [{}],
      team_email: [{}],
      maximum_redemptions: [{}],
      coupon_expiry_date: [{}],
      plan: [{}],
      duration: [{}],
      total_payment_received: [{}],
    },
  };
}

export function editPage() {
  return {
    regular: {
      field: {
        coupon_name: "input",
        coupon_code: "input",
        percent_off: "input",
        times_used: "input",
        maximum_redemption: "input",
        coupon_expiry_date: "input",
        plan: "selectOption",
        duration: "selectOption",
      },
      status: {
        coupon_name: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        coupon_code: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        percent_off: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        times_used: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        maximum_redemption: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: false,
        },
        coupon_expiry_date: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        plan: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        duration: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
      },
      xpath: {
        coupon_name: "div#name",
        coupon_code: "form div:nth-child(3)>div[type='text']",
        percent_off: "input[name='percent_off']",
        times_used: "form div:nth-child(5) input",
        maximum_redemption: "input[name='max_redemptions']",
        coupon_expiry_date: "input[name='redeem_by']",
        plan: "select[name='plan']",
        duration: "form div:nth-child(9) div[type='text']",
      },
      validation: {
        coupon_name: [{}],
        coupon_code: [{}],
        percent_off: [{}],
        times_used: [{}],
        maximum_redemption: [
          {
            xpath: ".alert.alert-danger.alert-dismissible",
            value: null,
            message: "Something went wrong",
            requiresSubmit: true,
          },
        ],
        coupon_expiry_date: [{}],
        plan: [{}],
        duration: [{}],
      },
    },
    team: {
      field: {
        company_name: "input",
        coupon_name: "input",
        coupon_code: "input",
        discount_amount: "",
        times_used: "input",
        maximum_redemption: "input",
        coupon_expiry_date: "input",
        total_payment_received: "",
        plan: "selectOption",
      },
      status: {
        company_name: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        coupon_name: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        coupon_code: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        discount_amount: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        times_used: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        maximum_redemption: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        coupon_expiry_date: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        total_payment_received: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        plan: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
      },
      xpath: {
        company_name: "input[name='company_name']",
        coupon_name: "div[id*='name']",
        coupon_code: " form div:nth-child(4) div[type='text']",
        discount_amount: "input[name='amount_off']",
        times_used: "form div:nth-child(6) input",
        maximum_redemption: "input[name='max_redemptions']",
        coupon_expiry_date: "input[name='redeem_by']",
        total_payment_received: "input[name='amount']",
        plan: "select[name='plan']",
      },
      validation: {
        company_name: [{}],
        coupon_name: [{}],
        coupon_code: [{}],
        discount_amount: [{}],
        times_used: [{}],
        maximum_redemption: [{}],
        coupon_expiry_date: [{}],
        total_payment_received: [{}],
        plan: [{}],
      },
    },
    gift: {
      field: {
        coupon_name: "input",
        coupon_code: "input",
        discount_amount: "input",
        times_used: "input",
        maximum_redemption: "input",
        coupon_expiry_date: "input",
        plan: "selectOption",
      },
      status: {
        coupon_name: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: true,
        },
        coupon_code: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        discount_amount: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        times_used: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
        maximum_redemption: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: false,
        },
        coupon_expiry_date: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        plan: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: true,
          readOnly: true,
        },
      },
      xpath: {
        coupon_name: "div[id='name']",
        coupon_code: "form div:nth-child(3) div[type='text']",
        discount_amount: "input[name='amount_off']",
        times_used: "form div:nth-child(5) input",
        maximum_redemption: "input[name='max_redemptions']",
        coupon_expiry_date: "input[name='redeem_by']",
        plan: "select[name='plan']",
      },
      validation: {
        coupon_name: [{}],
        coupon_code: [{}],
        discount_amount: [{}],
        times_used: [{}],
        maximum_redemption: [{}],
        coupon_expiry_date: [{}],
        plan: [{}],
      },
    },
  };
}

export function button() {
  return {
    xpath: {
      mainTab: "ul#sidebarnav li a span",
      createPromo: "div.customize-input a.btn",
      createTeamPromo: "div.customize-input a.btn",
      export: "div.customize-input a.btn",
      clear: "div.filterForm form a.btn",
      go: "#filterUserBtn",
      bulkDelete: "div.bulkDelete:first-child button.bulkDeleteBtn",
      delete: "tbody tr td button.btn",
      save: "#multiple button",
      cancel: "#multiple a.btn",
      confirm: "div.modal-footer button:first-child",
      close: "div.modal-footer button:last-child",
      singleTab: "ul.nav li a  span:last-child",
      multipleTab: "ul.nav li a  span:last-child",
    },
    value: {
      mainTab: "Promos",
      createPromo: "Create Promo",
      createTeamPromo: "Create Team Promo",
      export: "Export",
      clear: "Clear",
      go: "Go",
      bulkDelete: "Bulk Delete",
      delete: "Delete",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      close: "Close",
      singleTab: "Single",
      multipleTab: "Multiple",
    },
  };
}

export function pageTitle() {
  return {
    xpath: {
      mainPage: ".page-breadcrumb h3",
      createPromo: ".page-breadcrumb h3",
      createTeamPromo: ".page-breadcrumb h3",
      editPage: ".page-breadcrumb h3",
    },
    value: {
      mainPage: "Promos",
      createPromo: "Add Stripe Promo",
      createTeamPromo: "Add Team Promo",
      editPage: "Edit Promo",
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
        "Name",
        "Code",
        "Discount",
        "Used",
        "Created Date",
        "Expiry Date",
        "Type",
        "Action",
      ],
    },
  };
}

export function tableBody() {
  return {
    xpath: ".table-responsive >table >tbody",
    theadCheckbox: "input[class='checkAll']",
    tbodyCheckbox: "input[class='checkSingle']",
    emptyTable: [
      ".table-responsive >table >tbody > tr > td",
      "No Records found.",
    ],
    columns: {
      2: "Name",
      3: "Code",
      4: "Discount",
      5: "Expiry Date",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: ".card-body",
        paginationCount: "div.custom-pagination:last-child ul li",
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
      modalLable: "Confirm Delete Featured Video",
      modalDesc: "Are you sure?",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/promos",
    createPromo: "/create",
    createTeamPromo: "/promos-team",
    regularPage: "/regular",
    giftPage: "/gift",
    teamPage: "/team",
  };
}

export function alertMessage() {
  return {
    xpath: {
      createAlert: [
        ".alert.alert-success",
        "button[data-dismiss='alert'] span",
      ],
      deleteAlert: [
        ".alert.alert-success",
        "button[data-dismiss='alert'] span",
      ],
    },
    value: {
      createAlert: ["Coupon added successfully", "×"],
      deleteAlert: ["Promos deleted successfully", "×"],
    },
  };
}

export function breadCrumbs() {
  return {
    xpath: {
      createPromo: "ol.breadcrumb li a",
      createTeamPromo: "ol.breadcrumb li a",
      editPage: "ol.breadcrumb li a",
    },
    value: {
      createPromo: ["Promo", "Add Stripe Promo"],
      createTeamPromo: ["Promo", "Add Team Promo"],
      editPage: ["Featured Pick", "Edit Featured Pick"],
    },
  };
}
