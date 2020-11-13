import { Component, OnInit } from '@angular/core';
import{SongsService} from '../songs.service';


@Component({
  selector: 'app-removesongs',
  templateUrl: './removesongs.component.html',
  styleUrls: ['./removesongs.component.scss']
})
export class RemovesongsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'duration', 'genre', 'Action'];

  constructor( public removeservice: SongsService) { }

  ngOnInit(): void {
    this.removeservice.fetchsong();

  }

  OnDelete(id:number)
  {
this.removeservice.OnDelete(id);
  }
   
}
