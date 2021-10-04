import { Component } from "react";
import * as S from "./styled"

export default class Layout extends Component{

    constructor(props){
        super(props);
        this.children = props.children;
    }

    render(){
        return (
            <S.WrapperLayout>
                <header>Header</header>
                { this.children }
            </S.WrapperLayout>
        )
    }
}