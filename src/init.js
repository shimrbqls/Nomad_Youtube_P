import "./db.js";
import "./model/Video.js";
import app from "./server.js"

function handleListening(){
    console.log('Service listenting on port http://localhost:4000');
}

app.listen(4000,handleListening);