// Action creator, add export keyword for multi func export 
 export const selectSong = () => {
    // Return an action, type is require, optional payload
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};