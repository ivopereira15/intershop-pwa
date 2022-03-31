import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ish-blog-article-page',
  templateUrl: './blog-article-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogArticlePageComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.parent.snapshot.url[0].path;
  }
}
