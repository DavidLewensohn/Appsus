import mailApp from "../js/apps/mail/views/mail-app.cmp.js"
import noteApp from "../js/apps/note/views/note-app.cmp.js"

const routes = [

    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/note',
        component: noteApp
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})
