import React from "react";
import {Header} from "../header/Header";

export class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({news: false})
    }
    render() {
        return (
            <div>
                <h2>News</h2>
                <p>Capucino</p>
                {this.state.news === true ? <News/> : ""}
            </div>
        )
    }
}