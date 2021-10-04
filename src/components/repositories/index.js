import { Component } from "react";
import RepositoryItem from "../repository-item";
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

                <S.WrapperTabPanel>
                    <RepositoryItem
                        name="REPOSITORY"
                        linkToRepository="#"
                        fullName="user/app-repository"
                        />
                </S.WrapperTabPanel>

                <S.WrapperTabPanel>
                    <RepositoryItem
                        name="REPOSITORY 2"
                        linkToRepository="#"
                        fullName="user/app-repository2"
                        />
                </S.WrapperTabPanel>
                
            </S.WrapperTabs>
        )
    }
}