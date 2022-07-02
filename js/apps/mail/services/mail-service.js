import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}



const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'] // has any of the labels
}

const MAILS_KEY = 'mails';
// const MAILS_TO_KEY = 'toSend'
_createMails();

export const mailService = {
    query,
    remove,
    save,
    getEmptyMail,
    get
};

function query() {
    return storageService.query(MAILS_KEY)
    // return utilService.loadFromStorage(MAILS_KEY);
}

function remove(mailId) {
    // return Promise.reject('Big Error Badd')
    return storageService.remove(MAILS_KEY, mailId)
}

function get(mailId) {
    return storageService.get(MAILS_KEY, mailId)
}

function save(mail) {
// if(mail.to!='')code=MAILS_TO_KEY
    if (mail.id) return storageService.put(MAILS_KEY, mail)
    else return storageService.post(MAILS_KEY, mail)

    // mail.id = utilService.makeId();
    // const mails = query();
    // mails.push(mail);
    // utilService.saveToStorage(MAILS_KEY, mails);
    // return mail;
}

function getEmptyMail() {
    return { id: '', subject: '', body: '', isRead: false, sentAt: new Date ().toLocaleString(), to: '',from:'' };
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    if (!mails || !mails.length) {
        mails = [];
        mails.push(_createMail('Miss you!', 'Would love to catch up sometimes', new Date (2018, 5, 6, 10, 47).toLocaleString(), '','ronaldo@GOAT'));
        mails.push(_createMail('Payment', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio varius, scelerisque neque fringilla, ullamcorper urna. Maecenas velit risus, malesuada vel pellentesque ac, mattis blandit justo. Pellentesque ut turpis metus. Sed egestas imperdiet orci, et pellentesque urna sodales quis. Pellentesque in justo posuere, posuere ante a, lacinia arcu. Sed laoreet elit ut aliquam auctor. Pellentesque non orci felis. Sed gravida erat a risus scelerisque vestibulum in porttitor eros. Maecenas commodo ut tellus vel luctus. Proin condimentum malesuada mi, vel commodo metus molestie quis. In tincidunt tellus nec felis pellentesque malesuada. Ut non dolor ut metus finibus auctor. Proin non mauris a quam pharetra pellentesque sit amet non justo. Suspendisse non iaculis quam. Proin ultricies placerat nisi nec fringilla.', new Date(2012, 5, 9, 4, 23).toLocaleString(), '','stef@ddd'));
        mails.push(_createMail('Incurance', 'consectetur adipiscing elit. Nunc nec odio varius, scelerisque neque fringilla, ullamcorper urna. Maecenas velit risus, malesuada vel pellentesque ac, mattis blandit justo. Pellentesque ut turpis metus. Sed egestas i', new Date (2022, 0, 2, 9, 45).toLocaleString(), '','lebron@ddd'));
        mails.push(_createMail('Invitation', 'Sed laoreet elit ut aliquam auctor. Pellentesque non orci felis. Sed gravida erat a risus scelerisque vestibulum in porttitor eros. Maecenas commodo ut tellus vel luctus.', new Date(2010, 11, 15, 12, 33).toLocaleString(), '','messi@ddd'));
        mails.push(_createMail('Football', 'In tincidunt tellus nec felis pellentesque malesuada. Ut non dolor ut metus finibus auctor. Proin non mauris a quam pharetra pellentesque sit amet non justo.', new Date  (2016, 9, 12, 19, 12).toLocaleString(), '','zlatan@ddd'));

        utilService.saveToStorage(MAILS_KEY, mails);
    }
    return mails;
}

function _createMail(subject, body, sentAt, to,from) {

    const mail = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt,
        to,
        from
    };
    return mail;
}



