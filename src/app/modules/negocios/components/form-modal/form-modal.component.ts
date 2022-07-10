import {Component, Input, OnInit} from '@angular/core';
import { ProyectoArticles} from '../../../../data/entities/proyectoArticles';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  @Input() proyectoArticulo: ProyectoArticles;
  proyectoArticlesForm: ProyectoArticlesForm;
  submitted = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.proyectoArticlesForm = new ProyectoArticlesForm(this.proyectoArticulo);
  }

  get f() { return this.proyectoArticlesForm.controls; }

  async onSubmit() {
    this.submitted = true;

    if (this.proyectoArticlesForm.invalid) {
      return;
    }

    this.activeModal.close(this.proyectoArticlesForm.getRawValue());
  }


}
// TODO: class para implementacion del formulario
export class ProyectoArticlesForm extends FormGroup {
  constructor(proyectoArticle: ProyectoArticles) {
    super({
      author: new FormControl(proyectoArticle.author, [Validators.required]),
      description: new FormControl(proyectoArticle.description, [Validators.required]),
      title: new FormControl(proyectoArticle.title, [Validators.required]),
    });
  }
}
