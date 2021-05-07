import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Hey Brother', artist: 'Avicii', duration: '4:23' },
        { title: 'Feel So Close (Nero Remix)', artist: 'Calvin Harris', duration: '4:44' },
        { title: 'The Nights', artist: 'Avicii', duration: '3:10' },
        { title: 'Waiting For Love', artist: 'Avicii', duration: '3:10' }
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