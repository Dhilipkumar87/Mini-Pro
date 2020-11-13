import { Component, OnInit } from '@angular/core';
import{Genre} from '../Genre';
import{Songs} from '../Songs';
import{SongsService} from '../songs.service';

@Component({
  selector: 'app-addsongs',
  templateUrl: './addsongs.component.html',
  styleUrls: ['./addsongs.component.scss']
})
export class AddsongsComponent implements OnInit {

  songTitle:string;
  songDuration:string;
  genre:Genre[];
  selectedGenere:string;
  songng:Songs;
  constructor(public songser:SongsService ) {

    this.songTitle ="";
    this.songDuration="";
    this.genre=[];
    this.songng=new Songs("","","",null);
    this.genre.push(new Genre("Slow",false));
    this.genre.push(new Genre("Romance",false));
    this.genre.push(new Genre("Remixed",false));
    this.selectedGenere='';
   
  }

  ngOnInit(): void {
  }
OnSave()
{
  debugger
  this.genre.filter((s)=>{
    if(s.checked){
      if(this.selectedGenere=='')
    this.selectedGenere=s.name;
    else
    this.selectedGenere=this.selectedGenere+' | '+s.name;
    }
  })
  this.songng.title=this.songTitle;
    this.songng.duration=this.songDuration;
    this.songng.genre=this.selectedGenere;
    this.songser.addsong(this.songng)
    .subscribe((res)=>{
      this.songDuration="";
      this.selectedGenere="";
      this.songTitle="";
      this.genre.filter(fa=>fa.checked=false);
    })
}
}
