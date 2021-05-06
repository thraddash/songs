import React, { Component } from 'react';
import { connect } from "react-redux";

// class SongList extends React.Component
class SongList extends Component {
    render() {
        return <div>SongList</div>;
    }
}

//return connect function, envoke SongList
export default connect()(SongList);