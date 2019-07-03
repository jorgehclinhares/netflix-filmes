import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full'
      },
      {
        path: 'movies',
        children: [
          {
            path: '',
            loadChildren: () => import('./movie/movie.module').then(mod => mod.MovieModule)
          }
        ]
      },
      {
        path: '**',
        redirectTo: 'movies',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
