import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router' //ii
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-bob-vibe-page',
  templateUrl: './bob-vibe-page.component.html',
  styleUrls: ['./bob-vibe-page.component.css']
})
export class BobVibePageComponent implements OnInit {
  faSearch = faSearch;

  secondname: string | undefined;

  constructor(private router: Router, private nameService: NameService) {
    this.nameService.getSecondName().subscribe(data => {
      this.secondname = data;
      console.log(this.secondname + " bob");
    });
  }

  ngOnInit(): void {
  }

  onContinue() {}
}
