// Context Creation
// provider
// consumer lengthy remove useContext Hook
// useContext Hook
import React, { useReducer, useEffect } from "react";
import { useContext } from "react";
import reducer from "./reducer";

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};
let API = "https://hn.algolia.com/api/v1/search?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fecthApiData = async (url) => {
    dispatch({type:"SET_LOADING"});
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type:"GET_STORIES",
        payload:{
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (postId) =>{
    dispatch({type:"REMOVE_POST",payload:postId})
  }

  const searchPost = (searchQuery) =>{
      dispatch({type:"SEARCH_POST",payload:searchQuery,})
  }

  const getNextPage = ()=>{
    dispatch({type:"NEXT_PAGE"})
  }

  const getPrevPage = ()=>{
    dispatch({type:"PREV_PAGE"})
  }

  useEffect(() => {
    fecthApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);

  return (
    <AppContext.Provider value={{...state,removePost,searchPost,getNextPage,getPrevPage}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook creation

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
