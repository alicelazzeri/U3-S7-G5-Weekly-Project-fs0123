export const GET_ROCK = "GET_ROCK";
export const GET_POP = "GET_POP";
export const GET_HIP_HOP = "GET_HIP_HOP";
export const GET_SONG = "GET_SONG";
export const GET_SEARCH = "GET_SEARCH";
export const RESET_SEARCH = "RESET_SEARCH";

export const getQueryAction = query => ({ type: GET_SONG, payload: query });
export const resetAction = () => ({ type: RESET_SEARCH, payload: [] });

export const getSearchAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();

        dispatch({ type: GET_SEARCH, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRockAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();

        dispatch({ type: GET_ROCK, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPopAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();

        dispatch({ type: GET_POP, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getHipHopAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();

        dispatch({ type: GET_HIP_HOP, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
