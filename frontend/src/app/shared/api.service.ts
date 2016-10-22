import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
	headers: Headers = new Headers({
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	});

	url: string = 'http://localhost:8080';

	constructor(private http: Http){}

	get(path: string) : Observable<any> {
		return this.http.get(`${this.url}${path}`, {headers: this.headers})
			.map(this.checkForError)
			.catch(err => Observable.throw(err))
			.map(this.getJson);
	}

	post(path: string, body) : Observable<any> {
		return this.http.post(
				`${this.url}${path}`,
				JSON.stringify(body), 
				{headers: this.headers, withCredentials: true})
			.map(this.checkForError)
			.catch(err => Observable.throw(err))
			.map(this.getJson);
	}

	put(path: string, body) : Observable<any> {
		return this.http.put(
				`${this.url}${path}`,
				JSON.stringify(body), 
				{headers: this.headers, withCredentials: true})
			.map(this.checkForError)
			.catch(err => Observable.throw(err))
			.map(this.getJson);
	}

	delete(path: string) : Observable<any> {
		return this.http.delete(`${this.url}${path}`, {headers: this.headers})
			.map(this.checkForError)
			.catch(err => Observable.throw(err))
			.map(this.getJson);
	}


	private getJson(response: Response) {
		return response.json();
	}

	private checkForError(response: Response) : Response {
		if(response.status >= 200 && response.status < 300) {
			return response
		} else {
			var error = new Error(response.statusText);
			error['response'] = response;
			console.error(error);
			throw error;			
		}
	}

	setHeaders(headers) {
		Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
	}

	deleteHeader(header: string) {
		this.headers.delete(header);
	}
}