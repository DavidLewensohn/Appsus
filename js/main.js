// import  noteApp  from "./apps/note/views/note-app.cmp.js"
// import { router } from "./router.js"
import  mailApp  from "./apps/mail/views/mail-app.cmp.js"

const options = {
    template: `

    <!-- <note-app/> -->
    <mail-app/>
    `,
    components: {
        // noteApp,
        mailApp,

    },
}


const app = Vue.createApp(options)
// app.use(router)
app.mount("#app")
