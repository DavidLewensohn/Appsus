export const noteImg = {
    props:['info'],
    template: `
    <section :style="info.style" >
    <button @click="deleteNote">delete</button>
    <input type="text" class="img-input" @input="imgUrl" v-model="url">
        <textarea v-model="text">{{text}}</textarea>
        <img class="todoImg" :src="info.url"  alt="img">



        <button class="save-button" @click="saveEdit" >✔</button>
        <button class="close-button" @click="closeEditNote" >✘</button>
        <input type="color" value="#fffc8e" class="bck-button" @input="setBeckColor" >
    </section>
`,
    data() {
        return {
            text:this.info.title,
            url:this.info.url || ' ',
            beckColor: '#fffc8e'
        };
    },
    created() { 
        console.log(this.info.style)
    },
    methods: {
        deleteNote(){
            this.$emit('toDeleteNote')
        },
        saveEdit(){
            this.$emit('toSaveEdit', this.text)
        },
        setBeckColor(e){
            this.beckColor = e.target.value
            this.$emit('toSetBeckColor', this.beckColor)
        },
        closeEditNote(){
            this.$emit('toCloseEditNote' )
        }
    },
    computed: {
        imgUrl(){
            console.log(this.url)
            this.$emit('toImgUrl', this.url)
        },

    },
    unmounted() { },
};