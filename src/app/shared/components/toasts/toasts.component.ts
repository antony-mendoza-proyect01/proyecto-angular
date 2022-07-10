import {Component, OnInit, TemplateRef} from '@angular/core';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-toasts',
  template: `
    <ngb-toast
      *ngIf="toastService.toasts.length > 0"
      header="ATENCIÓN"
      [autohide]="false"
      class="pre-scrollable"
      (hidden)="toastService.toasts = []">

      <ng-container
        *ngFor="let toast of toastService.toasts">
        <ngb-toast
          [class]="toast.classname"
          [autohide]="false">

          <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
            <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
          </ng-template>

          <ng-template #text>{{ toast.textOrTpl }}</ng-template>
        </ngb-toast>
      </ng-container>
    </ngb-toast>
  `,
  // tslint:disable-next-line:no-host-metadata-property
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastsComponent {

  constructor(public toastService: ToastService) {}

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

}
