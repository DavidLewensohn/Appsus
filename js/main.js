import { router } from "./router.js"
import { mailApp } from "./apps/mail/views/mail-app.cmp.js"
import { keepApp } from "./apps/keep/views/keep-app.cmp.js"



const options = {
    template: `
    <!-- <mail-app/> -->
    <keep-app/>
    `,
    components: {
        mailApp,
        keepApp,
    },
};


const app = Vue.createApp(options)
// app.use(router)
app.mount("#app")