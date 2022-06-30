import mailList from "../cmps/mail-list.cmp.js";
import mailPreview from "../cmps/mail-preview.cmp.js";
import mailDetails from "./mail-details.cmp.js";
import mailCompose from "./mail-compose.js";
import { mailService } from '../services/mail-service.js';
// import mailFilter from '../cmps/mail-filter.cmp.js';
// import mailList from '../cmps/mail-list.cmp.js';
// import { eventBus } from '../services/eventBus-service.js';

export default {
    template: `
    <section> 
    <button>Inbox</button>
    <button >Sent</button>
    </section>
        <section v-if="mails" class="mail-app">
    <mail-list  @removed="removeMail" @selected="selectMail" :mails="mails"/>
    <mail-compose v-if="composer"  @close="composer=null" :composer="composer"/>
    <!-- @saved="saveMail" -->
    <mail-details  v-if="selectedMail" @close="selectedMail=null" :mail="selectedMail"/>
           <!-- <mail-filter @filtered="setFilter" />
           <router-link to="/mail/edit">Add new mail</router-link>
           <mail-list :mails="mailsForDisplay" @remove="removeMail"  /> -->
           <!-- <mail-list/>
           <mail-preview/> -->
           <button  @click="compose">Compose</button>
        </section>
    `,
    components: {
        mailList,
        mailPreview,
        mailDetails,
        mailCompose,

        // mailFilter,
        // mailList,
    },
    data() {
        return {
            mails: null,
            selectedMail: null,
            composer:null,
            // filterBy: null
        };
    },
    created() {
        mailService.query().then(mails => this.mails = mails)
    },
    methods: {
        removeMail(mailId) {
            console.log('Deleted successfully');
            mailService.remove(mailId).then(() => {
                const idx = this.mails.findIndex((mail) => mail.id === mailId);
                this.mails.splice(idx, 1);
                // eventBus.emit('show-msg', { txt: 'Deleted successfully', type: 'success' });
            })
            // .catch(err => {
            // console.log(err);
            // eventBus.emit('show-msg', { txt: 'Error - try again later', type: 'error' });
            // })
        },
        // setFilter(filterBy) {
        //     this.filterBy = filterBy;
        // }
        compose() {
           this.composer = 1
        },
        selectMail(mail) {
            this.selectedMail = mail
        },
        // saveMail(mail){
        //     this.mails.push(mail)
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
