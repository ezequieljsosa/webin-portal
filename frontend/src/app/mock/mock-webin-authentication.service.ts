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

import { Observable } from 'rxjs';

export class MockWebinAuthenticationService {

  get username(): string {
    return "Mock";
  }
  set username(username: string) {
  }

  get token(): string {
    return "Mock";
  }
  set token(token: string) {
  }

  get authenticated(): boolean {
      return true;
  }
  set authenticated(authenticated: boolean) {
  }

  get account(): string {
    return "Mock";
  }  
  set account(account: string) {
  }

  get ega(): boolean {
    return false;
  }
  set ega(ega: boolean) {
  }

  get loginDate() {
    let today = new Date();
    return today;
  }
  set loginDate(loginDate) {
  }

  get logoutDate() {
    let today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);

  }
  set logoutDate(logoutDate) {
  }

  getAuthorizationTokenHeader() {
      return 'Bearer ' + this.token;
  }

  logout() {
  }

  login(username: string, password: string): Observable<any> {
    return null;
  }

  loginToken(username: string, password: string): Observable<any> {
    return null;    
  }
}