const fs=require('fs')
const chalk = require('chalk')

const getNotes= function () {
    return "Here is your note"
}

const addNote=(title,body)=> {
    const notes=loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title )

    if(!duplicateNote)
    {
        

    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log('New Note added!')
} else {
    console.log('Note title taken!')
}
}

const removeNote = (title)=> {
    const notes=loadNotes()
    const removetitle=notes.filter((x)=>x.title !== title)
    if (removetitle.length===notes.length) {
        console.log(chalk.bgRed("Note Not Found!"))
    }
    else {
        console.log(chalk.bgGreen('Note Removed!'))
    }
        saveNotes(removetitle)

}

const saveNotes= (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=> {
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes =() => {
    console.log(chalk.green.inverse('Your Notes:-'))
    notes = loadNotes()
    notes.forEach((note) => console.log(note.title))
}

const readNotes = (title) => {
    const notes=loadNotes()
    const theNote=notes.find((note)=>note.title === title)
    if(theNote) {
    console.log(chalk.green.italic.bold(theNote.title))
    console.log((theNote.body))
    }
    else {
        console.log(chalk.bgRed('Note not Found!'))
    }
} 

module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}