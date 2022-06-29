// import { router } from "./router.js"
// import  mailApp  from "./apps/mail/views/mail-app.cmp.js"
import  noteApp  from "./apps/note/views/note-app.cmp.js"

import  mailApp  from "./apps/mail/views/mail-app.cmp.js"
// import  keepApp  from "./apps/keep/views/keep-app.cmp.js"
import mailListCmp from "./apps/mail/cmps/mail-list.cmp.js"
import mailPreviewCmp from "./apps/mail/cmps/mail-preview.cmp.js";


const options = {
    template: `
    <!-- <mail-app/> -->
    <note-app/>
    `,
    components: {
        // mailApp,
        noteApp,
    <mail-app/>
    <!-- <keep-app/> -->
    `,
    components: {
        mailApp,
        // mailList,
        // keepApp,
    },
};


const app = Vue.createApp(options)
// app.use(router)
app.mount("#app")
app.component("mail-list",mailListCmp)
app.component("mail-preview",mailPreviewCmp)