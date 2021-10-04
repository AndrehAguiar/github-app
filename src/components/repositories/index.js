import React, { Component } from "react";
import * as S from "./styled"

export default class Repositories extends Component {

    render(){
        return(
            <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
            >
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>

                <S.WrapperTabPanel>panel Repositories</S.WrapperTabPanel>
                <S.WrapperTabPanel>panel Starred</S.WrapperTabPanel>
                
            </S.WrapperTabs>
        )
    }
}