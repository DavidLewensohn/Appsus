export const noteTodos = {

    props:['info'],
    template: `
    <section :style="info.style" class="txt-container">
        <h5>{{info.label}}</h5>
        <li v-for="todo in info.todos">{{todo.txt}}</li>
    </section>
`,
    data() {
        return {};
    },
    created() { 
        console.log(this.info);
    },
    methods: {},
    computed: {},
    unmounted() { },
};