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
    this.tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]")
  }
  
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['newTask'] && !changes['newTask'].isFirstChange()) {
        this.tasks.push(changes['newTask'].currentValue)
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
      }
      
    }
    
    protected processComplete(event: any, idx: number) {
      const curr: Task = this.tasks[idx];
      curr.completion = event.target.checked;
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
    }
    
    protected toggleCompletedVisibility() {
      this.isCompletedVisible = !this.isCompletedVisible;
      this.visibleButtonText = this.isCompletedVisible ? "Hide completed" : "Show completed"
    }
    
    protected deleteTask(idx: number) {
      this.tasks.splice(idx, 1)
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }
}
