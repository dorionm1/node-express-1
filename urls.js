const axios = require('axios');
const fs = require('fs');
const path = require('path');
let urlArr;

if (process.argv.length !== 3) {
    console.error('Usage: node urls.js <file-path>');
    process.exit(1);
}

const filePath = path.resolve(process.argv[2]);

console.log(`Reading file: ${filePath}`);

fs.readFile(filePath, 'utf8', function(err,data) {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    urlArr = data.split("\n")

    for (let i=0; i<urlArr.length; i++){
        console.log(urlArr[i])
        axios.get(urlArr[i])
            .then(res => {
                const htmlContent = res.data;
                const sanitizedFileName = urlArr[i].replace(/[^a-zA-Z0-9]/g, '_');
                const fileName = `${sanitizedFileName}.html`;
                const filePath = path.join(__dirname, fileName);
            
                fs.writeFileSync(filePath, htmlContent)
                console.log(`Wrote to ${filePath}`)
            })
            .catch(error => {
            console.error(`Coundn't download ${urlArr[i]}: ${error.message}`);
            });
        }
});
