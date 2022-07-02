import { mailService } from "../services/mail-service.js";
export default {
    props: ["composer"],
 template: `

<section class="mail-compose">
   <div class="compose-close">
           <h1>Compose</h1>
           <button @click="$emit('close')">Close</button></div>
            <form class="inputs-send" @submit.prevent="save">
                <input class="input-to" type="mail" v-model="mailToCompose.to" placeholder="To">
                <input class="input-subject" type="text" v-model="mailToCompose.subject" placeholder="Subject">
                <div class="body-send">  <textarea name="input-body" cols="40" rows="5" v-model="mailToCompose.body" placeholder="Body"></textarea>
                <button type="submit">Send</button>
               </div>
                <!-- <input class="input-body" type="text" v-model="mailToCompose.body" placeholder="Body"> -->

                <!-- <button>Close</button> -->

</form>

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
       mailService.save(this.mailToCompose).then(mail => {
        this.$emit("saved",mail);
    })
    this.mailToCompose=mailService.getEmptyMail()
}
},
computed: {},
unmounted() {},
};