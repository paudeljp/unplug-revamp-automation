export function pageTitle() {
  return {
    xpath: {
      mainPage: "div.page-breadcrumb h3",
      createPage: "div.page-breadcrumb h3",
      editPage: "div.page-breadcrumb h3",
    },
    value: {
      mainPage: "Audio Track Management",
      createPage: "Add Audio Track",
      editPage: "Edit Audio Track",
    },
  };
}

export function breadCrumbs() {
  return {
    xpath: {
      createPage: "ol.breadcrumb li a",
      editPage: "ol.breadcrumb li a",
    },
    value: {
      createPage: ["Audio Tracks", "Add Audio Track"],
      editPage: ["Audio Tracks", "Edit Audio Track"],
    },
  };
}

export function urls() {
  return {
    mainPage: "/audio-tracks",
    createPage: "/create",
  };
}
export function button() {
  return {
    xpath: {
      mainTab: "ul#sidebarnav li a span",
      addNew: "div.customize-input a",
      save: "form div button#addAudioTrackBtn",
      cancel: "form  a.btn",
      delete: "tbody tr td button",
      update: "#updateAudioTrackBtn",
      cancelReplace: "form button.btn.cancelUploadBtn",
      replaceFilesBtn: "form  button.btn.replaceFileBtn",
      confirm: "div.modal-footer button:first-child",
      close: "div.modal-footer button:last-child",
      tableData: "#audioTracksTbl tbody tr td:nth-child(2) a",
    },
    value: {
      mainTab: "Audio Tracks",
      addNew: "Add New",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      update: "Update",
      cancelReplace: "Cancel Replace",
      replaceFilesBtn: "Replace Files",
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
      modalLable: "Confirm Delete Audio Track",
      modalDesc: "Are you sure?",
    },
  };
}

export function alertMessage() {
  return {
    xpath: {
      createAudioTracks: [".alert.alert-success", "button[class='close'] span"],
      deleteAlert: [".alert.alert-success", "button[class='close'] span"],
      editAlert: [".alert.alert-success", "button[class='close'] span"],
    },
    value: {
      createAudioTracks: ["Audio Track added successfully", "×"],
      deleteAlert: ["Audio Track deleted successfully", "×"],
      editAlert: ["Audio Track Updated successfully", "×"],
    },
  };
}

export function tableHead() {
  return {
    xpath: {
      audioTracksTable: "table#audioTracksTbl tr th",
    },
    value: {
      audioTracksTable: ["SN", "Name", "File", "Action"],
    },
  };
}

export function tableBody() {
  return {
    xpath: "#audioTracksTbl  > tbody",
    emptyTable: ["#audioTracksTbl  > tbody tr td", "No Records found."],

    columns: {
      2: "name",
    },
    pagination: {
      disabled: "class",
      xpath: {
        container: ".card-body",
        paginationCount: "div.custom-pagination ul li",
        preview: "div.custom-pagination:last-child ul li:nth-child(2) a",
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

export function createAudioTracksPageForm() {
  return {
    field: {
      name: "input",
      position: "input",
      uploadAudioTrackFile1: "fileUpload",
      uploadAudioTrackFile2: "fileUpload",
    },
    status: {
      name: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      position: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      uploadAudioTrackFile1: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      uploadAudioTrackFile2: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
    },
    xpath: {
      name: "input[name='name']",
      position: "input[name='sort_order']",
      uploadAudioTrackFile1: "input[name='file']",
      uploadAudioTrackFile2: "input[name='file_preview']",
    },
    validation: {
      name: [
        {
          xpath: "div.alert.alert-danger ",
          value: null,
          message: "Name is Required",
          requiresSubmit: true,
        },
        {
          xpath: "div.alert.alert-danger ",
          value: "abababababababababababababababa",
          message: "Name can not have more than 30 characters",
          requiresSubmit: true,
        },
      ],
      position: [{}],
      uploadAudioTrackFile1: [
        {
          xpath: "div.alert.alert-danger ",
          value: null,
          message: "Audio Track File is Required",
          requiresSubmit: true,
        },
        {
          xpath: "div.alert.alert-danger",
          value: "../../../file/cms/5144490.jpg",
          message: "Audio file should be wav/mp3 format",
          requiresSubmit: false,
        },
      ],
      uploadAudioTrackFile2: [
        {
          xpath: "div.alert.alert-danger",
          value: null,
          message: "Audio Track File Preview is Required",
          requiresSubmit: true,
        },
        {
          xpath: "div.alert.alert-danger",
          value: "../../../file/cms/5144490.jpg",
          message: "Audio file should be wav/mp3 format",
          requiresSubmit: false,
        },
      ],
    },
  };
}

export function editAudioTracksPageForm() {
  return {
    field: {
      name: "input",
      position: "input",
      uploadAudioTrackFile1: "fileUpload",
      uploadAudioTrackFile2: "fileUpload",
    },
    status: {
      name: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      position: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: true,
        readOnly: false,
      },
      uploadAudioTrackFile1: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
      uploadAudioTrackFile2: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      name: "input[name='name']",
      position: "input[name='sort_order']",
      uploadAudioTrackFile1: "input[name='file']",
      uploadAudioTrackFile2: "input[name='file_preview']",
    },
    validation: {
      name: [
        {
          xpath: "div.alert.alert-danger ",
          value: null,
          message: "Name is Required",
          requiresSubmit: true,
        },
        {
          xpath: "div.alert.alert-danger ",
          value: "abababababababababababababababa",
          message: "Name can not have more than 30 characters",
          requiresSubmit: true,
        },
      ],
      position: [{}],
      uploadAudioTrackFile1: [{}],
      uploadAudioTrackFile2: [{}],
    },
  };
}
