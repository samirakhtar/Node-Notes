const fs = require('fs');
const path = "./new_directory";
fs.access(path,(error)=>{
    if (error){
        fs.mkdir(path,(error)=>{
            if(error){
                console.log(error);
            } else
            console.log("New Directory created!");
        });
    }else{
        console.log("Given Directory already exist!!");
    }
});