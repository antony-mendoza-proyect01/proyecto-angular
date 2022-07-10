import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Inavigation} from '../../data/interfaces/inavigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() activeEvent = new EventEmitter<boolean>();
  @Input() active: boolean;
  @Input() metadata: Array<Inavigation>;

  get windowRef() {
    return window;
  }

  constructor() { }

  ngOnInit(): void {
  }

  _active() {
    if (this.windowRef.innerWidth <= 767) {
      this.activeEvent.emit(true);
    }
  }
}
