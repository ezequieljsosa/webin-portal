// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  title: 'Webin submissions portal (DEFAULT)',
  webinServiceUrl: 'https://wwwdev.ebi.ac.uk/ena/submit/drop-box/submit/',
  webinUpdateRequestUrl: 'https://wwwdev.ebi.ac.uk/ena/submit/drop-box/email/update-request/',
  webinAuthenticationServiceUrl: 'https://www.ebi.ac.uk/ena/auth/login',
  webinAuthenticationTokenUrl: 'https://www.ebi.ac.uk/ena/auth/token',
  // webinReportServiceUrl: 'http://RASKO-W7D.windows.ebi.ac.uk:8221/ena/submit/report',
  webinReportServiceUrl: 'https://wwwdev.ebi.ac.uk/ena/submit/report',
  webinXmlReportServiceUrl: 'https://wwwdev.ebi.ac.uk/ena/submit/drop-box',
  webinGdprServiceUrl: 'TODO'
};
