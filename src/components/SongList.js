import React, { Component } from 'react';
import { connect } from "react-redux";

// class SongList extends React.Component
class SongList extends Component {
    render() {
        // this.props === { songs: state.songs }
        console.log(this.props);
        return <div>SongList</div>;
    }
}

// get state from Store, pass to mapStateToProp function to connect component
const mapStateToProps = (state) => {

    //redux way of getting data to props, similar to this.props === { songs: state.songs }    
    return { songs: state.songs };
}

//return connect function, envoke SongList
export default connect(mapStateToProps)(SongList);