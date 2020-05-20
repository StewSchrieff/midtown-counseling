import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name = '';
  public notes = '';

  public date;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.date = new Date();

  }

  save() {
    console.log('saving');
    console.log(this.notes);
  }

  clear() {
    this.notes = '';
    this.name = '';
  }


}
