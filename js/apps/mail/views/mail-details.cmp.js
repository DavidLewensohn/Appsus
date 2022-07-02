// import { mailService } from "../services/mail-service.js";

export default {
    props:['mail'],
    template: `
        <section class="mail-details" v-if="mail"  class="mail-details app-main">
           <div class="detalis-button"><h1>Mail details</h1>
            <button @click="$emit('close')">Back</button></div>
            <p><span>Subject:</span> {{mail.subject}}</p>
            <p><span>Body:</span> {{mail.body}}</p>
            
        </section> 
    `,
    data() {
        return {
            // mail: null
        }
    },
    created() {
        // mailService.get(id).then(mail => this.mail = mail)
    },
    computed: {

    }
}