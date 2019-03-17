import {createStore,compose} from 'redux';

const initialState ={
    count : 8
};

const reducer = (state=initialState ,action) => {
    console.log('reducer running',action);
    switch (action.type){
       case 'INCREMENT' :
       return Object.assign({},state, { count : state.count +1});
     default :
        return state;
    }
   

}

const store = createStore(reducer,initialState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;
