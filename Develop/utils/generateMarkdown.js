function generateMarkdown(data) {  
  let fileContent = " ";
  
  if (data.title) 
    fileContent += generateTitle(data.title);

  if (data.description);
    fileContent += generateDescription(data.description);
  
    return fileContent  
};

function generateTitle(title){
  return `# ${title}`
};

function generateDescription(description){
  return `# Description
  ${description}`
};

function generateInstallation(installation){
  return `# Installation
  ${installation}`
};

function generateUsage(usage){
  return `# Usage
  ${usage}`
};

function generateLicense(license){
  return `# License
  ${license}`
};

function generateContributors(contributors){
  return `# Contributors
  ${contributors}`
};

function generateTests(tests){
  return `# Test
  ${tests}`
};

function generateQuestions(questions){
  return `# Questions
  ${questions}`
};

function generateGitHub{
  return `# Github Information
  Username: ${gitHub}`
};

function generateBadge(data) {
  return `
    https://img.shields.io/badge/${data.label}-${badgeMessage}-${badgeColor}`
}

module.exports = generateMarkdown;
