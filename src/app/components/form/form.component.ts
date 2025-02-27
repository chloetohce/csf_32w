import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task } from '../../models';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  private fb = inject(FormBuilder);
  todoForm!: FormGroup;
  
  @Output() newTask = new Subject<Task>();

  ngOnInit(): void {
    this.todoForm = this.createForm();
  }

  protected processForm() {
    let task: Task = {
      description: this.todoForm.get('description')?.value,
      priority: this.todoForm.get('priority')?.value,
      due: this.todoForm.get('due')?.value,
    }
    this.newTask.next(task);
    console.info("Created new task: ", this.todoForm.value);
  }

  private createForm(): FormGroup {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 1)
    return this.fb.group({
      description: this.fb.control<string>(''),
      priority: this.fb.control<string>('medium'),
      due: this.fb.control<string>(defaultDate.toISOString().split("T")[0])
    })
  }
}
