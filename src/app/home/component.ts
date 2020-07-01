import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conduit-pages-home',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class ConduitPagesHomeComponent implements OnInit {
  constructor(private router: Router) {}

  isAuthenticated: boolean;
  listConfig: any = {
    type: 'all',
    filters: {},
  };
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {}

  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    // Otherwise, set the list object
    this.listConfig = { type: type, filters: filters };
  }
}
