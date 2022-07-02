export const noteTodos = {

    props:['info'],
    template: `
    <section :style="info.style" class="txt-container">
        <button class="del-btn" @click="deleteNote">🗑️</button>

        
        <textarea v-model="text">{{text}}</textarea>
        <textarea v-model="lines">{{lines}}</textarea>
        <button class="save-button" @click="saveEdit" >✔</button>
        <button class="close-button" @click="closeEditNote" >✘</button>
        <input type="color" value="#fffc8e" class="bck-button" @input="setBeckColor" >

    </section>
`,
    data() {
        return {
            text: this.info.label,
            lines: `${this.info.todos[0].txt}\n${this.info.todos[1].txt}`,
            // lines: this.getLines,
            beckColor: '#fffc8e',
            todos:null,
        };
    },
    created() {
        console.log(this.info.style)
    },
    methods: {
        deleteNote() {
            console.log('del');
            this.$emit('toDeleteNote')
        },
        saveEdit() {
            var lines=this.getLines()
            console.log(lines);
            this.$emit('toSaveEdit', this.text, lines)
        },
        setBeckColor(e) {
            this.beckColor = e.target.value
            this.$emit('toSetBeckColor', this.beckColor)
        },
        closeEditNote() {
            this.$emit('toCloseEditNote')
        },
        getLines(){
            let lines = []
            this.info.todos.forEach(todo => {
                lines.push(todo.txt)
                console.log(lines);
                
            })
            return lines
        }
    },
    computed: {
    },
    unmounted() { },
};