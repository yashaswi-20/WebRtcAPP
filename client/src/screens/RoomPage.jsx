import React,{useEffect,useCallback} from 'react'
import { useSocket } from '../context/SocketProvider';

const RoomPage =()=>{
    const socket =useSocket();

    const handleUserJoin = useCallback(({email, id})=>{
        console.log(email,id)
    },[])

    useEffect(()=>{
        socket.on("user:joined",handleUserJoin)

        return ()=>{
            socket.off("user:joined", handleUserJoin)
        }
    },[socket,handleUserJoin])
    return (
        <>
            <div>
                <h1>Room Page</h1>
            </div>
        </>
    )
}

export default RoomPage;