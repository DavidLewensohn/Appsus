

export default {
    template: `
    <button class="add-button" @click="openNewNote">+</button>

    <div class="add-container" :class="ifOpen">
        <textarea v-model="text" placeholder="Add New Note"  
            @submit="createNote" @focus="blur" >{{text}}
        </textarea>
            <button class="save-button" @click="createNote" >Save</button>

    </div>

`,
    data() {
        return {
            text: '',
            isAddTubOpen: false,

        };
    },
    created() { },
    methods: {
        createNote(e) {
            // e.preventDefault()
            console.log('hi');
            console.log(this.text);
        },
        openNewNote() {
            this.isAddTubOpen = !this.isAddTubOpen

        },
        blur(){
            console.log(this.$refs)
        }
    },
    computed: {
        ifOpen(){
            return (this.isAddTubOpen)? 'open': 'close'
        }
    },
    unmounted() { },
};