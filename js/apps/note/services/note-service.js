import { storageService } from "../../../services/async-storage-service.js"
export const noteService = {
    getNotes,
    createNote,
    getNote,
    updateNote,
    removeNote,
}

const note_KEY = 'noteKey'
const notes = [{
    id: "n101",
    type: "note-txt",
    isPinned: true,
    info: {
        txt: "Fullstack Me Baby!",
        style: {
            backgroundColor: "#bbb7fa"
        }
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
        style: {
            backgroundColor: "#bbb7fa"
        },
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
        title: "lassical Latin literature from",
        style: {
            backgroundColor: '#fffc8e'
        }
    },

},
{
    id: "n105",
    type: "note-txt",
    isPinned: true,
    info: {
        txt: "Coding Appsus ndoubtable source",
        style: {
            backgroundColor: "#fffc8e"
        }
    }
},
{
    id: "n106",
    type: "note-todos",
    info: {
        label: "Get my stuff together",
        style: {
            backgroundColor: "#bbb7fa"
        },
        todos: [
            { txt: "work meeting", doneAt: null },
            { txt: "go power", doneAt: 187111111 }
        ]
    }
},
{
    id: "n107",
    type: "note-txt",
    isPinned: true,
    info: {
        txt: "Fullstack Me Baby!",
        style: {
            backgroundColor: "#bbb7fa"
        }
    }
},
{
    id: "n108",
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
    id: "n109",
    type: "note-todos",
    info: {
        label: "Get my stuff together",
        style: {
            backgroundColor: "#bbb7fa"
        },
        todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }
        ]
    }
},
{
    id: "n110",
    type: "note-img",
    info: {
        url: 'img/vackground-7K1_uSnNoy4-unsplash.jpg',
        title: "lassical Latin literature from",
        style: {
            backgroundColor: '#fffc8e'
        }
    },

},
{
    id: "n111",
    type: "note-txt",
    isPinned: true,
    info: {
        txt: "Coding Appsus ndoubtable source",
        style: {
            backgroundColor: "#fffc8e"
        }
    }
},
{
    id: "n112",
    type: "note-todos",
    info: {
        label: "Get my stuff together",
        style: {
            backgroundColor: "#bbb7fa"
        },
        todos: [
            { txt: "work meeting", doneAt: null },
            { txt: "go power", doneAt: 187111111 }
        ]
    }
},
{
    id: "n113",
    type: "note-txt",
    isPinned: true,
    info: {
        txt: "Fullstack Me Baby!",
        style: {
            backgroundColor: "#bbb7fa"
        }
    }
},
{
    id: "n114",
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
    id: "n115",
    type: "note-todos",
    info: {
        label: "Get my stuff together",
        style: {
            backgroundColor: "#bbb7fa"
        },
        todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }
        ]
    }
},
{
    id: "n116",
    type: "note-img",
    info: {
        url: 'img/vackground-7K1_uSnNoy4-unsplash.jpg',
        title: "lassical Latin literature from",
        style: {
            backgroundColor: '#fffc8e'
        }
    },

},
{
    id: "n117",
    type: "note-txt",
    isPinned: true,
    info: {
        txt: "Coding Appsus ndoubtable source",
        style: {
            backgroundColor: "#fffc8e"
        }
    }
},
{
    id: "n118",
    type: "note-todos",
    info: {
        label: "Get my stuff together",
        style: {
            backgroundColor: "#bbb7fa"
        },
        todos: [
            { txt: "work meeting", doneAt: null },
            { txt: "go power", doneAt: 187111111 }
        ]
    }
},

]

function _save(entityType, entities) {
    console.log('saving:', entities)
    localStorage.setItem(entityType, JSON.stringify(entities))
}
// _save(note_KEY, notes)

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) 
    if (!entities || !length.entities){
        _save(note_KEY, notes)
        entities = notes
    }
    return Promise.resolve(entities);
}

function getNotes() {
    console.log('hi---get-note')
    return query(note_KEY)


}



function removeNote(note){
    console.log('note for delte:', note);
    storageService.remove(note_KEY, note)
}
function updateNote(note){
    console.log('update', note);
    return storageService.put(note_KEY, note)
}

function getNote(id){
    console.log(id);
    return storageService.get(note_KEY, id)
}



function postNote(note) {
    console.log(note)
    return storageService.post(note_KEY, note)
}

function createNote(type, info) {
    return postNote ({ type, info })
}
