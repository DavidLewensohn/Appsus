import { mailService } from "../services/mail-service.js";
export default {
    props: ["composer"],
 template: `

<section class="mail-compose">
           <h1>Compose</h1>
            <form @submit.prevent="save">
                <input type="mail" v-model="mailToCompose.to" placeholder="To">
                <input type="text" v-model="mailToCompose.subject" placeholder="Subject">
                <input type="text" v-model="mailToCompose.body" placeholder="Body">
                <button type="submit">Send</button>

                <!-- <button>Close</button> -->

</form>
<button @click="$emit('close')">Close</button>
        </section>

`,
data() {
return {
    mailToCompose: mailService.getEmptyMail(),
};
},
created() {},
methods: {
    save(){
        if(!this.mailToCompose.body||!this.mailToCompose.to) return
    //    const mail =
       mailService.save(this.mailToCompose)
        // this.$emit("saved",mail)
    }
},
computed: {},
unmounted() {},
};