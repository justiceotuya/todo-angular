import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-body',
  templateUrl: './todo-body.component.html',
  styleUrls: ['./todo-body.component.css']
})
export class TodoBodyComponent implements OnInit {

  @Input() todoTasks;
  @Output() itemToToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleItemRowClick = (item, operation) => {
    this.itemToToggle.emit({ item, operation });
  }

  handleToggleWithEnterKey = (e, item) => {
    if (e.key === 'Enter'){
      this.handleItemRowClick(item, 'toggle');
    }
  }

  handleDeleteWithEnterKey = (e, item) => {
    if (e.key === 'Enter'){
      this.handleItemRowClick(item, 'delete');
    }
  }

}
