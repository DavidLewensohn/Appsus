import { mailService } from "../services/mail-service.js";

export default {
    template: `
        <section v-if="mail"  class="mail-details app-main">
            <h4>Mail details</h4>
            <p>Subject: {{mail.subject}}</p>
            <p>Body: {{mail.body}}</p>
            <button @click="$emit('close')">X</button>
        </section>
    `,
    data() {
        return {
            mail: null
        }
    },
    created() {
        mailService.get(id).then(mail => this.mail = mail)
    },
    computed: {

    }
}