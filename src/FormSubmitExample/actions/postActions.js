import {FETCH_POSTS,NEW_POSTS} from './types';

// export function fetchPosts(){
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type: FETCH_POSTS,
//             payload : posts   
//         }));
//     }
// }

//clean up above code using ES6 syntax
 export const fetchPosts = () =>  dispatch => {
     console.log("calling fetchposts");
            fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload : posts   
        }));
}

export const createPosts = (postData) =>  dispatch => {
    console.log("calling createPosts" , postData);
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(postData)
    }).then(res => res.json())
    .then(post => dispatch({
        type: NEW_POSTS,
        payload : post  
    }));
}


   