import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VideosService } from './videos.service'
import { PostInterface } from './post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: PostInterface[];

  title = 'test-project';

  constructor(private videoData: VideosService) { }

  ngOnInit() {
    this.videoData.getvideos().subscribe((result) => {
      console.warn("result", result)
      this.data = result
    });
  }
}
