import { noteService } from "../services/note-service.js"

export default {
    
    template: `
    <button class="add-button" @click="openNewNote">+</button>

    <div class="add-container" :class="ifOpen">
        <textarea v-model="text" :placeholder="placeholder"
            :style="getColor">{{text}}</textarea>
        <textarea v-model="todos" placeholder="Enter todos:"
            :style="getColor" v-if="noteType ==='note-todos'">{{todos}}</textarea>
        <input type="text" class="img-input" placeholder="Enter Image Url" 
            @input="imgUrl" v-if="noteType ==='note-img'">
        <button class="save-button" @click="createNote" >✔</button>
        <button class="close-button" @click="closeNewNote" >✘</button>
        <button class="img-button" @click="imgType" ><img src="img/image.png" alt=""></button>
        <button class="txt-button" @click="txtType" ><img src="img/text.png" alt=""></button>
        <button class="txt-button" @click="totosType" > ≔</button>

        <input type="color" value="#fffc8e" class="bck-button" @input="setBeckColor" >
        
    </div>

`,
    data() {
        return {
            text: '',
            noteType: "note-txt",
            isAddTubOpen: false,
            beckColor: '#fffc8e',
            todos:null,

        };
    },
    created() { },
    methods: {
        createNote() {
            var txt = this.text
            var noteType = this.noteType
            var url = this.imgUrl
            var backgroundColor = this.beckColor
            var note
            if (noteType==='note-todos'){
                var lines = this.todos.split("\n")
                console.log(lines)
            }



            this.isAddTubOpen = false
            if (!txt) return
            if (noteType === "note-txt") note = noteService.createNote(noteType, { txt })
            if (noteType === "note-img") note = noteService.createNote(noteType, { url, title:txt, style: {backgroundColor}})
            if (noteType === "note-todos") note = noteService.createNote(noteType, { label: txt, style: { backgroundColor }, todos: [{ txt: lines[0] }, { txt: lines[1] }] })
            this.$emit('newNote', note)
        },
        openNewNote() {
            this.isAddTubOpen = !this.isAddTubOpen
        },
        closeNewNote() {
            this.isAddTubOpen = false
            this.beckColor= '#fffc8e'
            this.noteType = null
            this.text = ''
        },
        imgType() {
            this.noteType = 'note-img'
        },
        txtType() {
            this.noteType = 'note-txt'
        },
        totosType(){
            this.noteType = 'note-todos'
        },
        imgUrl(e){
            this.imgUrl = e.target.value
        },
        setBeckColor(e){
            console.log(e.target.value)
            this.beckColor = e.target.value
        },

    },
    computed: {
        ifOpen() {
            return (this.isAddTubOpen) ? 'open' : 'close'
        },
        placeholder() {
            if (this.noteType === 'note-img') return 'Enter Image Title'
            else return 'Add New Note'

        },
        getColor(){
            return `background-color: ${this.beckColor};`
        }
    },
    unmounted() { },
};