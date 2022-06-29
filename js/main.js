// import { router } from "./router.js"
// import  mailApp  from "./apps/mail/views/mail-app.cmp.js"
import  noteApp  from "./apps/note/views/note-app.cmp.js"



const options = {
    template: `
    <!-- <mail-app/> -->
    <note-app/>
    `,
    components: {
        // mailApp,
        noteApp,
    },
};


const app = Vue.createApp(options)
// app.use(router)
app.mount("#app")