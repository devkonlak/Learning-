const {format} = require('date-fns')
const {v4 : uuid} = require('uuid')

const fs = require('fs')
const fsPromises = require ('fs').promises
const path = require('path')

const logEvents = async(message)=>{
    const dateTime = `${format(new Date(),'ddMMyyyy\tHH:mm:ss')}`
    const logItems = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItems)
    try{
        const logsDir = path.join(__dirname,'logs');
        if(!fs.existsSync(logsDir)){
         await  fsPromises.mkdir(logsDir);

        }
        const logFilePath = path.join(logsDir,'eventLog.txt');
        await fsPromises.appendFile(logFilePath, logItems);

    }catch(err){
     console.error(err)
    }

}
module.exports = logEvents