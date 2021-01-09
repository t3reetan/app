import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router' //ii
import { NameService } from '../services/name.service';
import { Track } from '../track.model';

@Component({
  selector: 'app-bob-vibe-page',
  templateUrl: './bob-vibe-page.component.html',
  styleUrls: ['./bob-vibe-page.component.css']
})
export class BobVibePageComponent implements OnInit {
  faSearch = faSearch;

  secondname: string | undefined;
  trackNameSearched: string | undefined;
  dropdown = false;
  type = '';
  setNumb = false;
  setThanku = false;

  bobTracks: Track[] = [
      new Track("Numb", "Linkin Park", '../../assets/images_bob/numb.jpeg'),
      new Track("New Light", "John Mayer", '../../assets/images_bob/newlight.jpeg'),
      new Track("Night Changes", "One Direction", '../../assets/images_bob/nightchanges.jpeg'),
      new Track("Nothing's the Same", "Alexander 23, Jeremy Zucker", '../../assets/images_bob/nothingsthesame.jpeg'),
      new Track("Never Not", "Lauv", '../../assets/images_bob/nevernot.jpeg'),
      new Track("Nuvole Bianche ", "Ludovico Einaudi", '../../assets/images_bob/nuvolebianche.jpeg'),
      new Track("NUMB", "XXXTENTACION", '../../assets/images_bob/numb_xxx.jpeg'),
      new Track("NUNU NANA", "Jessi", '../../assets/images_bob/nununana.jpeg'),
      new Track("Numb / Encore", "JAY-Z, Linkin Park", '../../assets/images_bob/numb_encore.jpeg'),

      new Track("Teenagers", "My Chemical Romance", '../../assets/images_bob/teenagers.jpeg'),
      new Track("The Scientist", "Coldplay", '../../assets/images_bob/thescientist.jpeg'),
      new Track("Take Me To Church", "Hozier", '../../assets/images_bob/taketomechurch.jpeg'),
      new Track("Train Wreck", "James Arthur", '../../assets/images_bob/trainwreck.jpeg'),
      new Track("thank u, next", "Ariance Grande", '../../assets/images_bob/thanku.jpeg'),
      new Track("Tenerife Sea", "Ed Sheeran", '../../assets/images_bob/tenerife.jpeg'),
      new Track("TEST DRIVE", "Joji", '../../assets/images_bob/testdrivejoji.jpeg'),
      new Track("Teenage Dream", "Katy Perry", '../../assets/images_bob/teenagedream.jpeg'),
      new Track("Teeth", "5 Seconds of Summer", '../../assets/images_bob/teeth_5sos.jpeg'),
      new Track("Smells Like Teen Spirit", "Nirvana", '../../assets/images_bob/teenagedream.jpeg'),
      new Track("Teenage Dirtbag", "Wheatus", '../../assets/images_bob/teenagedirftbag.jpeg')
  ];

  constructor(private router: Router, private nameService: NameService) {
    this.nameService.getSecondName().subscribe(data => {
      this.secondname = data;
      console.log(this.secondname + " bob");
    });
  }

  ngOnInit(): void {
  }

  onContinue() {
    this.router.navigate(['./selected-vibes']);
  }

  numbClick() {
    this.setNumb = true;
    this.dropdown = false;
    this.trackNameSearched = '';
  }

  thankuClick() {
    this.setThanku = true;
    this.dropdown = false;
    this.trackNameSearched = '';
  }

  change(event: any) {
    if (this.trackNameSearched == '') {
      this.dropdown = false;
    }

    if (this.trackNameSearched == 'n' || this.trackNameSearched == 'nu') {
      this.dropdown = true;
      this.type = 'n';
    }

    if (this.trackNameSearched == 'num' || this.trackNameSearched == 'numb') {
      this.dropdown = true;
      this.type = 'num';
    }

    if (this.trackNameSearched == 't') {
      this.type = 't';
      this.dropdown = true;
    }

    if (this.trackNameSearched == 'th' || this.trackNameSearched == 'tha' || this.trackNameSearched == 'than') {
      this.type = 'th';
      this.dropdown = true;
    }

    if (this.trackNameSearched == 'thank' || this.trackNameSearched == 'thank ') {
      this.dropdown = true;
      this.type = 'thank';
    }
  }
}
