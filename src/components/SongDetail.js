import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Artist: { song.artist }
                <br />
                Title: { song.title }
                <br />
                Duration: {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    //customizing  mapStateToProps object key
    //return { mySelectedSong: state.selectedSong }
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);