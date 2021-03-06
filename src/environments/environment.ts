// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCwG_yMdFiNeZ8kwwyFTsAVTpjuVdhtLq8',
    authDomain: 'receptenapp-fe43f.firebaseapp.com',
    databaseURL: 'https://receptenapp-fe43f.firebaseio.com',
    projectId: 'receptenapp-fe43f',
    storageBucket: 'receptenapp-fe43f.appspot.com',
    messagingSenderId: '166691026151'
	},
	config: {
 //   'API_URL': 'https://pwa-workshop-api.herokuapp.com',
    'VAPID_PUBLIC_KEY': 'BL4_wxKj6absAltHy1S5i1ImKooHCvXU2d00jUsXFAZUwg_MLqO17E1wdWe96k61bTWgTmHkpHjDHASJKqEi4RM'
  }
};

