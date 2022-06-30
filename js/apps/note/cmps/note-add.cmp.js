import { noteService } from "../services/note-service.js"
import { eventBus } from "../../../services/event-bus.js"

export default {
    template: `
    <button class="add-button" @click="openNewNote">+</button>

    <div class="add-container" :class="ifOpen">
        <textarea v-model="text" :placeholder="placeholder"
            :style="getColor">{{text}}</textarea>
        <input type="text" class="img-input" placeholder="Enter Image Url" 
            @input="imgUrl" v-if="noteType ==='note-img'">
        <button class="save-button" @click="createNote" >✔</button>
        <button class="close-button" @click="closeNewNote" >✘</button>
        <button class="img-button" @click="imgType" ><img src="img/image.png" alt=""></button>
        <button class="txt-button" @click="txtType" ><img src="img/text.png" alt=""></button>
        <input type="color" value="white" class="bck-button" @input="setBeckColor" >
        
    </div>

`,
    data() {
        return {
            text: '',
            noteType: "note-txt",
            isAddTubOpen: false,
            beckColor: 'white',

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


            this.isAddTubOpen = false
            if (!txt) return
            if (noteType === "note-txt") note = noteService.createNote(noteType, { txt })
            if (noteType === "note-img") note = noteService.createNote(noteType, { url, title:txt, style: {backgroundColor}})
            eventBus.emit('newNote', note)
        },
        openNewNote() {
            this.isAddTubOpen = !this.isAddTubOpen
        },
        closeNewNote() {
            this.isAddTubOpen = false
            this.noteType = null
        },
        imgType() {
            this.noteType = 'note-img'
        },
        txtType() {
            this.noteType = 'note-txt'
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