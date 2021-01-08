import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

  }

  spotifyLogin() {
    //this.router.navigate(['http://localhost:4201/login']);
    this.document.location.href = 'http://localhost:4201/login';
  }
}
