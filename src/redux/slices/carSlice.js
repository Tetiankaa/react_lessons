import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars:[],
    error:null,
    isLoading:null,
    trigger:null,
    carForUpdate:null
}
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) =>{
     try {
         const {data} = await carService.getAll();
         return thunkAPI.fulfillWithValue(data);
     }catch (e) {
        return  thunkAPI.rejectWithValue(e.response.data)
     }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async (car,thunkAPI)=>{
        try {
            await carService.create(car)
        }catch (e) {
          return   thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const update = createAsyncThunk(
    'carSlice/update',
    async ({id,car}, thunkAPI)=>{
        try {
            await carService.updateById(id, car)
        }catch (e) {
           return  thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id},thunkAPI)=>{
        try {
            await carService.deleteById(id);
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        // setCars:(state, action)=>{
        //     state.cars=action.payload
        // }
        setCarForUpdate:(state,action)=>{
            state.carForUpdate=action.payload.car;
        }
    },
    // extraReducers:{
        // [getAll.fulfilled]:(state,action)=>{
        //     state.cars = action.payload;
        //     state.isLoading=false;
        //     state.error = null;
        // },
        // [getAll.rejected]:(state,action)=>{
        //     state.error=action.payload;
        //     state.isLoading=false;
        // },
        // [getAll.pending]:(state)=>{
        //     state.isLoading=true;
        // }
    // }
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                    state.cars = action.payload;
                    // state.isLoading=false;
                    // state.error = null;
            })
            // .addCase(getAll.rejected, (state, action) => {
            //         state.error=action.payload;
            //         state.isLoading=false;
            // })
            // .addCase(getAll.pending,state => {
            //     state.isLoading=true;
            // })
            // .addCase(create.fulfilled,state => {
            //     // state.trigger=!state.trigger;
            //     // state.isLoading=false;
            //     // state.error = null;
            // })
            .addCase(update.fulfilled, state => {
                // state.trigger = !state.trigger;
                state.carForUpdate = null;
            })
            // .addCase(create.rejected,(state, action) => {
            //     state.error=action.payload;
            //     state.isLoading=false;
            // })
            // .addCase(create.pending, state => {
            //     state.isLoading = true;
            // })
            .addMatcher(isFulfilled(getAll,create,update,deleteById), state => {
                state.isLoading=false;
                state.error = null;
            })
            .addMatcher(isRejected(getAll,create,update,deleteById),(state,action) => {
                state.error=action.payload;
                state.isLoading=false;
            })
            .addMatcher(isPending(getAll,create,update,deleteById), state => {
                state.isLoading = true;
            })
            .addMatcher(isFulfilled(create,update,deleteById),state => {
                state.trigger = !state.trigger;
            })
})

const {reducer:carReducer, actions} = carSlice;

const carActions = {...actions, getAll,create, update, deleteById};

export {carActions, carReducer}