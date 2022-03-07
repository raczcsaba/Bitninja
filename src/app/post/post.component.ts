import { Component, OnInit } from '@angular/core';
import { Types } from '../interfaces/types';
import { PostDataService } from '../services/post-data.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})
export class PostComponent implements OnInit {

  constructor(private dataService: PostDataService) { }
  data:Types = {
    userId:1,
    id:101,
    title:'',
    body:''
  };

  ngOnInit(): void {

  }

  submit() {
    this.dataService.postData(this.data).subscribe(res => {
      console.log(res)
    })

  }
}
