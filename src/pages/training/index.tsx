import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Training = () => {
  const navigate = useNavigate();
  const scrollPin = useRef<any>();
  const [currentScrollY, setCurrentScrollY] = useState<number>(0);

  const setPin = (): void => {
    localStorage.setItem('poiView', scrollPin.current.scrollTop);
    sessionStorage.setItem('poiView', scrollPin.current.scrollTop);
    navigate('/training/1');
  }

useEffect(() => {
  // window.scrollTo(0, 200)
  // console.log(window.scrollY, '윈도우 스크롤 Y');
  // console.log(currentScrollY, '현재 스크롤Y 상태값');
  // console.log(scrollPin.current?.scrollIntoView());
     scrollPin.current.scrollTop = localStorage.getItem('poiView');
     scrollPin.current.scrollTop = sessionStorage.getItem('poiView');
  // return () => localStorage.removeItem('poiView');
},[currentScrollY, scrollPin])


const handleScrollInfoButton = (): void => {
  // console.log(scrollPin);
  
  // console.log(scrollPin.current.children[0]);
  // console.log(scrollPin.current.children[1].scrollY);
  // console.log(scrollPin.current.children[5].offsetTop);
  // console.log(scrollPin.current.scrollTop);
  // scrollPin.current.scrollTop = localStorage.getItem('poiView');
}

  return (
    <TrainingContainer>
      <ScrollItem id="scrolls" ref={scrollPin}>
          {[1,2,3,4,5,6,7,8,9,10].map(() => {
            return (
              <>
                <BoxIndex onClick={setPin}>123</BoxIndex>
              </>
            )
          })}
          <ScrollButton onClick={handleScrollInfoButton}>스크롤 버튼</ScrollButton>
      </ScrollItem>
    </TrainingContainer>
  )
}

const TrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10rem;
`;

const ScrollItem = styled.div`
  padding: 5rem;
  border: solid 1px;
  max-height: 300px;
  overflow: auto;
  overflow-x: hidden;
`;

const BoxIndex = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem;
  border: solid 1px;
  cursor: pointer;
`;

const ScrollButton =styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 50px;
  border: solid 1px;
  background-color: red;
`;

export default Training;