import{Songs} from './songs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AddsongsService {

  songsadd:Songs[];
  url:string;
  httpOptions : object;
  constructor( private http:HttpClient, private snackBar:MatSnackBar) { 

    this.songsadd = [];
    this.url = 'http://localhost:3000/Songs';
    //this.urlgenre = 'http://localhost:3000/Genre';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }

  fetchsong() {
    debugger;
    this.http.get<Songs[]>(`${this.url}`)
      .pipe(
        catchError((err: any): Observable<Songs[]> => {  
          this.snackBar.open('Error in Fetching the Songs', '', {
            duration: 5000, panelClass: ['mat-toolbar', 'mat-warn'],verticalPosition: 'top' ,horizontalPosition:'right'
          });      
          return of([]); // fallback value
        })
      )
      .subscribe((Songs: Songs[]) => {
        this.songsadd = Songs;
      });
  }
}
