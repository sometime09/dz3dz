import React, {Component} from "react";
import {News} from "../../components/news/News";
import {Header} from "../../components/header/Header";


export class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state = {news: false}
        this.openNews = this.openNews.bind(this)
    }

    openNews(){
        this.setState({news: !this.state.news})
    }

    render() {
        return(
            <div>
                <h2>MainPage</h2>
                <Header/>
                {this.state.news === true ? <News/> : ""}
                <button onClick={this.openNews} >click</button>
            </div>

        )
    }
}