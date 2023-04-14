const {createSlice, createAsyncThunk}  = require('@reduxjs/toolkit')
const { default: axios } = require('axios')




const initialState = {
    loading: false,
    post: [],
    error:""
}


// asyn thunk

const fetchPost = createAsyncThunk("post/fetchPosts", async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');

    const data  = await res.data;
    return data;
}) 

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducer: (builder) => {
        builder.addCase(fetchPost.pending, (state, action)=>{
            state.loading = true,
            state.error = ""
        })

        builder.addCase(fetchPost.fulfilled, (state, action)=>{
            state.loading = false,
            state.post = action.payload,
            state.error = ""
        })
        builder.addCase(fetchPost.rejected, (state, action)=>{
            state.loading = false,
            state.post = [],
            state.error = action.error.message
        })
    }
})


module.exports = postSlice.reducer;
module.exports.fetchPost = fetchPost;