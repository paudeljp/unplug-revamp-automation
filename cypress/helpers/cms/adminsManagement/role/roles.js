export function pageTitle() {
  return {
    xpath: {
      mainPage: "div.page-breadcrumb h3",
      createPage: "div.page-breadcrumb h3",
      editPage: "div.page-breadcrumb h3",
    },
    value: {
      mainPage: "Role Management",
      createPage: "Add Role",
      editPage: "Edit Role",
    },
  };
}

export function breadCrumbs() {
  return {
    xpath: {
      createPage: "div.page-breadcrumb ol li.breadcrumb-item a",
      editPage: "div.page-breadcrumb ol li.breadcrumb-item a",
    },
    value: {
      createPage: ["Roles", "Add Role"],
      editPage: ["Roles", "Edit Role"],
    },
  };
}

export function createForm() {
  return {
    field: {
      name: "input",
      slug: "input",

      home: "checkBox",
      analytics: "checkBox",
      users: "checkBox",
      admins: "checkBox",
      features: "checkBox",
      featured_playlists: "checkBox",
      featured_pick: "checkBox",
      promos: "checkBox",
      feelings: "checkBox",
      journals: "checkBox",
      billing_plans: "checkBox",
      videos: "checkBox",
      timer_sound: "checkBox",
      audio_tracks: "checkBox",
      newseletter: "checkBox",
    },
    status: {
      name: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      slug: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: true,
      },

      home: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      analytics: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      users: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      admins: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      features: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      featured_playlists: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      featured_pick: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      promos: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      feelings: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      journals: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      billing_plans: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      videos: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      timer_sound: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      audio_tracks: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      newseletter: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      name: "input[name='name']",
      slug: "#slug",

      home: "input[value='home']",
      analytics: "input[value='analytics']",
      users: "input[value='users']",
      admins: "input[value='admins']",
      features: "input[value='features']",
      featured_playlists: "input[value='featured-playlists']",
      featured_pick: "input[value='featured-pick']",
      promos: "input[value='promos']",
      feelings: "input[value='feelings']",
      journals: "input[value='journals']",
      billing_plans: "input[value='billing-plans']",
      videos: "input[value='videos']",
      timer_sound: "input[value='timer-sounds']",
      audio_tracks: "input[value='audio-tracks']",
      newseletter: "input[value='newsletter']",
    },
    validation: {
      name: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Role Name is Required",
          requiresSubmit: true,
        },
      ],
    },
  };
}

export function editForm() {
  return {
    field: {
      name: "input",
      slug: "input",

      permissions: {
        home: "checkbox",
        analytics: "checkbox",
        users: "checkbox",
        admins: "checkbox",
        features: "checkbox",
        featured_playlists: "checkbox",
        featured_pick: "checkbox",
        promos: "checkbox",
        feelings: "checkbox",
        journals: "checkbox",
        billing_plans: "checkbox",
        videos: "checkbox",
        timer_sound: "checkbox",
        audio_tracks: "checkbox",
        newseletter: "checkbox",
      },
    },
    status: {
      name: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      slug: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: true,
      },
      permissions: {
        home: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        analytics: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        users: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        admins: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        features: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        featured_playlists: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        featured_pick: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        promos: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        feelings: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        journals: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        billing_plans: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        videos: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        timer_sound: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        audio_tracks: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
        newseletter: {
          isPresent: true,
          visibility: true,
          disabled: false,
          compare: false,
          readOnly: false,
        },
      },
    },
    xpath: {
      name: "input[name='name']",
      slug: "#slug",
      permissions: {
        home: "input[value='home']",
        analytics: "input[value='analytics']",
        users: "input[value='users']",
        admins: "input[value='admins']",
        features: "input[value='features']",
        featured_playlists: "input[value='featured-playlists']",
        featured_pick: "input[value='featured-pick']",
        promos: "input[value='promos']",
        feelings: "input[value='feelings']",
        journals: "input[value='journals']",
        billing_plans: "input[value='billing-plans']",
        videos: "input[value='videos']",
        timer_sound: "input[value='timer-sounds']",
        audio_tracks: "input[value='audio-tracks']",
        newseletter: "input[value='newsletter']",
      },
    },
    validation: {
      name: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Role Name is Required",
          requiresSubmit: true,
        },
      ],
      permissions: [
        {
          xpath: ".alert.alert-danger",
          value: null,
          message: "Select at least one Premission",
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
      subTab: "ul#sidebarnav li ul .sidebar-item a span",
      addNew: "div.customize-input.float-right a[role='button']",
      edit: "tbody tr td a",
      delete: "tbody tr td button",
      save: "div.card-body form button",
      cancel: "div.card-body form a",
      confirm: ".modal-footer button:first-child",
      close: ".modal-footer button:last-child",
    },
    value: {
      mainTab: "Admins Management",
      subTab: "Role",
      addNew: "Add New",
      edit: "Edit",
      delete: "Delete",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      close: "Close",
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

      deleteAlert: [
        ".alert.alert-success",
        "button[data-dismiss='alert'] span",
      ],
    },
    value: {
      createAlert: ["Role added successfully", "×"],
      editAlert: ["Role updated successfully", "×"],
      deleteAlert: ["Role deleted successfully", "×"],
    },
  };
}

export function urls() {
  return {
    homePage: "/home",
    mainPage: "/roles",
    createPage: "/create",
  };
}
export function tableHead() {
  return {
    xpath: {
      mainPage: "table thead tr th",
    },
    value: {
      mainPage: ["SN", "Name", "Action"],
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
      2: "name",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: ".card-body",
        paginationCount: ".custom-pagination:last-child ul li",
        preview: "ul.pagination li:first-child a",
        next: "ul.pagination li:last-child a",
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
      modalLable: "Confirm Delete Role",
      modalDesc: "Are you sure?",
    },
  };
}
