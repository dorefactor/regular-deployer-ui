import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationSetup } from '../model/application-setup';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApplicationService {

  private APPLICATION_SETUP_RESOURCE_URI = `${environment.domain}/configuration/applications`;

  constructor(private httpClient: HttpClient) {
  }

  public saveApplicationSetup(applicationSetup: ApplicationSetup): Observable<ApplicationSetup> {
    return this.httpClient.post<ApplicationSetup>(this.APPLICATION_SETUP_RESOURCE_URI,
      JSON.stringify(applicationSetup));
  }

  public getApplications(): Observable<ApplicationSetup[]> {
    return this.httpClient.get<ApplicationSetup[]>(this.APPLICATION_SETUP_RESOURCE_URI);
  }

  public getApplicationById(id: string): Observable<ApplicationSetup> {
    return this.httpClient.get<ApplicationSetup>(this.APPLICATION_SETUP_RESOURCE_URI + `/${id}`);
  }

}
