export default {
    props: ['mail'],
    template: `
        <!-- <section class="mail-preview"> -->
    <td>{{mail.subject}}</td>
    <td>{{mail.body}}</td>
    <td>{{mail.sentAt}}</td>
    <td>{{mail.from}}</td>
    
        <!-- </section> -->
    `,
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {}
}