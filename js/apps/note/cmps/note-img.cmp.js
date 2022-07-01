export const noteImg = {
    props:['info'],
    template: `
    <section :style="info.style" >
        <h3>{{info.title}}</h3>
        <img class="todoImg" :src="info.url"  alt="img">
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