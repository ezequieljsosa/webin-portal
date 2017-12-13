// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  webinServiceUrl: 'ves-ebi-5b:8221/ena/submit/drop-box/submit/',
  webinAuthenticationServiceUrl: 'https://www.ebi.ac.uk/ena/auth/login',
  webinReportServiceUrl: 'ves-ebi-5b:8110/ena/submit/report',
  webinXmlReportServiceUrl: 'https://www-test.ebi.ac.uk/ena/submit/drop-box', // TODO
  spreadsheetServiceUrl: 'https://raw.githubusercontent.com/enasequence/sub-spreadsheet/master/',
};

