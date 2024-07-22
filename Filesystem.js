// const fs = require('fs'); //import { readFile } from 'node:fs';
const path = require('path');


/** 
// READ FILE
fs.readFile(path.join(__dirname,'files','start.txt'),'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);// toString is needed to convert result data to string if there is no 'utf8'.
});

//WRITE FILE
//  Below line 'sub.txt'is the new file name and 'this is content of page' is content to be added to that file.
fs.writeFile(path.join(__dirname,'files','sub.txt'),'this ia conrent of new file', (err) => {
  if (err) throw err;
  console.log('writing complete');
  //UPDATE FILE 
  // apendFile commend is used in callback of the writeFile because this works in async way in some cases append ll done before write 
fs.appendFile(path.join(__dirname,'files','sub.txt'),'this ia content of new file update', (err) => {
  if (err) throw err;
  console.log('append complete');
  //RENAME FILE after update 
  fs.rename(path.join(__dirname,'files','sub.txt'),__path.join,'files','rename.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete');
  });
});
});
*/
// UISNG PROMISES TO AVOID CALLVBACK HELL const fsPromises = require('fs').PROMISES; 
const fsPromises = require('fs').promises;

const fileOps = async() => {
  try{
const data = await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf8')
console.log(data)
await fsPromises.writeFile(path.join(__dirname,'files','subs.txt'),'this is the content')
console.log('write complete');
await fsPromises.appendFile(path.join(__dirname,'files','subs.txt'),'this is updated content')
console.log('update completed')
await fsPromises.rename(path.join(__dirname,'files','subs.txt'),path.join(__dirname,'files','rename.txt'))
console.log('Rename Completed')
await fsPromises.unlink(path.join(__dirname,'files','sub.txt')) // to delete file use unlink

  }
  catch(err){
    console.error(err)
  }
}
fileOps()



console.log("hlo konlak"); // first this line ll execute because javascript runs code async so it wont wait for the previous function to give result
// process is already exist in node so no need to import it 
// this helps to catch eror and display it
process.on('uncaughtException',err =>{
    console.error(`There was an uncaught error:${err}`)
    process.exit(1)
})