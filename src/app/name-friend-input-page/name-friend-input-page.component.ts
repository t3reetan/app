import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-name-friend-input-page',
  templateUrl: './name-friend-input-page.component.html',
  styleUrls: ['./name-friend-input-page.component.css']
})
export class NameFriendInputPageComponent {

  constructor(private router: Router, private nameService: NameService) { }

  secondname= '';
  submitButtonAppear = false;

  onSubmit() {
    this.nameService.setSecondName(this.secondname);
    this.router.navigate(['/alice-vibe']);
  }

  change(event: any) {
    if (this.secondname != '') {
      this.submitButtonAppear = true;
    }
    if (this.secondname == '') {
      this.submitButtonAppear = false;
    }
  }

  @ViewChild("nameinput")
  myInputField!: ElementRef;
  ngAfterViewInit() {
    this.myInputField.nativeElement.focus();
  }
}
