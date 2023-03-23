import app from './app.js'
import dotenv from 'dotenv';

//handling uncaught Exception
process.on('uncaughtException', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutding down the server for handling uncaught exception`);
})

//config
if(process.env.NODE_ENV !== 'PRODUCTION'){
    dotenv.config({
        path:'./config/.env'
    })
}

//create server

const server = app.listen(process.env.PORT, () => {
    console.log('Server running at port', process.env.PORT);
})


//unhandled promise rejection
process.on('unhandledRejection', (err)=>{
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandled promise rejection`);

    server.close(()=>{
        process.exit(1)
    })
})