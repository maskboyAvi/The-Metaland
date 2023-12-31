import React from 'react'
import { ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei"
import { Text } from '@react-three/drei'
import { Float } from '@react-three/drei'
import { Model } from './Components/Model'
import { charactersAtom } from './Components/SocketManager'
import { useFrame } from '@react-three/fiber'
import { useAtom } from 'jotai'
import { socket } from "./Components/SocketManager"
import * as THREE from "three"
import { Physics, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { Groove } from './Components/Groove'
import { Wizz } from './Components/Wizz'
import {Women} from './Components/Women'
import { Punkboi } from './Components/Punkboi'
import { Punkgirl } from './Components/Punkgirl'
import { City } from './Components/City'
import { Cloud } from '@react-three/drei'
import { Hooded } from './Components/Hooded'


// import Character from './Components/Character'


const Experience = () => {
  console.log(Model);


  const [characters] = useAtom(charactersAtom);
  console.log(characters);

  useFrame((state, delta) => {

    //  state.camera.position(Model.position)

  })


  // const Character = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf")
  // console.log(Character);
  return (

    <>
      {/* <Environment preset='sunset'  /> */}
      {/* <ContactShadows blur={1} /> */}
      {/* <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      /> */}

      <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" />
      {/* <Environment preset="forest" /> */}
      <ambientLight intensity={1} />
      <Float floatIntensity={2} speed={10} >

        <Text color={"grey"} position={[1, 3, 1]} >
          {/* <center> */}

          Testing...
          {/* </center> */}
        </Text>
      </Float>
      <OrbitControls />
      <directionalLight />
      {/* <Cloud
        opacity={0.5}
        speed={0.4} // Rotation speed
        width={10} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={20} // Number of particles
      /> */}
      <Physics debug >
        {/* <Model position={[3, 0, 0]} />
      <Model /> */}
        {/* {
        characters.map((character)=>{
          return <Model key={character.id}  findme={character.id} position={
            new THREE.Vector3(
              character.position[0],
              character.position[1],
              character.position[2]
            )
          } />
        })
      } */}
        {
          characters.map((character) => {

            if (character.char === 0) {
              return <Model key={character.id} findme={character.id}  castShadow position={
                new THREE.Vector3(
                  character.position[0],
                  character.position[1],
                  character.position[2]
                )
              } />
            } else if (character.char ===1){
              return <Punkboi key={character.id} findme={character.id} position={
                new THREE.Vector3(
                  character.position[0],
                  character.position[1],
                  character.position[2]
                )
              } />
            } else if (character.char === 2) {
              return <Punkgirl key={character.id} findme={character.id} position={
                new THREE.Vector3(
                  character.position[0],
                  character.position[1],
                  character.position[2]
                )
              } />
            } else if (character.char === 3) {
              return <Wizz key={character.id} findme={character.id} position={
                new THREE.Vector3(
                  character.position[0],
                  character.position[1],
                  character.position[2]
                )
              } />
            } else if (character.char === 4) {
              return <Women key={character.id} findme={character.id} position={
                new THREE.Vector3(
                  character.position[0],
                  character.position[1],
                  character.position[2]
                )
              } />
            } else if (character.char === 5) {
              return <Hooded key={character.id} findme={character.id} position={
                new THREE.Vector3(
                  character.position[0],
                  character.position[1],
                  character.position[2]
                )
              } />
            }
          }
          )
        }
        {/* <RigidBody type="fixed" restitution={0} friction={1} colliders="hull"  >
          <mesh rotation-x={-Math.PI / 2} position-y={-0.001} receiveShadow >
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="#f0f0f0" />
          </mesh>
        </RigidBody> */}
      </Physics>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
        {/* <primitive scen
      e={Model.object} /> */}


      </mesh>
      <Groove receiveShadow onClick={(e) => {
        if (e.point.y < 0) {

          socket.emit("move", [e.point.x, 0, e.point.z])
        } else {

          socket.emit("move", [e.point.x, e.point.y, e.point.z])
        }
      }


      } />
      {/* <Model/> */}
      {/* <Characxter /> */}
      {/* <primitive object={Character.scene} position={[-3, 0.5, 0]} /> */}
      {/* <mesh position={[0, -1, 0]} >

        <boxGeometry args={[10, 0.5, 10]} />
        <meshNormalMaterial color={"cyan"} />

      </mesh> */}


    </>
  )
}

export default Experience