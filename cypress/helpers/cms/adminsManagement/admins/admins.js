export function pageTile() {
  return {
    xpath: {
      mainPage: "div.page-breadcrumb h3",
      createPage: "div.page-breadcrumb h3",
      editPage: "div.page-breadcrumb h3",
      changePassword: "div.page-breadcrumb h3",
    },
    value: {
      mainPage: "Admins",
      createPage: "Add Admin User",
      editPage: "Edit CMS User",
      changePassword: "Change Password",
    },
  };
}

export function createForm() {
  return {
    field: {
      firstName: "input",
      lastName: "input",
      email: "input",
      contact_number: "input",
      pasword: "input",
      image: "fileUpload",
      about: "textarea",
      role: "selectOption",
      status: {
        active: "radio",
        inactive: "radio",
      },
      staff_status: {
        is_staff: "radio",
        not_staff: "radio",
      },
      send_notification_by: {
        email: "radio",
      },
    },
    status: {
      firstName: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      lastName: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
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
      pasword: {
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
      about: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      role: {
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
      staff_status: {
        is_staff: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        not_staff: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
      },
      send_notification_by: {
        email: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
      },
    },
    xpath: {
      firstName: "input[name='first_name']",
      lastName: "input[name='last_name']",
      email: "input[name='email']",
      contact_number: "input[name='contactNumber']",
      pasword: "input[name='password']",
      image: "input[name='image']",
      about: "textarea[name='about']",
      role: "select[name='role_id']",
      status: {
        active: "div.card form label input[name='is_active']",
        inactive: "div.card form label input[name='is_active']",
      },
      staff_status: {
        is_staff: "div.card form label input[name='is_staff']",
        not_staff: "div.card form label input[name='is_staff']",
      },
      send_notification_by: {
        email: "div.card form label input[value='email']",
      },
    },
    validation: {
      firstName: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Firstname is required",
          requiresSubmit: true,
        },
      ],
      lastName: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Lastname is required",
          requiresSubmit: true,
        },
      ],
      email: [{}],
      contact_number: "",
      pasword: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Password is required",
          requiresSubmit: true,
        },
      ],
      image: " ",
      about: "",
      role: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Please select any role",
          requiresSubmit: true,
        },
      ],
      status: {
        active: "",
        inactive: "",
      },
      staff_status: {
        is_staff: "",
        not_staff: "",
      },
      send_notification_by: {
        email: "",
      },
    },
  };
}

export function editForm() {
  return {
    field: {
      firstName: "input",
      lastName: "input",
      email: "input",
      contact_number: "input",
      pasword: "input",
      image: "fileUpload",
      about: "textarea",
      role: "selectOption",
      status: {
        active: "radio",
        inactive: "radio",
      },
      staff_status: {
        is_staff: "radio",
        not_staff: "radio",
      },
      send_notification_by: {
        email: "radio",
      },
    },
    status: {
      firstName: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      lastName: {
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
        compare: true,
        readOnly: false,
      },
      contact_number: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      password: {
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
      about: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      role: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
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
      staff_status: {
        is_staff: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        not_staff: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
      },
      send_notification_by: {
        email: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
      },
    },
    xpath: {
      firstName: "input[name='first_name']",
      lastName: "input[name='last_name']",
      email: "input[name='email']",
      contact_number: "input[name='contactNumber']",
      pasword: "input[name='password']",
      image: "input[name='image']",
      about: "textarea[name='about']",
      role: "select[name='role_id']",
      status: {
        active: "div.card form label input[name='is_active']",
        inactive: "div.card form label input[name='is_active']",
      },
      staff_status: {
        is_staff: "div.card form label input[name='is_staff']",
        not_staff: "div.card form label input[name='is_staff']",
      },
      send_notification_by: {
        email: "div.card form label input[value='email']",
      },
    },
    validation: {
      firstName: [{}],
      lastName: [{}],
      email: [{}],
      contact_number: "",
      pasword: [{}],
      image: " ",
      about: "",
      role: [{}],
      status: {
        active: "",
        inactive: "",
      },
      staff_status: {
        is_staff: "",
        not_staff: "",
      },
      send_notification_by: {
        email: "",
      },
    },
  };
}

export function changePasswordForm() {
  return {
    field: {
      newPassword: "input",
      confirmPassword: "input",
    },
    status: {
      newPassword: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      confirmPassword: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      newPassword: "#newPassword",
      confirmPassword: "#confirmPassword",
    },
    validation: {
      newPassword: [
        {
          xpath: ".alert.alert-danger",
          value: "admin@123",
          message: "Password doesnot match",
          requiresSubmit: false,
        },
      ],
      confirmPassword: [
        {
          xpath: ".alert.alert-danger",
          value: "admin@12345",
          message: "Password doesnot match",
          requiresSubmit: false,
        },
      ],
    },
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
      changePassword: [
        ".alert.alert-success",
        "button[data-dismiss='alert'] span",
      ],
      deleteAlert: [
        ".alert.alert-success",
        "button[data-dismiss='alert'] span",
      ],
    },
    value: {
      createAlert: ["User added successfully.", "×"],
      editAlert: ["CMS User updated successfully", "×"],
      changePassword: ["Password changed successfully", "×"],
      deleteAlert: ["CMS User deleted Successfully", "×"],
    },
  };
}

export function button() {
  return {
    xpath: {
      mainTab: "ul#sidebarnav li a span",
      subTab: "ul#sidebarnav li ul .sidebar-item a span",
      addNew: "div.customize-input.float-right a",
      edit: "tbody tr td a.btn",
      changePassword: "tbody tr td a.btn",
      delete: "tbody tr td button.btn",
      save: "div.card-body form button",
      cancel: "div.card-body form a",
      update: "div.card-body form button",
      confirm: "div.modal-footer button:first-child",
      close: "div.modal-footer button:last-child",
    },
    value: {
      mainTab: "Admins Management",
      subTab: "Admins",
      addNew: "Add New",
      edit: "Edit",
      changePassword: "Change Password",
      delete: "Delete",
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
      modalLable: "Confirm Delete Admin",
      modalDesc: "Are you sure?",
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    adminsPage: "/admins",
    createPage: "/create",
    changePasswordPage: ",changePassword",
  };
}

export function tableHead() {
  return {
    xpath: {
      mainPage: "table thead tr th",
    },
    value: {
      mainPage: ["SN", "Full Name", "Email", "Role", "Action"],
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
      2: "Full Name",
      3: "Email",
      4: "Role",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: ".card-body",
        paginationCount: "ul.pagination li",
        preview: "ul.pagination li:first-child",
        next: "ul.pagination li:last-child",
      },
      value: {
        container: null,
        preview: "«",
        next: "»",
      },
    },
  };
}

export function breadCrumbs() {
  return {
    xpath: {
      createPage: "ol.breadcrumb li a",
      editPage: "ol.breadcrumb li a",
      changePassword: "ol.breadcrumb li a",
    },
    value: {
      createPage: ["Admins", "Add Admin User"],
      editPage: ["Admins", "Edit CMS User"],
      changePassword: ["Admins", "Change Password"],
    },
  };
}
