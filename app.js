const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes')
const fs=require('fs')

//Customize yargs version
yargs.version("69.0.0")

//yargs add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Holds the description of the list",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: { title: {
        describe: 'Take title of note to be removed',
        demandOption: true,
        type: 'string'
    } },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})


yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: ()=> {
        notes.listNotes()
    }
})


yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: { title:{
        describe: 'Reading Note Title',
        demandOption: true,
                type: 'string'
    } },
    handler: (argv) =>{
        notes.readNotes(argv.title)
    }
})



yargs.parse()