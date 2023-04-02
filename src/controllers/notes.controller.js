const NoteModel = require('../models/notes.js')


const createNote = async (req, res) => {
    const { title, description } = req.body
    const data = {
        title,
        description,
        state: true
    }
    try {
        const newNote = new NoteModel(data);
        await newNote.save();
        return res.status(200).json({ message: 'Note created', status: true })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const creteNoteSocket = async (data, res) => {
    try {
        const newNote = new NoteModel(data);
        await newNote.save();
        console.log(newNote)
        return newNote._id;
    } catch (error) {
        return console.log(error)
    }
}



const findByIdNote = async (id) => {
    try {
        const findIdNote = await NoteModel.findById(id);
        return findIdNote
    } catch (error) {
        res.status(400).json({ error })
    }
}

const deleteIdNote = async (id) => {
    try {
        await NoteModel.findByIdAndUpdate({ _id: Object.values(id) }, { state: false })
        return true
    } catch (error) {
        console.log(error)
    }
}


const findNote = async (req, res) => {
    const { id } = req.query;
    try {
        const findIdNote = await NoteModel.findById(id);
        return res.status(200).json({ message: findIdNote, status: true })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const allNotes = async () => {
    try {
        const findIdNote = await NoteModel.find({ state: true });
        return findIdNote;
    } catch (error) {
        return error
    }
}

const updateNoteId = async (data) => {
    const {id,title,description}=data;
    const body={title,description}
    try {
        await NoteModel.findByIdAndUpdate(id, body);
        return true;
    } catch (error) {
        console.log(error)
    }
}

const updateNote = async (req, res) => {
    const { id } = req.query;
    const { body } = req;
    try {
        await NoteModel.findByIdAndUpdate(id, body);
        return res.status(200).json({ message: 'Note update', status: true })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const deleteNote = async (req, res) => {
    const { id } = req.query;
    console.log(id)
    try {
        const deleteIdNote = await NoteModel.findByIdAndUpdate(id, { state: false })
        console.log(deleteIdNote)
        return res.status(200).json({ message: 'Note delete', status: true, deleteIdNote })
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = { createNote, findNote, updateNote, deleteNote, creteNoteSocket, allNotes, findByIdNote, deleteIdNote, updateNoteId }