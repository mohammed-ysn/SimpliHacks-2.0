import React, { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { Link } from "react-router-dom"
import { TextureLoader } from "three"
import { OrbitControls } from "@react-three/drei"
import daymap from "../../images/daymap.jpg"
import normal from "../../images/normalmap.jpg"
import specular from "../../images/specular.jpg"
import cloud from "../../images/cloud.jpg"


function Earth(props){

    const [colorMap, normalMap, specularMap] = useLoader(TextureLoader, [daymap,specular,normal])
    

    // const earthRef=useRef()
    // const coordRef=useRef()
    
    // useFrame(({clock}) =>{
    //     const elapsedTime=clock.getElapsedTime();
    //     earthRef.current.rotation.y=elapsedTime/5
        
        
    // })
    return(
        <>
        [ww,ada]
            <ambientLight intensity={0.8}/>
            <mesh >
            
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshPhongMaterial color="red"  specularMap={specularMap}/>
                
                <meshStandardMaterial map={colorMap} normalMap={normalMap} />
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.4} panSpeed={0.7} rotateSpeed={0.4}/>
            </mesh>
            
            
            <mesh position={[0,2.5,0]}  onClick={() => window.open()}>
                
                <sphereGeometry args={[0.1, 32, 32]}/>
                <meshPhongMaterial color="blue" />


            </mesh>
            
            
            
    
        </>
    )
    
}




export default Earth;