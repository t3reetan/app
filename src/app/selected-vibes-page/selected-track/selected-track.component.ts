import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/track.model';

@Component({
  selector: 'app-selected-track',
  templateUrl: './selected-track.component.html',
  styleUrls: ['./selected-track.component.css']
})
export class SelectedTrackComponent implements OnInit {
  @Input() track!: Track;
  name!: string;
  imgPath!: string;
  artist!: string;

  constructor() { }

  ngOnInit(): void {
    if (this.track != undefined) {
      this.name = this.track.name;
      this.imgPath = this.track.imagePath;
      this.artist = this.track.artist;
    }
  }

}
