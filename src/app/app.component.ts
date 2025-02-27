import { Component } from '@angular/core';
import { Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'csf_32w';

  task!: Task;

  protected processNewTask(task: Task) {
    console.log("AppComponent: ", task)
    this.task = task;
  }
}
