const fs = require ('fs')

if(!fs.existsSync('./new')){
    fs.mkdir(
        './new',(err)=>{
            if(err) throw err
            console.log('Directory created')
        }
    )
}
/** TO REMOVE DIRECTORY  
 * if(fs.existsSync('./new')){
    fs.rmdir(
        './new',(err)=>{
            if(err) throw err
            console.log('Directory created')
        }
    )
}
 */
// to console unaughtexception
process.on('uncaughtException',err =>{
    console.error(`There was an uncaught error:${err}`)
    process.exit(1)
})