import  noteApp  from "./apps/note/views/note-app.cmp.js"
import appHeader from "./views/header.cmp.js"
import { router } from "./router.js"
import  mailApp  from "./apps/mail/views/mail-app.cmp.js"

const options = {
    template: `
    <app-header/>
    <!-- <note-app/>
    <mail-app/> -->
    <router-view/>
    `,
    components: {
        noteApp,
        appHeader,
        mailApp,

    },
}


const app = Vue.createApp(options)
app.use(router)
app.mount("#app")
