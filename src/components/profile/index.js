import React from "react";

import * as S from "./styled";

export default class Profile extends React.Component{
    render(){
        return(
            <S.Wrapper>
                    <S.WrapperUserImage 
                        src="https://avatars.githubusercontent.com/u/24209353?v=4" alt="User Avatar">
                    </S.WrapperUserImage>
                    <S.WrapperInfoUser>

                        <h1>André Aguiar</h1>
                        <S.WrapperUsername>
                            <h3>Username:</h3>
                            <a href="https://github.com/AndrehAguiar"
                            rel="noreferrer"
                            target="_blank">
                                AndrehAguiar
                            </a>
                        </S.WrapperUsername>

                        <S.WrapperStatusCount>
                            <div>
                                <h4>Followers</h4>
                                <span>5</span>
                            </div>
                            <div>
                                <h4>Starreds</h4>
                                <span>5</span>
                            </div>
                            <div>
                                <h4>Followings</h4>
                                <span>5</span>
                            </div>
                        </S.WrapperStatusCount>
                    </S.WrapperInfoUser>
            </S.Wrapper>
        )
    }
}