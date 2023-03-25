import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: [{
        id: 1,
       task: "estudiar",
       complete: false,
    }],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)  
        },
        editTask: (state, action) => {
            const taksToEdit = state.find(task => task.id == action.payload.id)
            console.log(taksToEdit)
            if (taksToEdit) {
                taksToEdit.task = action.payload.task
            }
            console.log(taksToEdit)
        },

        deleteTask: (state, action) => {
            const taksToDelete = state.find(task => task.id === action.payload)
            if (taksToDelete) {
                state.splice(state.indexOf(taksToDelete), 1)
            } 
        },
        completeTask: (state, action) => {
            const taksToEdit = state.find(task => task.id === action.payload)
            if (taksToEdit) {
                taksToEdit.complete = !taksToEdit.complete
            }
        }
    }
})

export const { addTask, editTask, deleteTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;