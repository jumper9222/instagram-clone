import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        image: "https://picsum.photos/id/123/500/500",
        description: "Post 1 description",
        date: new Date().toISOString(),
        likes: 15,
        comments: 5,
    },
    {
        id: 2,
        image: "https://picsum.photos/id/124/500/500",
        description: "Post 2 description",
        date: new Date().toISOString(),
        likes: 30,
        comments: 10,
    },
]

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        createPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                image: action.payload.image,
                description: action.payload.description,
                date: new Date().toISOString(),
                likes: 0,
                comments: 0,
            }
            state.push(newPost);
        },
        updatePost: (state, action) => {
            const index = state.findIndex((post) => post.id === action.payload.id);
            state[index] = action.payload;
        },
        deletePost: (state, action) => {
            const index = state.findIndex((post) => post.id === action.payload.id);
            state.splice(index, 1)
        },
        postComment: (state, action) => {
            const { comment, postId } = action.payload
            const index = state.findIndex((post) => post.id === postId);
            if (state[index]?.userComments) {
                state[index].userComments.push(comment)
            } else {
                state[index] = { ...state[index], userComments: [comment] }
            }
        },
        likePost: (state, action) => {
            const index = state.findIndex((post) => post.id === action.payload);
            state[index].likes += 1
        }

    }
})

export const { createPost, updatePost, deletePost, postComment, likePost } = postsSlice.actions;

export default postsSlice.reducer;