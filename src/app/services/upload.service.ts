import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./data.service";

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    statusCheckUrl = 'api/v1.0/status';
    getImageUrl = 'api/v1.0/image/';
    uploadImageUrl = 'api/v1.0/ranking';
    // domainName = 'https://be-app-hiring-bixinf-test.apps.bi-x-ire.tftp.p1.openshiftapps.com';
    constructor(private httpClient: HttpClient,
        private dataService: DataService) { }

    checkServerStatus(): Observable<StatusResponse> {
        const serverInfo = this.dataService.getData('serverInfo');
        const url = serverInfo.domainName + this.statusCheckUrl;
        return this.httpClient.get<StatusResponse>(url);
    }

    uploadImage(request: UploadImageRequest): Observable<any> {
        const serverInfo = this.dataService.getData('serverInfo');
        let options: any = {};
        options.headers = new HttpHeaders({
            'Authorization': 'Basic ' + btoa(serverInfo.username + ":" + serverInfo.password)
        });
        const url = serverInfo.domainName + this.uploadImageUrl;
        return this.httpClient.post<any>(url, request, options);
    }

    getImage(fileName): Observable<any> {
        const serverInfo = this.dataService.getData('serverInfo');
        const url = serverInfo.domainName + this.getImageUrl + fileName;
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