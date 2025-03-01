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

  isCompletedVisible: boolean = false;
  visibleButtonText: string = this.isCompletedVisible ? "Hide completed" : "Show completed"

  ngOnInit(): void {
      this.tasks = []
  }
  
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['newTask'] && !changes['newTask'].isFirstChange()) {
        this.tasks.push(changes['newTask'].currentValue)
      }
  }

  protected processComplete(event: any, idx: number) {
      const curr: Task = this.tasks[idx];
      curr.completion = event.target.checked;
    console.log(this.tasks)
  }

  protected toggleCompletedVisibility() {
    this.isCompletedVisible = !this.isCompletedVisible;
    this.visibleButtonText = this.isCompletedVisible ? "Hide completed" : "Show completed"
  }

  protected deleteTask(idx: number) {
    this.tasks = this.tasks.slice(idx, idx)
  }
}
