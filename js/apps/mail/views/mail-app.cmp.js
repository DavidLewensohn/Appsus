import mailList from "../cmps/mail-list.cmp.js";
import mailPreview from "../cmps/mail-preview.cmp.js";
import mailDetails from "./mail-details.cmp.js";
import mailCompose from "./mail-compose.js";
import { mailService } from '../services/mail-service.js';
import mailFilter from "../cmps/mail-filter.cmp.js";
// import mailFilter from '../cmps/mail-filter.cmp.js';
// import mailList from '../cmps/mail-list.cmp.js';
// import { eventBus } from '../services/eventBus-service.js';

export default {
    template: `
    
        <section v-if="mails" class="mail-app"> 
           <mail-filter @filtered="filterMail"/>
          <div class="inbox-sent-compose-list">
             <section class="inbox-sent-compose"> 
    <button v-if="!isHidden" v-on:click="isHidden=true" @click="compose">Compose an Email</button>   
    <button v-on:click="showFrom()">Inbox</button>
    <button v-on:click="showTo()">Sent</button>
    </section>
    <mail-list v-if="fromShow" @removed="removeMail" @selected="selectMail" :mails="mailsForDisplay" :fromShow="fromShow"/>
    <mail-list v-if="toShow" @removed="removeMail" @selected="selectMail" :mails="mailsForDisplay" :toShow="toShow"/>
    </div>
    <mail-compose @saved="saveMail" v-if="composer"  @close="composer=null;isHidden=false" :composer="composer"/>
    <!-- @saved="saveMail" -->
    <mail-details  v-if="selectedMail" @close="selectedMail=null" :mail="selectedMail"/>
           <!-- <mail-filter @filtered="setFilter" />
           <router-link to="/mail/edit">Add new mail</router-link>
           <mail-list :mails="mailsForDisplay" @remove="removeMail"  /> -->
           <!-- <mail-list/>
           <mail-preview/> -->
           
        </section>
    `,
    components: {
        mailList,
        mailPreview,
        mailDetails,
        mailCompose,
        mailFilter,


        // mailFilter,
        // mailList,
    },
    data() {
        return {
            mails: null,
            selectedMail: null,
            composer: null,
            filterBy: null,
            fromShow: true,
            toShow: false,
            isHidden: false,
        };
    },
    created() {
        mailService.query().then(mails => this.mails = mails)
    },
    methods: {
        showFrom() {
            this.fromShow = true
            this.toShow = false
        },
        showTo() {
            this.fromShow = false
            this.toShow = true
        },
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
        filterMail(filterBy) {
            this.filterBy = filterBy;
        },
        compose() {
            this.composer = 1
        },
        selectMail(mail) {
            this.selectedMail = mail
        },
        saveMail(mail){
            this.mails.push(mail)
        }
    },
    computed: {
        mailsForDisplay() {
            if (!this.filterBy) return this.mails;
            console.log(this.filterBy);
            if(this.filterBy.isRead===true) return this.mails.filter(mail =>mail.isRead===false)
            const regex = new RegExp(this.filterBy.subject, 'i');
            return this.mails.filter(mail => regex.test(mail.subject))
            
        }
    },

};
