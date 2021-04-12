import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from '../_models/country';
import { GenderResult } from '../_models/gender-result';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  firstName: string;

  result: GenderResult;

  countryName: string;

  countries: Country[];

  selectedCountry: Country;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<Country[]>('https://restcountries.eu/rest/v2/all')
      .subscribe(data => {
        this.countries = data;
    })
  }

  search(){
    //.subscribe = travail avec des OBSERVABLES
    // ==> pas de ASYNC / AWAIT (vs. Promesses)
    // il faut permettre la généricité

    let url = 'https://api.genderize.io?name=' + this.firstName;

    //quand on a selectionné un pays, on rajoute son country code au URL
    if (this.selectedCountry){
      url += "&country_id=" + this.selectedCountry.alpha2Code;
    }

    this.http.get<GenderResult>(url)
      .subscribe(data => {
        this.result = data;
        console.log(data);
        this.firstName = null;
    })
  }

}
