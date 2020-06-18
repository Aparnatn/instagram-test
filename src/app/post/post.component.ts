import { Component, OnInit, Input } from '@angular/core';
import { PostInterface } from '../post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  showFull = false;

  @Input()
  post: PostInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
