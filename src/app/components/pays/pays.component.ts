import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';




@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  countries;

  constructor(private httpService: HttpService,) { }

  ngOnInit(): void {
    this.countries = this.httpService.getAllCountries();


  }

}
