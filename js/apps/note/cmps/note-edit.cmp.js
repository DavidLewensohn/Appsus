import { noteTxt } from "../cmps/note-txt.cmp.js"
import { noteImg } from "../cmps/note-img.cmp.js"

export const noteEdit = {
    props: ['editedNote'],
    template: `
   <section if="editedNote":class="editModal">
       <!-- <h3>{{titleTxt}}</h3> -->
       <input type="text" v-if="type==='note-img'" 
        class="img-input" @input="imgUrl"
        v-model="url">
        <component :is="type"  :info="info" />
        
        <textarea v-model="text">{{text}}</textarea>
        <button class="save-button" @click="saveEdit" >✔</button>
        <button class="close-button" @click="closeEditNote" >✘</button>
        <!-- <button class="img-button" @1click="imgType"><img src="img/image.png" alt=""></button>
        <button class="txt-button" @1click="txtType"><img src="img/text.png" alt=""></button> -->
        <input type="color" value="white" class="bck-button" @input="setBeckColor" > 

        
    </section>
`,
    data() {
        return {
            isEditTubOpen: true,
            note: this.editedNote,
            type: this.editedNote.type,
            info: this.editedNote.info,
            text: this.text(),
            beckColor: null,
            url: null ,
        };
    },
    created() { 
        console.log('note: ',this.note)
        console.log('info:', this.info)
        console.log('type:',this.type)
    },
    methods: {
        imgUrl(e) {
            this.url = e.target.value
        },
        saveEdit() {
            var txt = this.text
            var type = this.type
            var url = this.url
            var backgroundColor = this.beckColor
            var id = this.note.id
            var note
            console.log(id);

            if(type==='note-txt')note = { id, type, info: {txt,}}
            if(type==='note-img')note = { id, type, info: {url, title: txt,  style: {backgroundColor}}}
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
        setBeckColor(e){
            this.beckColor = e.target.value
            console.log(this.beckColor)
        },  
    },
    computed: {
        editModal() {
            return (this.editedNote && this.isEditTubOpen) ? 'edit-modal open' : 'edit-modal close'
            // return 'edit-modal open'
        },
        textVal() {
            if (this.type === 'note-img') return this.info.url
            else if (this.type === 'note-txt') return this.info.txt
        },
        getColor() {
            // return `background-color: ${this.beckColor};`
        }
    },
    mounted() { },
    components: {
        noteTxt,
        noteImg,
    }
};