// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyACakwxKShVEc-7u16btFxQ6eY5uGduwrA",
      authDomain: "blocchat-c9b67.firebaseapp.com",
      databaseURL: "https://blocchat-c9b67.firebaseio.com",
      projectId: "blocchat-c9b67",
      storageBucket: "blocchat-c9b67.appspot.com",
      messagingSenderId: "115335658384"
  }
};
