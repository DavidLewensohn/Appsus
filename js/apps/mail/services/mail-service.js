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
    if (mail.id) return storageService.put(MAILS_KEY, mail)
    else return storageService.post(MAILS_KEY, mail)

    // mail.id = utilService.makeId();
    // const mails = query();
    // mails.push(mail);
    // utilService.saveToStorage(MAILS_KEY, mails);
    // return mail;
}

function getEmptyMail() {
    return { id: '', subject: '', body: '', isRead: false, sentAt: 0, to: '' };
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    if (!mails || !mails.length) {
        mails = [];
        mails.push(_createMail('Miss you!', 'Would love to catch up sometimes', 1551133930594, 'momo@momo.com'));
        mails.push(_createMail('fg5gg', 'ff', 5435435343453, 'hhh@hhh.com'));
        mails.push(_createMail('r4444r', 'gg', 8282882828588, 'jjj@jjj.com'));
        mails.push(_createMail('ghgffgr', 'hhh', 1212858585222, 'ggg@ggg.com'));
        mails.push(_createMail('ghhghg', 'rrr', 9645353528555, 'fff@ddd.com'));

        utilService.saveToStorage(MAILS_KEY, mails);
    }
    return mails;
}

function _createMail(subject, body, sentAt, to) {

    const mail = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt,
        to
    };
    return mail;
}



