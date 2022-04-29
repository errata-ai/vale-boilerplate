const { exec } = require("child_process");
// const arguments  = process.argv


// process.argv.shift()  // skip node.exe
// process.argv.shift()  // skip name of js file

// let r = (process.argv.join(" "))
exec(`vale ..\\..\\test.rst`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});