// import { noteTxt } from "../cmps/note-txt.cmp.js"
import { noteTxt } from "../cmps/note-txt-edit.cmp.js"
// import { noteImg } from "../cmps/note-img.cmp.js"
import { noteImg } from "../cmps/note-img-edit.cmp.js"
// import { noteTodos } from "../cmps/note-todos.cmp.js"
import { noteTodos } from "../cmps/note-todos-edit.cmp.js"


export const noteEdit = {
    props: ['editedNote'],
    template: `
   <section v-if="editedNote":class="editModal">
   <!-- <button class="del-btn" @click="deleteNote">🗑️</button> -->

       <!-- <input type="text" v-if="type==='note-img'" 
            class="img-input" @input="imgUrl" v-model="url"> -->

        <component 
            :is="type" :info="info" 
            @toImgUrl="imgUrl"
            @toDeleteNote="deleteNote"
            @toSaveEdit="saveEdit"
            @toSetBeckColor="setBeckColor"
            @toCloseEditNote="closeEditNote">
        <component/>
        
        <!-- <textarea v-model="text">{{text}}</textarea>
        <button class="save-button" @click="saveEdit" >✔</button>
        <button class="close-button" @click="closeEditNote" >✘</button>
        <input type="color" value="white" class="bck-button" @input="setBeckColor" >  -->

        
    </section>
`,
    data() {
        return {
            isEditTubOpen: true,
            note: this.editedNote,
            type: this.editedNote.type,
            info: this.editedNote.info,
            text: this.text(),
            beckColor: "#fffc8e",
            url: null,
        };
    },
    created() {
        console.log('note: ', this.note)
        console.log('info:', this.info)
        console.log('type:', this.type)
    },
    methods: {
        imgUrl(url) {
            this.url = url
        },
        // imgUrl(e) {
        //     this.url = e.target.value
        // },
        saveEdit(text, lines) {
            console.log(lines);
            let todos = lines
            console.log(text, todos);

            var txt = text
            // var txt = this.text
            var type = this.type
            var url = this.url
            var backgroundColor = this.beckColor
            var id = this.note.id
            var note
            console.log(id);

            if (type === 'note-txt') note = { id, type, info: { txt, style: { backgroundColor } } }
            if (type === 'note-img') note = { id, type, info: { url, title: txt, style: { backgroundColor } } }
            if (type === 'note-todos') note = { id, type, info: { label: txt, style: { backgroundColor }, todos: [{ txt: lines[0] }, { txt: lines[1] }] } }
            this.$emit('editNote', note)
            this.closeEditNote()
        },
        closeEditNote() {
            this.$emit('editNote', 'closeTub')
            this.isEditTubOpen = false
        },
        text() {
            var type = this.editedNote.type
            var info = this.editedNote.info
            if (type === 'note-txt') return info.txt
            if (type === 'note-img') return info.title
        },
        setBeckColor(beckColor) {
            this.beckColor = beckColor
            console.log(this.beckColor)
        },
        // setBeckColor(e){
        //     this.beckColor = e.target.value
        //     console.log(this.beckColor)
        // },  
        deleteNote() {
            this.closeEditNote()
            console.log('delete', this.note);
            this.$emit('deleteNote', this.note)
        }
    },
    computed: {
        editModal() {
            // return (this.editedNote && this.isEditTubOpen) ? 'edit-modal open' : 'edit-modal close'
            return 'edit-modal open'
        },
        textVal() {
            if (this.type === 'note-img') return this.info.url
            else if (this.type === 'note-txt') return this.info.txt
            else if (this.type === 'note-todos') return this.info.lable
        },
        getColor() {
            // return `background-color: ${this.beckColor};`
        }
    },
    mounted() { },
    components: {
        noteTxt,
        noteImg,
        noteTodos,

    }
};