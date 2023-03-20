// CRUD의 create

import fs from 'fs';

let name = "kimeuna";
// let date = new Date();
// let fileName = date.getSeconds() + name;
let year = "2023";
let month = "03";
let day = "20";
fileName = year + month + day + "_" + name;

//쓰다 파일을 동기방식으로
fs.writeFileSync("./" + fileName + ".txt", name);

