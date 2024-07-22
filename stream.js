const fs = require ('fs')
const path = require ('path')
const rs = fs.createReadStream(path.join(__dirname,'files','bigfile.txt'),{encoding:'utf-8'}) //Readstream
const ws =fs.createWriteStream(path.join(__dirname,'files','new_bigfile.txt'))// Writestream

/** 
rs.on('data',(dataChunk) =>{
    ws.write(dataChunk)
}) // Here data is streamed as part i.e 'dataChunk' from rs to ws to create new_bigfile.txt 
*/

rs.pipe(ws) // same work as above code 