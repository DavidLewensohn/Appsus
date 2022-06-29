// import mailPreview from './mail-preview.cmp.js'

export default {
    props: ["mails"],
    template: `
          <section class="mail-list">
        <table>
<tr><th>subject</th><th>body</th><th>sentAt</th>
<th>from</th><th colspan="2">actions</th></tr>
<tr v-for="mail in mails" :key="mail.id" class="mail-preview">
    <mail-preview :mail="mail"/>
    <td class="actions">
        <button>X</button>
        <button>Details</button></td>
  </tr>
</table>
</section>
        <!-- <section class="mail-list">
            <ul>
                <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" >
                   <mail-preview :mail="mail" />
                   <div class="actions">
                       <button @click="remove(mail.id)">X</button>
                     
                    </div>
                </li>
            </ul>
        </section> -->
    `,
    components: {
        // mailPreview
    },
    methods: {
        // remove(id) {
        //     this.$emit('remove', id);
        // },
        // select(mail) {
        //     this.$emit('selected', mail);
        // }
    },
    computed: {}
}