import { noteService } from "../services/note-service.js";

export const noteEdit = {
    props: ['editNote'],
    template: `
   <section :class="editModal">
       <h2>{{editNote}}</h2>
        <!-- <textarea v-model="text" :placeholder="placeholder"
            :style="getColor">{{text}}</textarea>
        <input type="text" class="img-input" placeholder="Enter Image Url" 
            @1input="imgUrl" v-if="noteType ==='note-img'">
        <button class="save-button" @1click="createNote" >✔</button>
        <button class="close-button" @1click="closeNewNote" >✘</button>
        <button class="img-button" @1click="imgType"><img src="img/image.png" alt=""></button>
        <button class="txt-button" @1click="txtType"><img src="img/text.png" alt=""></button>
        <input type="color" value="white" class="bck-button" @1input="setBeckColor" >

         -->
    </section>
`,
    data() {
        return {
            isModalOpen: true,
            note: null,
        };
    },
    created() {

     },
    methods: {
    },
    computed: {
        editModal() {

            return (this.editNote && this.isModalOpen) ? 'edit-modal open' : 'edit-modal close'
        },
        placeholder() {
            if (this.noteType === 'note-img') return 'Enter Image Title'
            else return 'Add New Note'

        },
    },
    mounted() {},
};