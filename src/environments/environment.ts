// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyCLJyD6ZJvDEXdN_OGJwY-I0S7cCbU8cTs',
    authDomain: 'turra-lodge-farm.firebaseapp.com',
    databaseURL: 'https://turra-lodge-farm.firebaseio.com',
    projectId: 'turra-lodge-farm',
    storageBucket: 'turra-lodge-farm.appspot.com',
    messagingSenderId: '894927224700'
  }
};
