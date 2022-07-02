import { noteService } from "../services/note-service.js"
import { notePreview } from "../cmps/note-preview.cmp.js"
import { noteEdit } from "../cmps/note-edit.cmp.js"
import noteAdd from "../cmps/note-add.cmp.js"


export default {
    template: `
        <note-add @newNote="addNote"/>
        <note-edit v-if="sentNote" :editedNote="sentNote" @editNote="updateNote"/>
        <note-preview v-if="notes" :notes="notes" @currId="findEditNote"/>
    `,
    data() {
        return {
            notes: noteService.getNotes()
                .then(notes => this.notes = notes)
                .then(notes=> console.log(notes)),
            newNote: null,
            sentNote: null,
            openEditTab: false,
            

        }
    },
    created() {},
    methods: {
        addNote(note) {
            console.log(this.notes)
            note.then(note => this.notes.push(note))
            console.log(this.notes)
        },
        updateNote(note) {
            this.sentNote=null
            if (note === 'closeTub' ) return
            console.log(this.notes)
            var id = note.id
            console.log(note, id);
            var a = noteService.updateNote(note)
            console.log(a);
            
            let idx = this.notes.findIndex(note=>note.id===id)
            console.log('hi',idx);
            this.notes.splice(idx, 1, note)
            console.log(this.notes);

            // note.then(note => {
            //     console.log(note.id)
            //     id = note.id
            //     console.log(id)
            //     console.log(this.notes)
            // })
        },
        findEditNote(id) {
            console.log(id)
            console.log(this.notes); 
            noteService.getNote(id).then(note => {
                this.sentNote = note
                this.openEditTab = true
                console.log('sent to edit:',this.sentNote)
            })
        }
    },
    computed: {},
    unmounted() {},
    components: {
        notePreview,
        noteAdd,
        noteEdit,
    }

}