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

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Professional Experience', cols: 4, rows: 1 },
          { title: 'Me', cols: 4, rows: 1 },
          { title: 'Special Skills', cols: 4, rows: 1 },
          { title: 'Educational Background', cols: 4, rows: 1 },
          { title: 'Bachelor & Master Theses', cols: 4, rows: 1 }
        ];
      }

      return [
        { title: 'Professional Experience', cols: 3, rows: 2, color: 'lightblue' },
        { title: 'Me', cols: 1, rows: 4, color: 'lightgreen' },
        { title: 'Special Skills', cols: 1, rows: 2 },
        { title: 'Educational Background', cols: 2, rows: 2 },
        { title: 'Bachelor & Master Theses', cols: 4, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
