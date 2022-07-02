export default {
    props: ['mail','from','to'],
    template: ` 
        <!-- <section class="mail-preview"> -->

    <td>{{mail.subject}}</td>
    <td v-if:="sortMail(mail)">{{this.cut}}</td>
    <td>{{mail.sentAt}}</td>
    <td v-if:="mail.from">{{mail.from}}</td>
    <td v-if:="mail.to">{{mail.to}}</td>
    <td v-if:="mail.isRead">yes</td>
    <td v-else class="noRead">no</td>
    
        <!-- </section> -->
    `,
    data() {
        return {
          cut: null
        }
    },
   
    created() { },
    methods: {
        sortMail(mail) {
            this.cut=mail.body.substring(0, 10)+'...';
            console.log(this.cut);
            return true
        },

    },
    computed: {}
}