/*
 * Copyright 2018 EMBL - European Bioinformatics Institute
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { WebinAuthenticationService } from './webin-authentication.service';
import { WebinReportServiceInterface } from './webin-report.service.interface';

@Injectable()
export class WebinReportService implements WebinReportServiceInterface {

  private _baseUrl = environment.webinReportServiceUrl;

  constructor(private _webinAuthenticationService: WebinAuthenticationService, private _http: HttpClient) { }

  getStudiesAll(status: string, rows: string, format: string) {
    return this.getAll('studies', status, rows, format);
  }
  getStudies(id: string, rows: string, format: string) {
    return this.getById('studies', id, rows, format);
  }

  getProjectsAll(status: string, rows: string, format: string) {
    return this.getAll('projects', status, rows, format);
  }
  getProjects(id: string, rows: string, format: string) {
    return this.getById('projects', id, rows, format);
  }

  getSamplesAll(status: string, rows: string, format: string) {
    return this.getAll('samples', status, rows, format);
  }
  getSamples(id: string, rows: string, format: string) {
    return this.getById('samples', id, rows, format);
  }

  getRunsAll(status: string, rows: string, format: string) {
    return this.getAll('runs', status, rows, format);
  }
  getRuns(id: string, rows: string, format: string) {
    return this.getById('runs', id, rows, format);
  }

  getAnalysesAll(status: string, analysisType: string, rows: string, format: string) {
    const params = {};
    if (status) {
      params['status'] = status;
    }
    if (analysisType) {
      params['analysis-type'] = analysisType;
    }
    return this.getAllParams('analyses', params, rows, format);
  }
  getAnalyses(id: string, rows: string, format: string) {
    return this.getById('analyses', id, rows, format);
  }

  getRunFilesAll(archiveStatus: string, rows: string, format: string) {
    const params = {};
    if (archiveStatus) {
      params['archive-status'] = archiveStatus;
    }
    return this.getAllParams('run-files', params, rows, format);
  }
  getRunFiles(id: string, rows: string, format: string) {
    return this.getById('run-files', id, rows, format);
  }

  getAnalysisFilesAll(analysisType: string, archiveStatus: string, rows: string, format: string) {
    const params = {};
    if (analysisType) {
      params['analysis-type'] = analysisType;
    }
    if (archiveStatus) {
      params['archive-status'] = archiveStatus;
    }
    return this.getAllParams('analysis-files', params, rows, format);
  }
  getAnalysisFiles(id: string, rows: string, format: string) {
    return this.getById('analysis-files', id, rows, format);
  }

  getRunProcessAll(processStatus: string, rows: string, format: string) {
    const params = {};
    if (processStatus) {
      params['process-status'] = processStatus;
    }
    return this.getAllParams('run-process', params, rows, format);
  }

  getRunProcess(id: string, rows: string, format: string) {
    return this.getById('run-process', id, rows, format);
  }

  getAnalysisProcessAll(analysisType: string, processStatus: string, rows: string, format: string) {
    const params = {};
    if (analysisType) {
      params['analysis-type'] = analysisType;
    }
    if (processStatus) {
      params['process-status'] = processStatus;
    }
    return this.getAllParams('analysis-process', params, rows, format);
  }

  getAnalysisProcess(id: string, rows: string, format: string) {
    return this.getById('analysis-process', id, rows, format);
  }

  getUnsubmittedFilesAll(status: string, rows: string, format: string) {
    const params = {};
    return this.getAllParams('unsubmitted-files', params, rows, format);
  }

  getDacsAll(status: string, rows: string, format: string) {
    return this.getAll('dacs', status, rows, format);
  }
  getDacs(id: string, rows: string, format: string) {
    return this.getById('dacs', id, rows, format);
  }

  getPoliciesAll(status: string, rows: string, format: string) {
    return this.getAll('policies', status, rows, format);
  }
  getPolicies(id: string, rows: string, format: string) {
    return this.getById('policies', id, rows, format);
  }

  getDatasetsAll(status: string, rows: string, format: string) {
    return this.getAll('datasets', status, rows, format);
  }
  getDatasets(id: string, rows: string, format: string) {
    return this.getById('datasets', id, rows, format);
  }

  getChecklistGroups(type: string) {
      const params = {};
      params['type'] = type;
      const url: string = this._baseUrl + '/checklist-groups' + '?' + this.getUrlParams(params);
      return this._http.get(url);
  }
  getChecklists(type: string) {
      const params = {};
      params['type'] = type;
      const url: string = this._baseUrl + '/checklists' + '?' + this.getUrlParams(params);
      return this._http.get(url);
  }
  getChecklistXmls(type: string) {
      const params = {};
      params['type'] = type;
      const url: string = this._baseUrl + '/checklists/xml/*' + '?' + this.getUrlParams(params);
      return this._http.get(url, { responseType: 'text', observe: 'response' });
  }

  private getAll(reportType: string, status: string, rows: string, format: string) {
    const params = {};
    if (status) {
      params['status'] = status;
    }
    params['max-results'] = rows;
    params['format'] = format;
    const url: string = this._baseUrl + '/' + reportType + '?' + this.getUrlParams(params);

    if (format === 'json') {
      // console.log(url);
      return this._http.get(url);
    }
    if (format === 'csv') {
      return this.getCsvUrlWithToken(url);
    }
  }

  private getAllParams(reportType: string, params, rows: string, format: string) {
    params['max-results'] = rows;
    params['format'] = format;
    const url: string = this._baseUrl + '/' + reportType + '?' + this.getUrlParams(params);

    if (format === 'json') {
      // console.log(url);
      return this._http.get(url);
    }
    if (format === 'csv') {
      return this.getCsvUrlWithToken(url);
    }
  }

  private getUrlParams(params) {
    const ret = [];
    for (const param in params) {
      if (params.hasOwnProperty(param)) {
        ret.push(encodeURIComponent(param) + '=' + encodeURIComponent(params[param]));
      }
    }
    return ret.join('&');
  }

  private getById(reportType: string, id: string, rows: string, format: string) {
    const params = {};
    params['max-results'] = rows;
    params['format'] = format;
    const url: string = this._baseUrl + '/' + reportType + '/' + encodeURIComponent(id.trim()) + '?' + this.getUrlParams(params);

    if (format === 'json') {
      // console.log(url);
      return this._http.get(url);
    }
    if (format === 'csv') {
      return this.getCsvUrlWithToken(url);
    }
  }

  private getCsvUrlWithToken(url: string) {
    url = url + '&token=' + this._webinAuthenticationService.token;
    // console.log(url);
    return url;
  }
}
