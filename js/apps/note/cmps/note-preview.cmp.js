import { noteService } from "../services/note-service.js"
import { eventBus } from "../../../services/event-bus.js"
import { noteTxt } from "../cmps/note-txt.cmp.js"
import { noteTodos } from "../cmps/note-todos.cmp.js"
import { noteVideo } from "../cmps/note-video.cmp.js"
import { noteImg } from "../cmps/note-img.cmp.js"
import {noteEdit} from "../cmps/note-edit.cmp.js"


export const notePreview = {
    template: `
    <section class="notes-container">
        <div class="card note-container"  v-for="note in notes" @click="editNote(note.id)" >
            <component :is="note.type"  :info="note.info" />
        </div>
        <note-edit :editNote="sentNote"/>
        
    </section>
    
`,
    data() {
        return {
            notes: noteService.getNotes()
                .then(notes => this.notes = notes),
            newNote: null,
            sentNote: null,
        };
    },
    created() {
        this.newNote = eventBus.on('newNote', this.addNote)
    },
    methods: {
        addNote(note){
            note.then(note=>this.notes.push(note))
        },
        editNote(id){
            console.log(id)
            noteService.getNote(id).then(note =>  this.sentNote = note)
            console.log(this.sentNote);
        }
    },
    computed: {},
    unmounted() { },
    components: {
        noteTxt,
        noteTodos,
        noteVideo,
        noteImg,
        noteEdit,

    }
};