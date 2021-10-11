import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from "../todo-list/item";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class ItemComponent implements OnInit {

  editable = false;

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  ngOnInit(){
    console.log('item', this.item);
  }

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}

