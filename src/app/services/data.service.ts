import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [];
  constructor() { }
  saveData(id: string, data: any) {
    this.data[id] = data;
  }
  getData(id: string) {
    return this.data[id];
  }
}
