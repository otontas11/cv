 import {computerSkillsData,webSkillsData,designSkillsData,ideSkillsData,prjManageSkillsData,pacManageSkillsData,systemSkillsData,hobbiesData,additionalData} from './data.js'
//left tab info
let computerSkills=document.querySelector('.codingSkills_content')
let computerSkillsText=''


let webSkills=document.querySelector('.webSkills_content')
let webSkillsText=''

let designSkills=document.querySelector('.designSkills_content')
let designSkillsText=''

let ideSkills=document.querySelector('.ideSkills_content')
let ideSkillsText=''
 
let prjManageSkills=document.querySelector('.prjManageSkills_content')
let prjManageSkillsText=''

let pacManageSkills=document.querySelector('.pacManageSkills_content')
let pacManageSkillsText=''

let systemSkills=document.querySelector('.systemSkills_content')
let systemSkillsText=''

let hobbies=document.querySelector('.hobbies_content')
let hobbiesText=''

let additional=document.querySelector('.additional_content')
let additionalText=''



//computer skills
for (const key in computerSkillsData) {
    computerSkillsText+=`<span style="margin-right:.5rem;display:inline-block">${computerSkillsData[key]}</span>`  
}
computerSkills.innerHTML=computerSkillsText

///web skills
for (const key in webSkillsData) {
    webSkillsText+=`<span style="margin-right:.5rem;display:inline-block">${webSkillsData[key]}</span>`  
}
webSkills.innerHTML=webSkillsText

//design skills
for (const key in designSkillsData) {
    designSkillsText+=`<span style="margin-right:.5rem;display:inline-block">${designSkillsData[key]}</span>`  
}
designSkills.innerHTML=designSkillsText


//ide skills
for (const key in ideSkillsData) {
    ideSkillsText+=`<span style="margin-right:.5rem;display:inline-block">${ideSkillsData[key]}</span>`  
}
ideSkills.innerHTML=ideSkillsText

//project management skills
for (const key in prjManageSkillsData) {
    prjManageSkillsText+=`<span style="margin-right:.5rem;display:inline-block">${prjManageSkillsData[key]}</span>`  
}
prjManageSkills.innerHTML=prjManageSkillsText

//package management skills
for (const key in pacManageSkillsData) {
    pacManageSkillsText+=`<span style="margin-right:.5rem;display:inline-block">${pacManageSkillsData[key]}</span>`  
}
pacManageSkills.innerHTML=pacManageSkillsText


//system management skills
for (const key in systemSkillsData) {
    systemSkillsText+=`<span style="margin-right:.5rem;display:inline-block">${systemSkillsData[key]}</span>`  
}
systemSkills.innerHTML=systemSkillsText

//hobbies
for (const key in hobbiesData) {
    hobbiesText+=`<li>${hobbiesData[key]}</li>`  
}
hobbies.innerHTML=hobbiesText

//additional information
for (const key in additionalData) {
    additionalText+=`<li style="margin-bottom:.5rem">${additionalData[key]}</li>`  
}
additional.innerHTML=additionalText





