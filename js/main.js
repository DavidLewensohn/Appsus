import  noteApp  from "./apps/note/views/note-app.cmp.js"
import appHeader from "./views/header.cmp.js"
import appFooter from "./views/footer.cmp.js"
import { router } from "./router.js"
import  mailApp  from "./apps/mail/views/mail-app.cmp.js"

const options = {
    template: `
    <app-header/>
    <!-- <note-app/>
    <mail-app/> -->
    <router-view/>
    <app-footer/>
    `,
    components: {
        noteApp,
        appHeader,
        appFooter,
        mailApp,

    },
}


const app = Vue.createApp(options)
app.use(router)
app.mount("#app")
