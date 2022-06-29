export default {
    template: `
        <section class="mail-filter">
            <label>
            Search
            <input ref="vendorInput" @input="setFilter" type="text" v-model="filterBy.vendor" placeholder="Search...">
            </label>
        </section>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                body: ''
            }
        };
    },
    created() {
      
    },
    mounted() {
        
        this.$refs.vendorInput.focus()
    },
    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy });
        }
    }
}