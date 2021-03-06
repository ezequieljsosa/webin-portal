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
import { WebinAuthenticationResultInterface } from './webin-authentication-result.interface';

export interface WebinAuthenticationServiceInterface {

    username: string;
    token: string;
    authenticated: boolean;
    account: string;
    ega: boolean;
    loginDate: Date;
    logoutDate: Date;

    getAuthorizationTokenHeader(): string;

    logout();

    login(username: string, password: string): Observable<WebinAuthenticationResultInterface>;
    loginToken(username: string, password: string): Observable<string>;
}
