import { storageService } from "../../../services/async-storage-service.js"
export const noteService = {
    getNote,
    createNote,
}
const note_KEY = 'noteKey'
const notes = [{
    id: "n101",
    type: "note-txt",
    isPinned: true,
    info: {
        txt: "Fullstack Me Baby!"
    }
},
{
    id: "n102",
    type: "note-img",
    info: {
        url: 'img/matze-bob-I3GV-lG3st0-unsplash.jpg',
        title: "Bobi and Me",
        style: {
            backgroundColor: "#bbb7fa"
        }
    },

},
{
    id: "n103",
    type: "note-todos",
    info: {
        label: "Get my stuff together",
        todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }
        ]
    }
},
{
    id: "n104",
    type: "note-img",
    info: {
        url: 'img/vackground-7K1_uSnNoy4-unsplash.jpg',
        title: "Bobi and Me",
        style: {
            backgroundColor: "#d2fab7"
        }
    },

},
{
    id: "n104",
    type: "note-txt",
    isPinned: true,
    info: {
        txt: "Coding Appsus"
    }
},
{
    id: "n105",
    type: "note-todos",
    info: {
        label: "Get my stuff together",
        todos: [
            { txt: "work meeting", doneAt: null },
            { txt: "go power", doneAt: 187111111 }
        ]
    }
},

]

function getNote() {
    console.log('hi---get-note')
    return storageService.query(note_KEY)
}

function postNote(note) {
    console.log(note)
    return storageService.post(note_KEY, note)
}

function createNote(type, info) {
    return postNote ({ type, info })
}
