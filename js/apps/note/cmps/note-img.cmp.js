export const noteImg = {
    props:['info'],
    template: `
    <section :style="info.style" >
        <h3 class="img-title">{{info.title}}</h3>
        <img class="todoImg" :src="info.url"  alt="img">
    </section>
`,
    data() {
        return {};
    },
    created() { 
        console.log(this.info.style)
    },
    methods: {},
    computed: {},
    unmounted() { },
};