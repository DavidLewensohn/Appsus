export default {
    props: ['mail','from','to'],
    template: ` 
        <!-- <section class="mail-preview"> -->

    <td>{{mail.subject}}</td>
    <td>{{mail.body}}</td>
    <td>{{mail.sentAt}}</td>
    <td>{{mail.from}}</td>
    <td>{{mail.to}}</td>
    <td>{{mail.isRead}}</td>
    
        <!-- </section> -->
    `,
    data() {
        return {
           
        }
    },
    created() { },
    methods: {


    },
    computed: {}
}