import React, { Component } from 'react';
import { connect } from "react-redux";

// class SongList extends React.Component
class SongList extends Component {
    render() {
        return <div>SongList</div>;
    }
}

// get state from Store, pass to mapStateToProp function to connect component
const mapStateToProps = (state) => {
    console.log(state);

    return state;
}

//return connect function, envoke SongList
export default connect(mapStateToProps)(SongList);