import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.email,
    ]
  );

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [ Validators.required, Validators.minLength(3)] ],
      apellido: ['', [ Validators.required] ],
      email: this.emailControl,
      localizacion: this.formBuilder.group({
        ciudad: [''],
        direccion_1: [''],
        direccion_2: [''],
        provincia: [''],
        zip: [''],
      }),
    });

    console.log(this.registerForm.get('nombre')?.value)
    console.log(this.emailControl.value);
  }

  get nombreControl(): AbstractControl | null {
    return this.registerForm.get('nombre');
  }


  get nombreControlIsInvalid(): boolean {
    return !!(this.nombreControl?.invalid && this.nombreControl.touched);
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('El formulario no es valido');
    }
  }
}
