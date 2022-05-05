import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-angular-demo',
  templateUrl: './angular-demo.component.html',
  styleUrls: ['./angular-demo.component.css']
})
export class AngularDemoComponent implements OnInit {
  todos!: Todo[];
  deletedTodos!: Todo[];

  constructor() {
    var localItem = localStorage.getItem("todos");

    if(localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(localItem);
    }

    localItem = localStorage.getItem("deletedTodos")
    if(localItem == null){
      this.deletedTodos = [];
    }
    else{
      this.deletedTodos = JSON.parse(localItem);
      if(this.deletedTodos.length > 10){
        this.deletedTodos = [];
      }
    }
    console.log(this.deletedTodos);
   }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.deletedTodos.push(todo);
    localStorage.setItem("deletedTodos", JSON.stringify(this.deletedTodos));
    console.log(this.deletedTodos);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){
    // console.log(todo);
    
    todo.sno = this.todos[this.todos.length-1].sno + 1;
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  
    // console.log(todo);
  }
}
