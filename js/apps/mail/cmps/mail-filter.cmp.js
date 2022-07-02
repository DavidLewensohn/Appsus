export default {
    template: `
        <section class="mail-filter">
            <h1 class="h">AppMail</h1>
            <label>
            <input class="input-search" @input="filter" type="text" v-model="filterBy.subject" placeholder=" 🔎 Search mail...">
        </label>
        <label>
        <button class="filter-button" v-on:click="filterRead()">Show unread mails</button>
        </label>
    </section>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                isRead: null,
            }
        };
    },
    created() {
      
    },
    mounted() {
        
        // this.$refs.vendorInput.focus()
    },
    methods: {
        filterRead(){
            this.filterBy.isRead=true
            this.$emit('filtered',this.filterBy );
        },
        filter() {
            // console.log(this.isRead);
            this.$emit('filtered',this.filterBy );
        },
        
    }
}