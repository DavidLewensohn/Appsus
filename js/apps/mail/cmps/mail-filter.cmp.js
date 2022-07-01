export default {
    template: `
        <section class="mail-filter">
            <h1>Filter:</h1>
            <label>
            By Search:
            <input @input="filter" type="text" v-model="filterBy.subject" placeholder="Search...">
            By Unread:
            <button v-on:click="filterRead()">Show Unread</button>
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