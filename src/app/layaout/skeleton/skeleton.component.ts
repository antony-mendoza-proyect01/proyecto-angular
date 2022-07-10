import {Component, Input, OnInit} from '@angular/core';
import {LOCAL} from '../../core/conts/localStorage.const';
import {Inavigation} from '../../data/interfaces/iNavigation';
import {NAVIGATION_APP} from '../../core/conts/navigation.const';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
  active: boolean;
  user: any;
  navigation: Inavigation[];

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem(LOCAL.user);

    this.navigation = NAVIGATION_APP;
  }

  _activeEvent($event: boolean){
    this.active = $event;
  }

  _activeEventComponent(event) {
    this.active = !this.active;
  }

}
