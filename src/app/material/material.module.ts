import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatCardModule,MatDividerModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule 
  ],
  exports:[MatCardModule,MatDividerModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule ]
})
export class MaterialModule { }
