// const {names, ages} = require('./data');

// console.log(names);
// console.log(ages);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');

// read files
fs.readFile('./files/test.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
// writing files
fs.writeFile('./files/test2.txt',"hello again", err => {
    if(err){
        console.log(err);
    }
})


//directories
// if(!fs.existsSync('./files')) {

//     fs.mkdir("./files", (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("folder created");
//     });

// }else{
//     fs.rmdir('./files', err => {

//         if(err){
//             console.log(err);
//         }
//         console.log("floder deleted");
    
//     });
// }
//deleting files
if(fs.existsSync('./files/deleteme.txt')){
    fs.unlink('./files/deleteme.txt', err => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}