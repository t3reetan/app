import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router' //ii
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-name-input-page',
  templateUrl: './name-input-page.component.html',
  styleUrls: ['./name-input-page.component.css']
})
export class NameInputPageComponent {

  constructor(private router: Router, private nameService: NameService) { } //ii

  firstname= '';
  submitButtonAppear = false;

  onSubmit() {
    this.nameService.setFirstName(this.firstname);
    this.router.navigate(['/name-friend-input']); //ii
  }

  change(event: any) {
    if (this.firstname != '') {
      this.submitButtonAppear = true;
    }
    if (this.firstname == '') {
      this.submitButtonAppear = false;
    }
  }

  @ViewChild("nameinput")
  myInputField!: ElementRef;
  ngAfterViewInit() {
    this.myInputField.nativeElement.focus();
  }

}
