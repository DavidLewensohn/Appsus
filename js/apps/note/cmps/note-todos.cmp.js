export const noteTodos = {

    props:['info'],
    template: `
    <section class="note-todos-container card" >
        <li v-for="todo in info.todos">{{todo.txt}}</li>
    </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};