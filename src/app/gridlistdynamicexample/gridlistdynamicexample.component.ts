import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridlistdynamicexample',
  templateUrl: './gridlistdynamicexample.component.html',
  styleUrls: ['./gridlistdynamicexample.component.css']
})
export class GridlistdynamicexampleComponent implements OnInit {
 
  tiles = [
    {text: 'aaa', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'bbb', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'ccc', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'ddd', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'eee', cols: 1, rows: 1, color: 'orange'},
    {text: 'fff', cols: 3, rows: 1, color: 'yellow'},
  ];
  constructor() { }

  ngOnInit() {
  }

}

