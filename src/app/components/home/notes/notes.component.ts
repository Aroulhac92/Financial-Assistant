import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppendStockService } from 'src/app/services/append-stock.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {

  constructor( private appendNote: AppendStockService) { }

  button:string = "save"

  note = new FormControl('')
  savedNote:string;

  logNote() {
    if (this.note.value !== '') {
      this.savedNote = this.note.value
      this.appendNote.sendNote(this.savedNote)
      this.note.reset()
    } else alert('Please add a note.')
  }

  ngOnInit() {

  }

}