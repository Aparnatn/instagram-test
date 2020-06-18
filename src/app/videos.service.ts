import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostInterface, PostResponseInterface } from './post.interface';
@Injectable({
  providedIn: 'root'
})
export class VideosService {
  url="https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas"

  constructor(private http:HttpClient) { }

  getvideos(): Observable<PostInterface[]>
  {
    return this.http.get<PostResponseInterface[]>(this.url).pipe(
      map(response => {
        return response.map(post => {
          return {
            id: post.id,
            channelname: post.channelname,
            title: post.title,
            high_thumbnail: post["high thumbnail"],
            low_thumbnail: post["low thumbnail"],
            medium_thumbnail: post["medium thumbnail"],
            tags: post.tags,
          };
        }
        )
      })
    );
  }

}
