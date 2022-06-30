import { noteService } from "../services/note-service.js"
import { eventBus } from "../../../services/event-bus.js"
import { noteTxt } from "../cmps/note-txt.cmp.js"
import { noteTodos } from "../cmps/note-todos.cmp.js"
import { noteVideo } from "../cmps/note-video.cmp.js"
import { noteImg } from "../cmps/note-img.cmp.js"

export const notePreview = {
    template: `
    <section class="notes-container">
        <component :is="note.type"  :info="note.info"  v-for="note in notes"/>
    </section>
    
`,
    data() {
        return {
            notes: noteService.getNote().then(note => this.notes = note),
            newNote: null,
        };
    },
    created() {
        this.newNote = eventBus.on('newNote', this.addNote)
    },
    methods: {
        addNote(note){
            note.then(note=>this.notes.push(note))
        }
    },
    computed: {},
    unmounted() { },
    components: {
        noteTxt,
        noteTodos,
        noteVideo,
        noteImg,
    }
};