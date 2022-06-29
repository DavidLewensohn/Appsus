export default {
    props:['mail'],
    template:`
        <section class="mail-preview">
            <p>Subject: {{mail.subject}}</p>
            <p>Body: {{mail.body}}</p>
        </section>
    `,
    data(){
        return{}
    },
    created(){},
    methods:{},
    computed:{}
}