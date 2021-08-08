import { HttpClient } from "@angular/common/http";
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

    constructor(private httpClient: HttpClient) { }

    checkServerStatus(): Observable<StatusResponse> {
        const url = this.domainName + this.statusCheckUrl;
        return this.httpClient.get<StatusResponse>(url);
    }

    uploadImage(request: UploadImageRequest): Observable<UploadImageResponse> {
        const url = this.domainName + this.uploadImageUrl;
        return this.httpClient.post<UploadImageResponse>(url, request);
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