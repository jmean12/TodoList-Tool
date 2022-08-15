import styled from "@emotion/styled";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginModalControl } from '../redux/store/login';

export default function Modal({ createUser, UserInfoHandler, nickname }:any) {
  const dispatch = useDispatch();
  const loginInfo = useSelector((state:any) => (state.login.onModal));

  useEffect(() => {
	console.log(loginInfo);
  });
  
	return (
		<ModalContainer>
			<Wrapper>
				<Header>
					<div>Login</div>
				</Header>
				<Body>
					<Contents>
						<NameContainer>
							<input placeholder={"닉네임을 입력하세요"}
							       onChange={UserInfoHandler}
							       value={nickname}	/>
						</NameContainer>
					</Contents>
				</Body>
				<Footer>
					<LoginButtonContainer>
						<button onClick={createUser}>Submit</button>
					</LoginButtonContainer>
					<UnLoginButton>
						<button onClick={() => dispatch(LoginModalControl())}>비로그인으로 이용하기</button>
					</UnLoginButton>
				</Footer>
			</Wrapper>
		</ModalContainer>
	);
}

const ModalContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
  box-shadow : rgba(1,1,1,0.5) 0 0 0 9999px;
	z-index: 100;
	border-radius: 12px;
`;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	width: 300px;
	height: 300px;
	background: white;
	border-radius: 12px;
	padding: 20px;
`;

const Header = styled.header`
	font-size: 20px;
	font-weight: bold;
	padding: 20px 20px 5px 20px;
`;

const Body = styled.div`
	
`;

const Contents = styled.div`
	padding: 20px;
	
	input {
		margin-top: 20px;
		width: 80%;
		height: 20px;
		padding: 10px;
		border: none;
		border-bottom: solid 0.5px #868e96;
	}
`;

const NameContainer = styled.div``;

const Footer = styled.div`
	padding: 12px;
`;

const LoginButtonContainer = styled.div`
  button {
    padding: 8px;
    width: 100px;
    border: none;
    color: #FFFFFF;
    background: #38d9a9;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
  }
  button:hover {
    font-weight: bold;
	  text-decoration-line: underline;
  }
`;

const UnLoginButton = styled.div`
	button {
		background: white;
		color: #1c7ed6;
		border: none;
		margin-top: 20px;
		cursor: pointer;
	}
	button:hover {
		text-decoration-line: underline;
	}
`;
