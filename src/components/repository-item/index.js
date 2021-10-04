import { Component } from "react";

export default class RepositoryItem extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.linkToRepository = props.linkToRepository;
        this.fullName = props.fullName;
    }
    render() {
        return (
            <div>
                <h2>{ this.name }</h2>
                <h4>full name:</h4>
                <a href={ this.linkToRepository } target="_blank" rel="noreferrer">{ this.fullName } </a>
            </div>
        );
    }
}