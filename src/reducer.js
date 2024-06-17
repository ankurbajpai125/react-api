const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        isLoading: false,
        nbPages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (currEle) => currEle.objectID !== action.payload
        ),
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
        let nextPage = state.page + 1;
        if(nextPage >= state.nbPages){
            nextPage = 0;
        }
      return {
        ...state,
        page: nextPage,
      };
    case "PREV_PAGE":
        let prevPage = state.page - 1;
        if(prevPage <= 0){
            prevPage = 0;
        }
      return {
        ...state,
        page: prevPage,
      };
  }
  return state;
};

export default reducer;
