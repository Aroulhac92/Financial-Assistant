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

  test(word) {
    console.log(word)
  }

  logNote(callback) {
    let newNote = this.note.value
    if (newNote !== '') {
      callback(newNote)
      this.appendNote.sendNote(newNote)
      this.note.reset()
    } else alert('Please add a note.')
  }

  
  /** Testing HackerRank */
  sampleArray = [-4, 3, -9, 0, 4, 1]

  ngOnInit() {
  }

}