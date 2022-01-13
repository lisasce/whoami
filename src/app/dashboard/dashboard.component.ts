import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

export interface DashboardCard {
  color?: string;
  cols: number;
  rows: number;
  title: string;
}


@Component({
  selector: 'who-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  rippleColor = '#F8BBD0';

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Professional Experience', cols: 4, rows: 1, color: '' },
          { title: 'Me', cols: 4, rows: 1, color: '' },
          { title: 'Special Skills', cols: 4, rows: 1, color: '' },
          { title: 'Educational Background', cols: 4, rows: 1, color: '' },
          { title: 'Bachelor & Master Theses', cols: 4, rows: 1, color: '' }
        ];
      }

      return [
        { title: 'Professional Experience', cols: 3, rows: 1, color: '#CFD8DC' },
        { title: '', cols: 1, rows: 3, color: 'url("https://cdn.pixabay.com/photo/2015/07/20/12/53/gehlert-852762__480.jpg")' },
        { title: 'Special Skills', cols: 1, rows: 2, color: '#F06292' },
        { title: 'Educational Background', cols: 2, rows: 2, color: '' },
        { title: 'Bachelor & Master Theses', cols: 4, rows: 1, color: '#90A4AE' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
