import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    domainName = 'https://be-app-hiring-bixinf-test.apps.bi-x-ire.tftp.p1.openshiftapps.com';
    statusCheckUrl = '/api/v1.0/status';
    getImageUrl = '/api/v1.0/ranking';
    uploadImageUrl = '/api/v1.0/ranking';
    authParameter = ';user:admin;password:secret';

    constructor(private httpClient: HttpClient) { }

    checkServerStatus(): Observable<StatusResponse> {
        const url = this.domainName + this.statusCheckUrl;
        return this.httpClient.get<StatusResponse>(url);
    }

    uploadImage(request: UploadImageRequest): Observable<any> {
        let options:any = {};
        options.headers= new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'RequestId': '123'
        });
        const url = this.domainName + this.uploadImageUrl + this.authParameter;
        // const url = 'test';
        return this.httpClient.post<any>(url, request, options);
    }

    getImage(): Observable<any> {
        const url = this.domainName + this.getImageUrl;
        return this.httpClient.get<any>(url);
    }

}

export class StatusResponse {
    status: string;
}
export class UploadImageRequest {
    picture: string;
}
export class UploadImageResponse {
    file: string;
    status: string;
}