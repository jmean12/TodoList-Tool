import './App.css';
import styled from "@emotion/styled";
import Modal from "./components/Modal";
import React, { useCallback, useEffect, useState } from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {createTodos,deleteTodo} from "./redux/store/todolist";
import { onDarkMode,onWhiteMode } from "./redux/store/mode";
import { LoginModalControl } from './redux/store/login';

function App() {
  const [memoInput, setMemoInput] = useState<Memo>({ id: 1,  memo: '' });
  const [minimal, setMinimal] = useState<boolean>(false);
  const [userinfo, setUserInfo] = useState<UserInfo>({ nickname:'', password:'' });
  const [userList, setUserList] = useState<UserInfo[]>([]);
  const dispatch = useDispatch();

  const todolist:any = useSelector((state:any) => state.todo.todos, shallowEqual);
  const modelist:any = useSelector((state:any) => state.mode, shallowEqual)
  const loginModal:any = useSelector((state:any) => (state.login.onModal), shallowEqual);

  const { memo } = memoInput;
  const { nickname, password } = userinfo;
  const todays = new Date();

  const memoHandler = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setMemoInput({
      ...memoInput,
      memo: e.target.value,
    });
  },[memoInput])

  const UserInfoHandler = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
      setUserInfo({
      ...userinfo,
      nickname: value,
    });
  },[userinfo])

  const createToolkitMemo = (value:any) => {
    if(memo.length > 0) {
      dispatch(createTodos(value));
      setMemoInput({...memoInput, memo: ""});
    };
  };

  const createUser = () => {
    const Users : UserInfo = { password , nickname }
    setUserList(userList.concat(Users));
    setUserInfo({...userinfo, nickname:'', password:''});
  };

  const deleteButton = (id:number) => {
    dispatch(deleteTodo(id))
  };

  const onEnterKey = (e:any) => {
    return e.key === 'Enter' && memo.length > 0 ? createToolkitMemo(memoInput) : null
  };

  const getTodayDate = () => {
    return `${todays.getFullYear()}년 ${todays.getMonth() + 1}월 ${todays.getDate()}일`
  };

  const onMinimal = () => {
    return !minimal ? setMinimal(true) : setMinimal(false);
  };

  return (
    <div className="App"
         style={{ background: modelist.darkMode? '#212529' : 'white' }}>

      <ButtonContainer>
        { !modelist.darkMode ?
          <button onClick={()=> dispatch(onDarkMode())}>dark</button> :
          <button onClick={()=> dispatch(onWhiteMode())}>white</button>
        }
        <button onClick={onMinimal}>mini</button>
        <button onClick={() => dispatch(LoginModalControl())}>
          { userList.length > 0 ? 'logout' : 'login' }
        </button>
      </ButtonContainer>
      <Container>
        <Wrapper darkMode={modelist.darkMode} minimal={minimal}>
            <Header>
              <HeaderContents>
                <Items>
                  {getTodayDate()}
                </Items>
                <Items>
                  Name : { userList.length > 0 ? userList[0].nickname : "" }
                </Items>
              </HeaderContents>
            </Header>
          <Body>
            { todolist.map((ele:any) => {
              return (
                <MemoWrapper key={ele.id}>
                  <LeftSide>{ele.memo}</LeftSide>
                  <RightSide>
                    <button onClick={()=> deleteButton(ele.id)}>
                      delete
                    </button>
                  </RightSide>
                </MemoWrapper>
              );
            })}
          </Body>
          <Footer darkMode={modelist.darkMode} onKeyPress={onEnterKey}>
            <input placeholder="할 일을 입력하세요."
                   onChange={memoHandler} value={memo} />
            <button onClick={()=>createToolkitMemo(memoInput)}>Todo</button>
          </Footer>
        </Wrapper>
      </Container>
      { loginModal && ( <Modal UserInfoHandler={UserInfoHandler}
                                nickname={nickname}
                                password={password}                            
                                createUser={createUser} />
                  )}
    </div>
  )
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 10rem;
  padding-top: 2rem;
  button {
    border: none;
    width: 60px;
    height: 30px;
    border-radius: 12px;
    cursor: pointer;
    & {
      margin-right: 10px;
    }
    &:hover {
      font-weight: bold;
      transition: 0.3s;
    }
  }
`;

const Wrapper:any = styled.div<any>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  background: ${({ darkMode }) => ( darkMode ? '#FFFFFF' : '#38d9a9')};
  transition: 0.4s;
  color: ${({ darkMode }) => ( darkMode ? '#343a40' : '#FFFFFF')};
  padding: 1rem;
  margin-top: 8rem;
  width: 380px;
  height: ${({ minimal }) => ( minimal ? '250px' : '500px' )};
`;

const Header:any = styled.header<any>`
  border-bottom: solid 1px;
  width: 100%;
`;

const HeaderContents = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Body = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;

  button {
    border: solid 1px white;
    width: 60px;
    height: 25px;
    margin-right: 6rem;
    border-radius: 8px;
    cursor: pointer;
    background: #38d9a9;
    color: white;
    font-weight: bold;
  }
  button:hover {
    background: #f64141;
    transition: 0.4s;
  }
`;

const MemoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px;
  width: 100%;
`;

const LeftSide =  styled.div`
  padding: 1rem 1rem 1rem 2rem;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  width: 80%;
`;

const RightSide = styled.div`
  width: 30%;
`;


const Footer:any = styled.footer<any>`
  input {
    border: none;
    border-radius: 8px;
    padding: 0.8rem;
    font-size: 15px;
    margin-right: 5px;
    width: 70%;
    background: ${({ darkMode }) => darkMode ? '#f1f3f5' : '#FFFFFF'};
  }
  button {
    padding: 0.8rem;
    border: solid 1px white;
    border-radius: 8px;
    height: 44px;
    width: 80px;
    font-weight: bold;
    background: ${({ darkMode }) => darkMode ? '#f1f3f5' : '#FFFFFF'};
    color: ${({ darkMode }) => darkMode ? 'black' : '#38d9a9;' };
    cursor: pointer;
  }
  button:hover {
    background: white;
    transition: 0.2s;
    color: #38d9a9;
  }
`;

const Items = styled.h2`
  font-size: 20px;
  text-align: start;
  padding-left: 3rem;
  padding-bottom: 1rem;
`;

export default App;
