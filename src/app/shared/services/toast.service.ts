import {Injectable, TemplateRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}, borrarListado: boolean = true) {
    if (borrarListado) {
      this.toasts = [];
    }
    this.toasts.push({ textOrTpl, ...(options) });
  }

  remove() {
    this.toasts = this.toasts.filter(t => false);
  }

  httpNoContent() {
    this.show(`Data no encontrada.`, {classname:  'bg-warning'});
  }

  warning(texto: string) {
    this.show(
      texto,
      {
        classname: 'bg-warning text-dark',
        headertext: 'Warning!',
      });
  }

  info(texto: string) {
    this.show(
      texto,
      {
        classname: 'bg-info-custom text-white'
      });
  }

}
