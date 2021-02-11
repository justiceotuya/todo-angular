import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() todoParent = new EventEmitter();
  todo = '';
  isInputOpen = false;
  ngOnInit(): void {
  }

  handleChangeInput = (e) => {
    this.todo = e.target.value;
  }

  handleToggleInput = () => {
    this.isInputOpen = !this.isInputOpen;
  }

  handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      this.todoParent.emit(this.todo);
      this.todo = '';
    }
  }


}
