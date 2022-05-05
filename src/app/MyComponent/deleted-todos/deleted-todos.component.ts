import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-deleted-todos',
  templateUrl: './deleted-todos.component.html',
  styleUrls: ['./deleted-todos.component.css']
})
export class DeletedTodosComponent implements OnInit {
  deletedTodos: Todo[];

  constructor() {
    var localItem = localStorage.getItem("deletedTodos")
    if(localItem == null){
      this.deletedTodos = [];
    }
    else{
      this.deletedTodos = JSON.parse(localItem);
    }
    console.log(this.deletedTodos);
   }

  ngOnInit(): void {
  }

}
