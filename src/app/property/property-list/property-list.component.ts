import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Birla House',
      Type: 'House',
      Price: 120000,
    },
    {
      Id: 2,
      Name: 'Birla House 2',
      Type: 'House',
      Price: 120000,
    },
    {
      Id: 3,
      Name: 'Birlas House 3',
      Type: 'House',
      Price: 120000,
    },
    {
      Id: 4,
      Name: 'Birla Appt.',
      Type: 'Appartement',
      Price: 12000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
