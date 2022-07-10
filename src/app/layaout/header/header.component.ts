import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router'
import {INTERNAL} from '../../core/conts/routes.conts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() activeEvent = new EventEmitter<boolean>();
  @Input() active: boolean;
  @Input() user: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.activeEvent.emit(!this.active);
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate([INTERNAL.LOGEAR]);
  }

}
