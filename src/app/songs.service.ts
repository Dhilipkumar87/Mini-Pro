import { Injectable } from '@angular/core';
import {Songs} from './songs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SongsService {
songs:Songs[];
url:string;
Httpop:object;

  constructor(private httpcl:HttpClient, private snak:MatSnackBar) {
    this.songs=[];
    this.url='http://localhost:3000/Songs';
    this.Httpop={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
   }
   addsong(song:Songs):Observable<any>
   {
     debugger
return this.httpcl.post<Songs>(this.url,{
  title:song.title,
  duration:song.duration,
  genre:song.genre
},this.Httpop)
.pipe(
  tap((res)=>{ 
    console.log(res);
    //this.songs.push(res);
    this.fetchsong();
    this.snak.open('Songs Added Successfully', '', {
      duration: 6000, panelClass: ['mat-toolbar', 'mat-warn'],verticalPosition: 'top' ,horizontalPosition:'right'
    }); 
return of ({})
  }),
  catchError((err:Observable<any>)=>{

    return of ([])
  })
)
   }
   fetchsong() {
    debugger;
    this.httpcl.get<Songs[]>(`${this.url}`)
      .pipe(
        catchError((err: any): Observable<Songs[]> => {  
          this.snak.open('Error in Fetching the Songs', '', {
            duration: 6000, panelClass: ['mat-toolbar', 'mat-warn'],verticalPosition: 'top' ,horizontalPosition:'right'
          });      
          return of([]); // fallback value
        })
      )
      .subscribe((songs: Songs[]) => {
        this.songs = songs;
      });
  }
  OnDelete(id:number){

    this.httpcl.delete(`${this.url}/${id}`).subscribe((Res)=>{
      this.songs=this.songs.filter(son=>{
       return son.id!=id;
      })
      this.snak.open('deleted Successfully', '', {
        duration: 6000, panelClass: ['mat-toolbar', 'mat-warn'],verticalPosition: 'top' ,horizontalPosition:'right'
      });  
    } )

  }
}
