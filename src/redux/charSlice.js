import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState ={
    data:[],
    loading:false,
    error:"",
    filterChar:"",
};

export const fetchRick = createAsyncThunk('fetchRick',async()=>{
   const response = await axios.get('https://rickandmortyapi.com/api/character')
   return response.data.results
})

const charSlice = createSlice({
    name:"rick",
    initialState,
    reducers:{
        setFilterChar:(state,action)=>{
            state.filterChar=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRick.pending,(state,action)=>{
            state.loading=true;
            state.error=""
        })
        builder.addCase(fetchRick.fulfilled,(state,action)=>{
            state.data = action.payload
            state.loading=false;
        })
        builder.addCase(fetchRick.rejected,(state,action)=>{
            state.loading=false;
            state.error="Error Fetching Rick and Morty Data"
        })
    }
})


export const { setFilterChar } = charSlice.actions;

export default charSlice.reducer;