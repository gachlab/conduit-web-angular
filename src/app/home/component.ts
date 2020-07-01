import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConduitPagesHomeService } from './service';

@Component({
  selector: 'app-conduit-pages-home',
  templateUrl: './template.html',
})
export class ConduitPagesHomeComponent implements OnInit {
  constructor(private service: ConduitPagesHomeService) {}
  listConfig: any = {
    type: 'all',
    filters: {},
  };
  articles: Array<any> = [];
  tags: Array<string> = [];

  ngOnInit() {
    this.service.init().then((state) => {
      (this.articles = state.articles), (this.tags = state.tags);
    });
  }

  onTagSelected(id) {
    console.log(id);
  }

  onFeedSelected(id) {
    console.log(id);
  }
}
