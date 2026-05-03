const {Server}=require("socket.io");

const io = new Server(8000, {
    cors: true,
})

const emailTOSocketIdMap=new Map();
const socketIdtoEmailMap=new Map();

io.on('connection', (socket)=> {
     console.log(`socket connected , ${socket.id}`)
     socket.on('room:join', data => {
        const {email ,room}=data;
        emailTOSocketIdMap.set(email, socket.id)
        socketIdtoEmailMap.set(socket.id, email)
        io.to(room).emit("user:joined",{email, id: socket.id})
        socket.join(room)

        io.to(socket.id).emit("room:join",data)
     })
})