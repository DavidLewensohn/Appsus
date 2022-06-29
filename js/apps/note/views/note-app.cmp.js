import { notePreview } from "../cmps/note-preview.cmp.js"
import noteAdd from "../cmps/note-add.cmp.js"

export default {
    template: `
        <note-add/>
        <note-preview/>
    `,
    data() {
        return {

    }
    },
    created() {},
    methods: {},
    computed: {},
    unmounted() {},

    components: {
        notePreview,
        noteAdd,
    }

}