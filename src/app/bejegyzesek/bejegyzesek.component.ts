import { Component, OnInit } from '@angular/core';
import { Data } from '../interfaces/data';
import { GetdataService } from '../services/getdata.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-bejegyzesek',
  templateUrl: './bejegyzesek.component.html',
  styleUrls: ['./bejegyzesek.component.css']
})
export class BejegyzesekComponent implements OnInit {

  constructor(private dataService: GetdataService) { }

  Data:Data[] = [];
  selectedPost?: Data;


  ngOnInit(): void {
    this.getData();

  }
  getData(): void {
    this.dataService.getData().subscribe( data =>{
      this.Data.push(data);
    },
      error => {
      console.log(error.error);

    },
      () => {

      }  );
  }
  onSelect(post: Data): void {
    this.selectedPost = post;
  }

}
