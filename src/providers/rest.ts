import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const apiUrl = 'https://bandscoserver.herokuapp.com';
const getPostsUrl = apiUrl + '/home/posts';
const getMucialInstrumentsUrl = apiUrl + '/musicalInstrument ';


@Injectable()
export class RestProvider {

    constructor(public http: Http) {
        console.log('Hello RestProvider Provider');
    }
    getPosts() {
        return new Promise(resolve => {
            this.http.get(getPostsUrl).subscribe(data => {
                resolve(data.json());
            }, err => { console.log(err) });
        });
    }
    getMucialInstruments() {
        return new Promise(resolve => {
            this.http.get(getMucialInstrumentsUrl).subscribe(data => {
                resolve(data);
            }, err => { console.log(err) });
        });
    }

}
