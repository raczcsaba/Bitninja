import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetdataService } from '../services/getdata.service';
import { GetCommentsService } from '../services/get-comments.service';

import {Types,Comments} from "../interfaces/types";

@Component({
  selector: 'app-bejegyzes-detail',
  templateUrl: './bejegyzes-detail.component.html',
  styleUrls: ['./bejegyzes-detail.component.css']
})
export class BejegyzesDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: GetdataService,
    private commentService: GetCommentsService,
  ) { }

  item?:Types;
  data:Types[]=[];
  comments:Comments[] = [];

  ngOnInit(): void {
    this.dataService.getData().subscribe(res => {
      this.data = this.data.concat(res)
      this.getPost();
    },);


  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getPost(this.data,id)
      .subscribe(res => {
        this.item = res;
        this.commentService.getComments(id).subscribe(res =>{
          this.comments = this.comments.concat(res);
        })

      });
  }
}
