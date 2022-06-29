import { noteService } from "../services/note-service.js"
import { noteTxt } from "../cmps/note-txt.cmp.js"
import { noteTodos } from "../cmps/note-todos.cmp.js"
import { noteVideo } from "../cmps/note-video.cmp.js"
import { noteImg } from "../cmps/note-img.cmp.js"

export const notePreview = {
    props: ['info'],
    template: `
    <section class="notes-container">
        <component :is="note.type"  :info="note.info"  v-for="note in notes"/>
    </section>
`,
    data() {
        return {
            notes: noteService.getNote(),
        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
    components: {
        noteTxt,
        noteTodos,
        noteVideo,
        noteImg,
    }
};