import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./conduit-pages-home/module').then(
        (m) => m.ConduitPagesHomeModule
      ),
  },
  {
    path: 'articles',
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./conduit-pages-articles-details/module').then(
            (m) => m.ConduitPagesArticlesDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
