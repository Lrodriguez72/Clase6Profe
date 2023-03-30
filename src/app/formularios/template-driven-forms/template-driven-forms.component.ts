import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface FormularioRegistro {
  nombre: string;
  apellido: string;
  localizacion: {
    direccion_1: string;
    direccion_2: string;
    ciudad: string;
    provincia: string;
    zip: string;
  }
}


@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {
  formularioRegistroModel: FormularioRegistro = {
    apellido: '',
    nombre: '',
    localizacion: {
      ciudad: '',
      direccion_1: '',
      direccion_2: '',
      provincia: '',
      zip: '',
    }
  }

  onSubmit(ngForm: NgForm): void {
    console.log(ngForm.form);
    console.log(this.formularioRegistroModel);
  }
}
