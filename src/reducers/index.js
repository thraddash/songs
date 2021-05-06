import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Hey Brother', duration: '4:23' },
        { title: 'Feel So Close (Nero Remix)', duration: '4:44' },
        { title: 'The Nights', duration: '3:10' },
        { title: 'Waiting For Love', duration: '3:10' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});