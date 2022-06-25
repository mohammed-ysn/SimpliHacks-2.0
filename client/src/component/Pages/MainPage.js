import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "../world";

const Container = styled.div`
  width:100%;
  height:100%;
  background:black;
`;

function MainPage(){
    return(
        <Container>
            <Canvas>
                <Suspense fallback={null}>
                    <Earth/>
                </Suspense>
            </Canvas>
        </Container>
   
    )
}

export default MainPage