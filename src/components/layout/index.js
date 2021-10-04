import React from "react";
import * as S from "./styled"

class Layout extends React.Component{

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

export default Layout;