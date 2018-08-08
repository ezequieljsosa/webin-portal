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
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class WebinGdprService {

  private _baseUrl = environment.webinGdprServiceUrl;

  // TODO check consent
  consented: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  consent() {
    console.log('** Webin consent **', this._baseUrl);

    this.consented = true;

    // TODO set consent

    this.router.navigateByUrl('dashboard', { skipLocationChange: true });
  }
}
