import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnChanges, OnInit {

  @Input() newTask!: Task;
  tasks!: Task[];

  ngOnInit(): void {
      this.tasks = []
  }
  
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['newTask'] && !changes['newTask'].isFirstChange()) {
        this.tasks.push(changes['newTask'].currentValue)
      }
  }
}
