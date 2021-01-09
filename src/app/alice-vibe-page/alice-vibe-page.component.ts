import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NameService } from '../services/name.service';
import { Track } from '../track.model';

@Component({
  selector: 'app-alice-vibe-page',
  templateUrl: './alice-vibe-page.component.html',
  styleUrls: ['./alice-vibe-page.component.css']
})
export class AliceVibePageComponent {
  faSearch = faSearch;

  firstname: string | undefined;
  trackNameSearched: string | undefined;
  dropdown = false;
  type = '';
  setIvy = false;
  setEasy = false;

  aliceTracks: Track[] = [
    new Track("Ivy", "Frank Ocean", '../../assets/images_alice/ivy.jpg'),
    new Track("I.F.L.Y", "Bazzi", '../../assets/images_alice/IFLY.jpeg'),
    new Track("I'm Yours", "Jason Mraz", '../../assets/images_alice/imyours.jpg'),
    new Track("If the World Was Ending", "JP Saxe, Julia Michaels", '../../assets/images_alice/worldwasending.jpeg'),
    new Track("Ivy", "Taylor Swift", '../../assets/images_alice/ivy_tay.jpeg'),
    new Track("I've Given Up on You", "Real Friends", '../../assets/images_alice/ivegivenuponyou.jpeg'),
    new Track("Ivy", "Mabel", '../../assets/images_alice/ivy_mabel.jpeg'),

    new Track("Easy", "Mac Ayres", '../../assets/images_alice/easy_mac.jpeg'),
    new Track("Easily", "Bruno Major", '../../assets/images_alice/easily_bruno.jpeg'),
    new Track("exile (feat. Bon Iver)", "Taylor Swift, Bon Iver", '../../assets/images_alice/exile.jpeg'),
    new Track("34+35", "Ariana Grande", '../../assets/images_alice/3435_ariana.jpeg'),
    new Track("Easy", "Troye Sivan", '../../assets/images_alice/easy_troye.jpeg'),
    new Track("Easier", "5 Seconds of Summer", '../../assets/images_alice/easier_5sos.jpeg'),
    new Track("Easily", "Muse", '../../assets/images_alice/easily_muse.jpeg'),
    new Track("I Fall In Love Too Easily", "Chet Baker", '../../assets/images_alice/ifallinlovetooeasily.jpeg'),
  ];

  constructor(private router: Router, private nameService: NameService) {
    this.nameService.getFirstName().subscribe(data => {
      this.firstname = data;
      console.log(this.firstname + " alice");
    });
  }

  onContinue() {
    this.router.navigate(['/bob-vibe']);
  }

  ivyClick() {
    this.setIvy = true;
    this.dropdown = false;
    this.trackNameSearched = '';
  }

  easyClick() {
    this.setEasy = true;
    this.dropdown = false;
    this.trackNameSearched = '';
  }

  change(event: any) {
    if (this.trackNameSearched == '') {
      this.dropdown = false;
    }

    if (this.trackNameSearched == 'i') {
      this.dropdown = true;
      this.type = 'i';
    }

    if (this.trackNameSearched == 'iv' || this.trackNameSearched == 'ivy') {
      this.dropdown = true;
      this.type = 'iv';
    }

    if (this.trackNameSearched == 'e') {
      this.dropdown = true;
      this.type = 'e';
    }

    if (this.trackNameSearched == 'ea' || this.trackNameSearched == 'eas') {
      this.dropdown = true;
      this.type = 'ea';
    }

    if (this.trackNameSearched == 'easy') {
      this.dropdown = true;
      this.type = 'easy';
    }
  }
}
