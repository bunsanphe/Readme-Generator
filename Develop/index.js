const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

async function userResponse() {
    try {
        const readMeQuestions = await inquirer.prompt([
            {
                type: "input",
                message: "Enter a project title",
                name: "title"
            },
            {
                type: "input",
                message: "Enter a description for your project",
                name: "description",
            },
            // {
            //     type: "input",
            //     message: "Enter a step-by-step description of how to get the development environment running",
            //     name: "installation",
            // },
            // {
            //     type: "input",
            //     message: "Provide instructions and examples for use. Include screenshots as needed.",
            //     name: "usage",
            // },
            // {
            //     type: "input",
            //     message: "This lets other developers know what they can and cannot do with your project.",
            //     name: "license",
            // },
            // {
            //     type: "input",
            //     message: "Enter any contributors or achknowledgements.",
            //     name: "contributors",
            // },
            // {
            //     type: "input",
            //     message: "Go the extra mile and write tests for your application. Then provide examples on how to run them.",
            //     name: "tests",
            // },
            // {
            //     type: "input",
            //     message: "",
            //     name: "questions",
            // },
            { 
                type: "input",
                message: "What is your Github username?",
                name: "gitHub",
            },
        ])

        // const badge = await inquirer.prompt([
        //     {
        //         message: "Next, we will create the your badge.",
        //         name: "badgeIntro"
        //     },
        //     {
        //         type: "input",
        //         message: "Enter label",
        //         name: "label",
        //     },
        //     {
        //         type: "input",
        //         message: "Enter message.",
        //         name: "badgeMessage",
        //     },
        //     {
        //         type: "checkbox",
        //         message: "Select color",
        //         name: "badgeColor",
        //         choices: [
        //             "brightgreen",
        //             "green",
        //             "yellowgreen",
        //             "yellow",
        //             "orange",
        //             "red",
        //             "blue",
        //             "lightgrey",
        //         ]
        //     }

        // ]);
        console.log(readMeQuestions)

        await writeFileAsync("README.md", generateMarkdown(readMeQuestions))
        
    }
    catch (err){
        console.log(err)
    }
}
userResponse();

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, generateMarkdown(data), function (err) {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log("success")
//         }
//     })
    // console.log(response);
    // generateMarkdown(response);
// }
