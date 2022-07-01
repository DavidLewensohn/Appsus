export const noteTodos = {

    props:['info'],
    template: `
    <section >
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