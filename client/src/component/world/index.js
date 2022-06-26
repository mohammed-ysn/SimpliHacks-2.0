import React from "react"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import { OrbitControls } from "@react-three/drei"
import daymap from "../../images/daymap.jpg"
import normal from "../../images/normalmap.jpg"
import specular from "../../images/specular.jpg"


function locCalc(lat, lng){
    
    let latCal=lat*Math.PI/180
    let lngCal=lng*Math.PI/180

    let x=Math.cos(lngCal)*Math.sin(latCal)
    let y=Math.sin(lngCal)*Math.sin(latCal)
    let z=Math.cos(latCal)

    return [x,y,z]

}


function Earth(props){

    const [colorMap, normalMap, specularMap] = useLoader(TextureLoader, [daymap,specular,normal])


    let pacificOcean=locCalc(40.7832,170.5085)
    let alanticOcean=locCalc(52.726084,30.862262)
    let indianOcean=locCalc(160.5088,1.9864)
    let articOcean=locCalc(100.9392,80.9968)
    
    return(
        <>
        
            
            <ambientLight intensity={0.8}/>
            <mesh >
            
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial   specularMap={specularMap}/>
                
                <meshStandardMaterial map={colorMap} normalMap={normalMap} />
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.8} panSpeed={0.7} rotateSpeed={0.4}/>
            </mesh>
            

            
            <mesh  position={pacificOcean}  onClick={() => window.open("http://localhost:3000/Pacific","_self")}>
                
                <sphereGeometry args={[0.03,20,20]}/>
                <meshPhongMaterial color="red" />

            </mesh>

            <mesh  position={alanticOcean}  onClick={() => window.open("http://localhost:3000/Alantic","_self")}>
                
                <sphereGeometry args={[0.03,20,20]}/>
                <meshPhongMaterial color="red" />

            </mesh>

            <mesh  position={indianOcean}  onClick={() => window.open("http://localhost:3000/Indian","_self")}>
                
                <sphereGeometry args={[0.03,20,20]}/>
                <meshPhongMaterial color="red" />

            </mesh>

            <mesh  position={articOcean}  onClick={() => window.open("http://localhost:3000/Artic","_self")}>
                
                <sphereGeometry args={[0.03,20,20]}/>
                <meshPhongMaterial color="red" />

            </mesh>
            
            
    
        </>
    )
    
}




export default Earth;