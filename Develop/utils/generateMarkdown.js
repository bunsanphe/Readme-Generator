function generateMarkdown(data) {  
  let fileContent = " ";
  fileContent += generateBadge(data)
  
  if (data.title) 
    fileContent += generateTitle(data.title);

  if (data.description);
    fileContent += generateDescription(data.description);

  if (data.installation);
    fileContent += generateInstallation(data.installation);

  if (data.usage);
    fileContent += generateUsage(data.usage);
 
  if (data.license);
    fileContent += generateLicense(data.license);

  if (data.contributors);
    fileContent += generateContributors(data.contributors);    

  if (data.tests);
    fileContent += generateTests(data.tests); 

  if (data.gitHub);
    fileContent += generateGitHub(data.gitHub); 
    return fileContent  
};

function generateTitle(title){
  return `
  # Project Title
  ${title}
  
  `
};

function generateDescription(description){
  return `# Description
  ${description}
  
  `
};

function generateInstallation(installation){
  return `# Installation
  ${installation}
  
  `
};

function generateUsage(usage){
  return `# Usage
  ${usage}
  
  `
};

function generateLicense(license){
  return `# License
  ${license}
  
  `
};

function generateContributors(contributors){
  return `# Contributors
  ${contributors}
  
  `
};

function generateTests(tests){
  return `# Test
  ${tests}
  
  `
};

function generateQuestions(questions){
  return `# Questions
  ${questions}
  
  `
};

function generateGitHub(gitHub){
  return `# Github Information
  Username: ${gitHub}
  
  `
};

function generateBadge(data) {
  console.log(data)

  return `[![](https://img.shields.io/badge/${data.gitHub}-${data.badgeMessage}-${data.badgeColor})](https://github.com/${data.gitHub})`
}

module.exports = generateMarkdown;