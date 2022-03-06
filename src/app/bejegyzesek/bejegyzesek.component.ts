import { Component, OnInit } from '@angular/core';
import { Types } from '../interfaces/types';
import { GetdataService } from '../services/getdata.service';



@Component({
  selector: 'app-bejegyzesek',
  templateUrl: './bejegyzesek.component.html',
  styleUrls: ['./bejegyzesek.component.css']
})
export class BejegyzesekComponent implements OnInit {

  constructor(private dataService: GetdataService) { }

  data:Types[] = [];
  selectedPost?: Types;


  ngOnInit(): void {
    this.getData();

  }
  getData(): void {
    this.dataService.getData().subscribe( res =>{
      this.data = this.data.concat(res);
    });
  }

  lastChapter = 0;

  displayId(item:Types): boolean {
    if (item.userId !== this.lastChapter) {
      this.lastChapter = item.userId;
      return true;
    } else {
      return false;
    }
  }
  onSelect(post: Types): void {
    this.selectedPost = post;
  }

}
