import { createSlice } from "@reduxjs/toolkit";

const getApIUrl = artId => `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`

const initialState = {
    artId: 10205,
    apiData: {}
}

export const dadaSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        loadData: (state, {payLoad}) => {
            state,apiData - payLoad;
        },
        nextImage: state => {
            state.artId++;
        },
        prevImage: state => {
            state.artId--;
        },
      reset: () => {
        return initialState
      }   
    }

}); 

const getApiUrl = artId => `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`

export const fetchData = () => {
    const dataThunk = async (dispatch, getState)=>{
    const StateData = getState();
    const { data } = stateData;
    const { artId} = data;
    const responce = await fetch (getApiUrl(artId));
    const json = await responce.json();
    dispatch(loadData(json));
    }
     return dataThunk
};



export const {
       loadData,
       nextImage,
       prevImage,
       setArtId,
       reset
} = dataSlice.actions;


export default dataSlice.reducer;
