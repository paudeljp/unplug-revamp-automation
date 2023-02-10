export function loginForm() {
  return {
    field: {
      email: "input",
      password: "input",
      keemMe: "checkBox",
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
      keepMe: {
        isPresent: true,
        visibility: true,
        disabled: false,
        compare: false,
        readOnly: false,
      },
    },
    xpath: {
      email: "form input[name='username']",
      password: "form input[name='password']",
      keemMe: "form input[name='remember_me']",
    },
  };
}

export function loginButton() {
  return {
    xpath: {
      signInBtn: "form button[type='submit']",
    },
    value: {
      signInBtn: "Sign In",
    },
  };
}

export function urlLogin() {
  return {
    basePage: "/",
    loginPage: "/login",
    homePage: "/home",
  };
}

export function alertMessageLogin() {
  return {
    xpath: {
      invalidAlert: "p.invalid-text.invalid-text.text-danger",
    },
    value: {
      invalidAlert: "Incorrect Email/Password",
    },
  };
}
