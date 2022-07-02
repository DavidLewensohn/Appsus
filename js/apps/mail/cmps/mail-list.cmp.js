import mailPreview from './mail-preview.cmp.js'

export default {
    props: ['mails','fromShow','toShow'],
    template: `
          <section v-if="fromShow" class="mail-list">
        <table >
<tr><th>subject</th><th>body</th><th>sentAt</th>
<th>from</th><th>is read</th><th colspan="2">actions</th></tr><tbody>
<tr @click="select(mail)" v-for="mail in mails"  :key="mail.id" class="mail-preview">
<!-- :class="{'tr-bold': activeTab === 1}" ;activeTab=1 -->
    <mail-preview v-if="from(mail.from)" :mail="mail"/>
    <td v-if="from(mail.from)" class="actions">
        <button  @click="remove(mail.id)"><img src="img/1.png"></button>
        </td>
        </tr ></tbody>
</table>
</section>

<section v-else class="mail-list">
<table>
<tr><th>subject</th><th>body</th><th>sentAt</th>
<th>to</th><th>is read</th><th colspan="2">actions</th></tr><tbody>
<tr @click="select(mail)" v-for="mail in mails"  :key="mail.id" class="mail-preview">
    <mail-preview v-if="from(mail.to)" :mail="mail"/>
    <td v-if="from(mail.to)" class="actions">
        <button  @click="remove(mail.id)"><img src="img/1.png"></button>
        </td>
  </tr></tbody>
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
      data() {
        return {
            activeTab:0,
        };
    },
    components: {
        mailPreview
    },
    methods: {

        remove(mailId) {
            this.$emit('removed', mailId);
        },
        select(mail) {
            this.$emit('selected', mail);
            mail.isRead=true

            console.log(mail);
        },
        from(from){
if(from==='') return false
else return true
        }
       
    },
    computed: {}
}