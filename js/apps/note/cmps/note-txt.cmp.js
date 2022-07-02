export const noteTxt = {
    props:['info'],
    template: `
    <section :style="info.style" value="#fffc8e" class="txt-container">
        <p class="txt-card">{{info.txt}}</p>

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