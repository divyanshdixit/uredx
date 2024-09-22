import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error:'',
    loading: false,
    data: [] // array or object
}

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers:{
        setLoading: (state, action) => {
            state.loading = action.payload
        },

        setData: (state, action) => {
            state.data = action.payload
        },
    }
})

export const {setLoading, setData} = exampleSlice.actions;
export default exampleSlice.reducer