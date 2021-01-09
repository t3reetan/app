import { Component, OnInit } from '@angular/core';
import { Track } from '../track.model';
import { Router } from '@angular/router' //ii

@Component({
  selector: 'app-selected-vibes-page',
  templateUrl: './selected-vibes-page.component.html',
  styleUrls: ['./selected-vibes-page.component.css']
})
export class SelectedVibesPageComponent implements OnInit {

  selectedTracks: Track[] = [
    new Track("Ivy", "Frank Ocean", '../../assets/images_alice/ivy.jpg'),
    new Track("Easy", "Mac Ayres", '../../assets/images_alice/easy_mac.jpeg'),
    new Track("Numb", "Linkin Park", '../../assets/images_bob/numb.jpeg'),
    new Track("thank u, next", "Ariana Grande", '../../assets/images_bob/thanku.jpeg')
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinue() {
    this.router.navigate(['./loading']);
  }

  onSelectAgain() {
    this.router.navigate(['./name-input']);
  }

}
