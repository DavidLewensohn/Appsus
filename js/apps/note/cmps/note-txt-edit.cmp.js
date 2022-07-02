export const noteTxt = {
    props: ['info'],
    template: `
    <section :style="info.style" class="txt-container">

        <button @click="deleteNote">delete</button>
        <textarea v-model="text">{{text}}</textarea>
        <button class="save-button" @click="saveEdit" >✔</button>
        <button class="close-button" @click="closeEditNote" >✘</button>
        <input type="color" value="#fffc8e" class="bck-button" @input="setBeckColor" >

    </section>
`,
    data() {
        return {
            text: this.info.txt,
            beckColor: '#fffc8e'
        };
    },
    created() {
        console.log(this.info.style)
    },
    methods: {
        deleteNote() {
            this.$emit('toDeleteNote')
        },
        saveEdit() {
            this.$emit('toSaveEdit', this.text)
        },
        setBeckColor(e) {
            this.beckColor = e.target.value
            this.$emit('toSetBeckColor', this.beckColor)
        },
        closeEditNote() {
            this.$emit('toCloseEditNote')
        }
    },
    computed: {
    },
    unmounted() { },
};