import { Component, OnInit } from '@angular/core';
import { Data } from '../interfaces/data';
import { GetdataService } from '../services/getdata.service';



@Component({
  selector: 'app-bejegyzesek',
  templateUrl: './bejegyzesek.component.html',
  styleUrls: ['./bejegyzesek.component.css']
})
export class BejegyzesekComponent implements OnInit {

  constructor(private dataService: GetdataService) { }

  data:Data[] = [];
  selectedPost?: Data;


  ngOnInit(): void {
    this.getData();

  }
  getData(): void {
    this.dataService.getData().subscribe( res =>{
      this.data = this.data.concat(res);
      console.log(res)
    },
      error => {
      console.log(error.error);

    },
      () => {

      }  );
  }

  lastChapter = 0;

  displayId(item:Data): boolean {
    if (item.userId !== this.lastChapter) {
      this.lastChapter = item.userId;
      return true;
    } else {
      return false;
    }
  }
  onSelect(post: Data): void {
    this.selectedPost = post;
  }

}
