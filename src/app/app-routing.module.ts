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
  {
    path: 'login',
    loadChildren: () =>
      import('./conduit-pages-signin/module').then(
        (module) => module.ConduitPagesSigninModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./conduit-pages-signup/module').then(
        (module) => module.ConduitPagesSignupModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
