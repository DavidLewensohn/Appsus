
import { noteTxt } from "../cmps/note-txt.cmp.js"
import { noteTodos } from "../cmps/note-todos.cmp.js"
import { noteVideo } from "../cmps/note-video.cmp.js"
import { noteImg } from "../cmps/note-img.cmp.js"



export const notePreview = {
    props:['notes'],
    template: `
    <section class="notes-container">
        <div class="card note-container"  v-for="note in notes" @click="editNote(note.id)" >
            <component :is="note.type"  :info="note.info" />
        </div>
        
    </section>
    
`,
    data() {
        return {
            
        };
    },
    created() {
        console.log(this.notes);
    },
    methods: {
        editNote(id){
            this.$emit('currId', id)
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