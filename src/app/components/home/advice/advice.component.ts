import { Component, OnInit } from '@angular/core';
import { AppendStockService } from 'src/app/services/append-stock.service';
import { NotesObject } from 'src/app/services/interface';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {

  constructor ( private appendStock: AppendStockService) { }

  newSavedNotes:Array<NotesObject> = [
    
    // Sample notes for front end design
    {
      content: 'Lorem ipsum dolor si amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus. Nunc sed augue lacus viverra vitae. Facilisis magna etiam tempor orci eu lobortis.',
      contentLongerThan70: true,
      focused: false,
      dimNote: false
    },
    {
      content: 'This will serve as my second note and the note that I will use for most of my testing as I dont quite understand how testing in Angular works but rest assured diligent soul! We shall prevail.',
      contentLongerThan70: true,
      focused: false,
      dimNote: false
    },
    {
      content: 'Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus. Nunc sed augue lacus viverra vitae. Facilisis magna etiam tempor orci eu lobortis.',
      contentLongerThan70: true,
      focused: false,
      dimNote: false
    }
    // End Sample Notes
    
  ]

  // Check content of newSavedNotes array
  testingForIn = () => {for (const prop of this.newSavedNotes) {
    console.log(prop.content)
  }}

  toggleFocus(stringMatch:string) {
    const matchIndex = (element:NotesObject) => element.content === stringMatch

    let savedNotesArray = this.newSavedNotes

    let noteIndex = savedNotesArray.findIndex(matchIndex)

    this.newSavedNotes[noteIndex].focused = !this.newSavedNotes[noteIndex].focused
  }

  // To test functionality
  // logToConsole() { console.log(this.newSavedNotes) }

  insertNote() {
    this.appendStock.newNote.subscribe(data => {

      this.newSavedNotes.unshift({
        content: data,
        contentLongerThan70: data.length > 70,
        focused: false,
        dimNote: false
      })
    })
  }

  deleteNoteAfterTimeout(note:string) {

    const matchIndex = (element:NotesObject) => element.content === note

    const noteIndex = this.newSavedNotes.findIndex(matchIndex)

    const deleteNote = () => {
      this.newSavedNotes.splice(noteIndex, 1)
    }

    if (!confirm('Are you sure you want to delete your note?')) { return }

    this.newSavedNotes[noteIndex].dimNote = true

    setTimeout(() => {
      deleteNote()
    }, 250)

  }
  
  ngOnInit() {
    this.insertNote()
  }

}
