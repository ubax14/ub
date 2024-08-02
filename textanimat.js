const contElemen= document.querySelector(".container");
const creers=["Ubah Salah Huussein","programmer","web developper","freelancer","instructure"];
let creerIndex=0;
let characterIndex=0;
updateText();
 function updateText(){
 characterIndex++;
contElemen.innerHTML=` <h1>My name is ,  I am a ${creers[creerIndex].slice(0,characterIndex)} </h1> `;
if(characterIndex===creers[creerIndex].length){
    creerIndex++;
    characterIndex=0;
}
if(creerIndex===creers.length){
    creerIndex=0;
}
setTimeout(updateText,400);
}