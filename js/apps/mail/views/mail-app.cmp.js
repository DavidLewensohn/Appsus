
import { mailService } from '../services/mail-service.js';
// import mailFilter from '../cmps/mail-filter.cmp.js';
// import mailList from '../cmps/mail-list.cmp.js';
// import { eventBus } from '../services/eventBus-service.js';

export default {
    template: `
        <section v-if="mails" class="mail-app">
    <mail-list :mails="mails"/>
           <!-- <mail-filter @filtered="setFilter" />
           <router-link to="/mail/edit">Add new mail</router-link>
           <mail-list :mails="mailsForDisplay" @remove="removeMail"  /> -->
        </section>
    `,
    components: {
        // mailFilter,
        // mailList,
    },
    data() {
        return {
            mails: null,
            // filterBy: null
        };
    },
    created() {
        mailService.query().then(mails => this.mails = mails)
    },
    methods: {
        // removeMail(id) {
        //     mailService.remove(id).then(() => {
        //         console.log('Deleted successfully');
        //         const idx = this.mails.findIndex((mail) => mail.id === id);
        //         this.mails.splice(idx, 1);
        //         eventBus.emit('show-msg', { txt: 'Deleted successfully', type: 'success' });
        //     }).catch(err => {
        //         console.log(err);
        //         eventBus.emit('show-msg', { txt: 'Error - try again later', type: 'error' });
        //     })
        // },
        // setFilter(filterBy) {
        //     this.filterBy = filterBy;
        // }
    },
    computed: {
        // mailsForDisplay() {
        //     if (!this.filterBy) return this.mails;
        //     const regex = new RegExp(this.filterBy.vendor, 'i');
        //     return this.mails.filter(mail => regex.test(mail.vendor));
        // }
    },
};
