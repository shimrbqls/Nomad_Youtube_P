import app from "./app";

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening); 

/*
M   Module      data
V   View        how does the data look
C   Controller  function that looks for the data
*/